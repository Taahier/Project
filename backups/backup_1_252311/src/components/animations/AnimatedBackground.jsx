import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Animated Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                    backgroundImage: `
            linear-gradient(to right, #FF4655 1px, transparent 1px),
            linear-gradient(to bottom, #FF4655 1px, transparent 1px)
          `,
                    backgroundSize: '50px 50px',
                    animation: 'gridPulse 4s ease-in-out infinite',
                }}
            />

            {/* Primary Horizontal Scanline (moving down) - More visible */}
            <motion.div
                className="absolute left-0 right-0 h-[3px]"
                style={{
                    background: 'linear-gradient(to bottom, transparent, rgba(255, 70, 85, 0.8), transparent)',
                    boxShadow: '0 0 30px rgba(255, 70, 85, 0.8), 0 0 60px rgba(255, 70, 85, 0.4)',
                }}
                animate={{
                    top: ['-10%', '110%'],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />

            {/* Secondary Scanline (slower, offset) */}
            <motion.div
                className="absolute left-0 right-0 h-[2px]"
                style={{
                    background: 'linear-gradient(to bottom, transparent, rgba(255, 70, 85, 0.5), transparent)',
                    boxShadow: '0 0 20px rgba(255, 70, 85, 0.5)',
                }}
                animate={{
                    top: ['-10%', '110%'],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: 4,
                }}
            />

            {/* Vertical Scanline (moving right) - More visible */}
            <motion.div
                className="absolute top-0 bottom-0 w-[2px]"
                style={{
                    background: 'linear-gradient(to right, transparent, rgba(255, 70, 85, 0.6), transparent)',
                    boxShadow: '0 0 20px rgba(255, 70, 85, 0.6)',
                }}
                animate={{
                    left: ['-5%', '105%'],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />

            {/* Corner Accent Lines - More visible */}
            <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-valorant-red opacity-40" />
            <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-valorant-red opacity-40" />
            <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-valorant-red opacity-40" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-valorant-red opacity-40" />

            {/* Diagonal Scanline for extra effect */}
            <motion.div
                className="absolute w-[200%] h-[2px] origin-center"
                style={{
                    background: 'linear-gradient(to right, transparent, rgba(255, 70, 85, 0.3), transparent)',
                    transform: 'rotate(45deg)',
                    left: '-50%',
                }}
                animate={{
                    top: ['-50%', '150%'],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />
        </div>
    );
};

export default AnimatedBackground;
