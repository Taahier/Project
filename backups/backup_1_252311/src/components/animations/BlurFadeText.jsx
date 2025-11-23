import React from 'react';
import { motion } from 'framer-motion';

const BlurFadeText = ({ children, className = '', delay = 0 }) => {
    return (
        <motion.span
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            className={`inline-block ${className}`}
        >
            {children}
        </motion.span>
    );
};

export default BlurFadeText;
