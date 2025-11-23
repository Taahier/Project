import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SystemBoot = ({ onComplete }) => {
    const [lines, setLines] = useState([]);
    const [isComplete, setIsComplete] = useState(false);

    const bootSequence = [
        "INITIALIZING KERNEL...",
        "LOADING MODULES...",
        "VERIFYING INTEGRITY...",
        "ESTABLISHING SECURE CONNECTION...",
        "ACCESSING MAINFRAME...",
        "DECRYPTING ASSETS...",
        "SYSTEM ONLINE."
    ];

    useEffect(() => {
        let delay = 0;
        bootSequence.forEach((line, index) => {
            delay += Math.random() * 300 + 100;
            setTimeout(() => {
                setLines(prev => [...prev, line]);
                if (index === bootSequence.length - 1) {
                    setTimeout(() => {
                        setIsComplete(true);
                        setTimeout(onComplete, 800);
                    }, 500);
                }
            }, delay);
        });
    }, []);

    return (
        <AnimatePresence>
            {!isComplete && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
                    className="fixed inset-0 z-[9999] bg-black flex items-center justify-center font-mono text-valorant-red overflow-hidden"
                >
                    <div className="w-full max-w-lg p-8">
                        <div className="mb-4 border-b border-valorant-red/30 pb-2 flex justify-between items-end">
                            <span className="text-xs text-valorant-red/50">T-OS v2.0.25</span>
                            <span className="text-xs text-valorant-red/50">SECURE BOOT</span>
                        </div>
                        <div className="space-y-2 h-64 overflow-hidden flex flex-col justify-end">
                            {lines.map((line, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-sm md:text-base"
                                >
                                    <span className="mr-2 opacity-50">{`>`}</span>
                                    {line}
                                </motion.div>
                            ))}
                            <motion.div
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                className="w-3 h-5 bg-valorant-red inline-block ml-2"
                            />
                        </div>

                        {/* Progress Bar */}
                        <div className="mt-8 w-full h-1 bg-valorant-red/20 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-valorant-red"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2.5, ease: "easeInOut" }}
                            />
                        </div>
                    </div>

                    {/* Background Grid */}
                    <div className="absolute inset-0 pointer-events-none opacity-10"
                        style={{
                            backgroundImage: `linear-gradient(rgba(255, 70, 85, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 70, 85, 0.1) 1px, transparent 1px)`,
                            backgroundSize: '20px 20px'
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SystemBoot;
