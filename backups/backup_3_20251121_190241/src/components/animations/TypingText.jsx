import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypingText = ({ children, className = '', speed = 0.1, delay = 0 }) => {
    const text = typeof children === 'string' ? children : '';
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let currentIndex = 0;
        const timeout = setTimeout(() => {
            const interval = setInterval(() => {
                if (currentIndex < text.length) {
                    setDisplayedText(text.slice(0, currentIndex + 1));
                    currentIndex++;
                } else {
                    setIsTyping(false);
                    clearInterval(interval);
                }
            }, speed * 1000);

            return () => clearInterval(interval);
        }, delay * 1000);

        return () => clearTimeout(timeout);
    }, [text, speed, delay]);

    return (
        <span className={`inline-flex items-center ${className}`}>
            {displayedText}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "steps(2)" }}
                className="inline-block w-[0.6em] h-[1em] bg-current ml-1 align-middle"
            />
        </span>
    );
};

export default TypingText;
