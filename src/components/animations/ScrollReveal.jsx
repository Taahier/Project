import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const variants = {
    fade: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    },
    'slide-up': {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    },
    'slide-down': {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 }
    },
    'slide-left': {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 }
    },
    'slide-right': {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
    },
    'zoom-in': {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
    },
    'zoom-out': {
        hidden: { opacity: 0, scale: 1.2 },
        visible: { opacity: 1, scale: 1 }
    }
};

const ScrollReveal = ({
    children,
    className = '',
    animation = 'slide-up',
    delay = 0,
    duration = 0.6,
    viewport = { once: true, margin: '-50px' }
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, viewport);

    const selectedVariant = variants[animation] || variants['slide-up'];

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={selectedVariant}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.25, 0.1, 0.25, 1]
            }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
