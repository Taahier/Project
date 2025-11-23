import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');
    const date = time.toLocaleDateString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    return (
        <div className="relative">
            {/* Main Clock Display */}
            <div className="flex items-center gap-2 mb-4">
                {/* Hours */}
                <div className="relative">
                    <motion.div
                        key={hours}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="text-7xl md:text-8xl font-mono font-bold text-white tracking-tighter"
                        style={{
                            textShadow: '0 0 20px rgba(255, 70, 85, 0.8), 0 0 40px rgba(255, 70, 85, 0.4)'
                        }}
                    >
                        {hours}
                    </motion.div>
                    <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-valorant-red to-transparent opacity-50"></div>
                </div>

                {/* Separator */}
                <motion.div
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-7xl md:text-8xl font-mono font-bold text-black"
                >
                    :
                </motion.div>

                {/* Minutes */}
                <div className="relative">
                    <motion.div
                        key={minutes}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="text-7xl md:text-8xl font-mono font-bold text-white tracking-tighter"
                        style={{
                            textShadow: '0 0 20px rgba(255, 70, 85, 0.8), 0 0 40px rgba(255, 70, 85, 0.4)'
                        }}
                    >
                        {minutes}
                    </motion.div>
                    <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-valorant-red to-transparent opacity-50"></div>
                </div>

                {/* Separator */}
                <motion.div
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
                    className="text-7xl md:text-8xl font-mono font-bold text-black"
                >
                    :
                </motion.div>

                {/* Seconds */}
                <div className="relative">
                    <motion.div
                        key={seconds}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="text-7xl md:text-8xl font-mono font-bold text-white tracking-tighter"
                        style={{
                            textShadow: '0 0 20px rgba(255, 70, 85, 0.8), 0 0 40px rgba(255, 70, 85, 0.4)'
                        }}
                    >
                        {seconds}
                    </motion.div>
                    <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-valorant-red to-transparent opacity-50"></div>
                </div>
            </div>

            {/* Date Display */}
            <div className="flex items-center gap-3 text-white/80 font-mono text-sm uppercase tracking-widest">
                <div className="w-2 h-2 bg-valorant-red rotate-45"></div>
                <span>{date}</span>
            </div>

            {/* Decorative Corner Brackets */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-valorant-red/50"></div>
            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-valorant-red/50"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-valorant-red/50"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-valorant-red/50"></div>

            {/* Scanning Line Effect */}
            <motion.div
                animate={{ y: [-100, 100] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 pointer-events-none"
            >
                <div className="w-full h-px bg-gradient-to-r from-transparent via-valorant-red/30 to-transparent"></div>
            </motion.div>
        </div>
    );
};

export default DigitalClock;
