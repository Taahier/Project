import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const TextReveal = ({ text, className = '', type = 'words', delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: '-50px' });

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.04 * i + delay },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    if (type === 'chars') {
        return (
            <motion.span
                ref={ref}
                className={className}
                variants={container}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                style={{ display: 'inline-block' }}
            >
                {text.split("").map((char, index) => (
                    <motion.span variants={child} key={index}>
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.span>
        );
    }

    // Default to words
    return (
        <motion.div
            ref={ref}
            className={className}
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25em' }}
        >
            {text.split(" ").map((word, index) => (
                <motion.span variants={child} key={index} style={{ display: 'inline-block' }}>
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default TextReveal;
