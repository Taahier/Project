import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ScrollReveal = ({ children, className = '' }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: false, // Animate every time
        margin: '-100px' // Trigger when 100px into viewport
    });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
            }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
