import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EntryAnimation = ({ onComplete }) => {
    const canvasRef = useRef(null);
    const [phase, setPhase] = useState('intro'); // intro, paused, warp, finished
    const [showPrompt, setShowPrompt] = useState(false);
    const requestRef = useRef();
    const starsRef = useRef([]);
    const shootingStarsRef = useRef([]);
    const phaseRef = useRef('intro');

    // Sync phase ref
    useEffect(() => {
        phaseRef.current = phase;
    }, [phase]);

    useEffect(() => {
        // Nuclear option: Fix the body in place
        const scrollY = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', resize);
        resize();

        // Static Star Class
        class Star {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 1.5;
                this.opacity = Math.random();
                this.twinkleSpeed = 0.01 + Math.random() * 0.03;
            }

            update() {
                // If warping, just fade out and stop moving
                if (phaseRef.current === 'warp') {
                    this.opacity -= 0.05;
                    if (this.opacity < 0) this.opacity = 0;
                    return;
                }

                this.opacity += this.twinkleSpeed;
                if (this.opacity > 1 || this.opacity < 0.2) {
                    this.twinkleSpeed = -this.twinkleSpeed;
                }
            }

            draw(ctx) {
                if (this.opacity <= 0) return;
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Shooting Star Class
        class ShootingStar {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * width;
                this.y = Math.random() * (height * 0.5); // Top half
                this.length = 0;
                this.speed = 15 + Math.random() * 10;
                this.angle = Math.PI / 4 + (Math.random() - 0.5) * 0.2; // ~45 degrees
                this.active = true;
                this.timer = 0;
            }

            update() {
                if (!this.active) return;

                // Kill immediately if warping
                if (phaseRef.current === 'warp') {
                    this.active = false;
                    return;
                }

                this.x += Math.cos(this.angle) * this.speed;
                this.y += Math.sin(this.angle) * this.speed;
                this.length = Math.min(this.length + 5, 150);
                this.timer++;

                if (this.x > width || this.y > height || this.timer > 100) {
                    this.active = false;
                }
            }

            draw(ctx) {
                if (!this.active) return;

                const tailX = this.x - Math.cos(this.angle) * this.length;
                const tailY = this.y - Math.sin(this.angle) * this.length;

                const gradient = ctx.createLinearGradient(this.x, this.y, tailX, tailY);
                gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

                ctx.strokeStyle = gradient;
                ctx.lineWidth = 2;
                ctx.lineCap = 'round';
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(tailX, tailY);
                ctx.stroke();

                // Head glow
                ctx.fillStyle = 'white';
                ctx.beginPath();
                ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Initialize Stars
        starsRef.current = [];
        for (let i = 0; i < 60; i++) {
            starsRef.current.push(new Star());
        }

        // Animation Loop
        const animate = () => {
            // Clear canvas
            ctx.fillStyle = '#000000'; // Solid black
            ctx.fillRect(0, 0, width, height);

            // Draw Static Stars
            starsRef.current.forEach(star => {
                star.update();
                star.draw(ctx);
            });

            // Manage Shooting Stars
            // Randomly spawn new one
            if (phaseRef.current !== 'warp' && Math.random() < 0.02) { // 2% chance per frame
                shootingStarsRef.current.push(new ShootingStar());
            }

            // Update Shooting Stars
            shootingStarsRef.current.forEach((star, index) => {
                star.update();
                star.draw(ctx);
                if (!star.active) {
                    shootingStarsRef.current.splice(index, 1);
                }
            });

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(requestRef.current);

            // Restore scroll
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
            window.scrollTo(0, 0); // Ensure we start at top
        };
    }, []);


    // Logic Sequence
    useEffect(() => {
        const timer1 = setTimeout(() => {
            setPhase('paused');
            setShowPrompt(true);
        }, 2000);

        return () => clearTimeout(timer1);
    }, []);

    // Interaction Handler
    const handleInteraction = () => {
        if (phase === 'paused') {
            setPhase('warp');
            setShowPrompt(false);

            // Warp speed for 1.5s then finish
            setTimeout(() => {
                setPhase('finished');
                onComplete();
            }, 1500);
        }
    };

    // Listen for scroll/wheel
    useEffect(() => {
        const handleScroll = (e) => {
            // Prevent default scrolling behavior
            if (phase !== 'finished') {
                // Try to prevent default if possible (mostly for touch/click)
                if (e.cancelable) {
                    e.preventDefault();
                }
            }

            if (phase === 'paused') {
                handleInteraction();
            }
        };

        // Use { passive: false } to allow preventDefault
        window.addEventListener('wheel', handleScroll, { passive: false });
        window.addEventListener('touchmove', handleScroll, { passive: false });
        window.addEventListener('click', handleScroll);

        return () => {
            window.removeEventListener('wheel', handleScroll);
            window.removeEventListener('touchmove', handleScroll);
            window.removeEventListener('click', handleScroll);
        };
    }, [phase]);

    return (
        <AnimatePresence>
            {phase !== 'finished' && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
                    className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
                    style={{ touchAction: 'none' }}
                >
                    <canvas
                        ref={canvasRef}
                        className="absolute inset-0 w-full h-full"
                    />

                    {/* Prompt Box */}
                    <AnimatePresence>
                        {showPrompt && (
                            <motion.div
                                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -50, scale: 1.1, transition: { duration: 0.3 } }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="relative z-10 flex flex-col items-center justify-center"
                            >
                                <div className="p-1 border border-valorant-red/50 bg-black/80 backdrop-blur-sm">
                                    <div className="border border-white/10 p-6 flex flex-col items-center gap-4 min-w-[200px]">
                                        <span className="text-valorant-white font-header tracking-[0.2em] text-sm uppercase">
                                            System Ready
                                        </span>
                                        <div className="h-px w-full bg-gradient-to-r from-transparent via-valorant-red to-transparent" />
                                        <span className="text-white font-bold tracking-widest text-xs animate-pulse">
                                            SCROLL TO INITIALIZE
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default EntryAnimation;
