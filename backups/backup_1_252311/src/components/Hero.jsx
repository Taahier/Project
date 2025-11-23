import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import data from '../data.json';
import DecodingText from './animations/DecodingText';
import TextReveal from './animations/TextReveal';


const Hero = () => {
    const { header, contact } = data;
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={containerRef} id="intro" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background split */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[#ECE8E1]" />
                <motion.div
                    style={{ y, opacity }}
                    className="absolute inset-0 w-full h-full hidden lg:block"
                >
                    <img
                        className="w-full h-full object-cover"
                        src="/images/hero.png"
                        alt="Hero background"
                        style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 70% 100%)' }}
                    />
                </motion.div>
            </div>

            <div className="w-full px-8 sm:px-12 lg:px-16 relative z-10">
                <div className="grid md:grid-cols-2 gap-32 items-center">
                    <div className="flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-valorant-red font-bold tracking-widest uppercase mb-4 text-lg">
                                {header.tagline}
                            </h2>
                        </motion.div>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-header font-bold uppercase leading-none mb-6 !text-black">
                            <DecodingText text={header.title.split(' ')[0]} speed={40} />
                            <br />
                            <DecodingText text={header.title.split(' ')[1]} speed={40} />
                        </h1>

                        <div className="text-gray-800 text-lg md:text-xl max-w-xl mb-8 font-body border-l-4 border-valorant-red pl-6 leading-relaxed">
                            <TextReveal text={header.description} delay={0.5} />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="flex flex-wrap gap-6"
                        >
                            <a href="#projects" className="btn-valorant text-lg px-10 py-4">
                                View Projects
                            </a>
                            <a
                                href={contact.links.Resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-10 py-4 border border-black text-black font-bold tracking-wider uppercase hover:bg-black hover:text-white transition-all duration-300 text-lg"
                            >
                                Download CV
                            </a>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative hidden md:block"
                    >
                        {/* Placeholder for future foreground element */}
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-black flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-valorant-red to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
