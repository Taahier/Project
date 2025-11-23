import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const DrawSVG = ({ children, duration = 2, delay = 0, once = false }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: '-50px' });

    // Clone the SVG element and add animation to all paths
    const animatedChildren = children?.props?.children ? (
        <svg
            {...children.props}
            ref={ref}
            style={{ ...children.props.style, overflow: 'visible' }}
        >
            {Array.isArray(children.props.children)
                ? children.props.children.map((child, index) => {
                    if (child?.type === 'path' || child?.props?.d) {
                        return (
                            <motion.path
                                key={index}
                                {...child.props}
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={
                                    isInView
                                        ? { pathLength: 1, opacity: 1 }
                                        : { pathLength: 0, opacity: 0 }
                                }
                                transition={{
                                    pathLength: {
                                        duration,
                                        delay: delay + index * 0.1,
                                        ease: 'easeInOut',
                                    },
                                    opacity: {
                                        duration: 0.3,
                                        delay: delay + index * 0.1,
                                    },
                                }}
                            />
                        );
                    }
                    return child;
                })
                : children.props.children?.type === 'path' ||
                    children.props.children?.props?.d ? (
                    <motion.path
                        {...children.props.children.props}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={
                            isInView
                                ? { pathLength: 1, opacity: 1 }
                                : { pathLength: 0, opacity: 0 }
                        }
                        transition={{
                            pathLength: {
                                duration,
                                delay,
                                ease: 'easeInOut',
                            },
                            opacity: {
                                duration: 0.3,
                                delay,
                            },
                        }}
                    />
                ) : (
                    children.props.children
                )}
        </svg>
    ) : (
        children
    );

    return animatedChildren;
};

export default DrawSVG;
