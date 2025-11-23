import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxSection = ({ children, speed = 0.5, className = '' }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    });

    // Only animate during entry (0 to 0.5), then lock in place
    // Sections slide up and fade in as they enter, then stay fixed
    const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, 0]);

    // Scale effect - grow from 90% to 100% during entry, then stay at 100%
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1]);

    // Opacity effect - fade in during entry, then stay at 100%
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.5, 1], [0, 1, 1, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                y,
                scale,
                opacity
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ParallaxSection;
