import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [cursorColor, setCursorColor] = useState('#FF4655'); // Default red

    useEffect(() => {
        // Track mouse position and detect background color
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });

            // Get element under cursor
            const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
            if (elementUnderCursor) {
                // Get computed background color
                const bgColor = window.getComputedStyle(elementUnderCursor).backgroundColor;

                // Parse RGB values to determine brightness
                const rgbMatch = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
                if (rgbMatch) {
                    const r = parseInt(rgbMatch[1]);
                    const g = parseInt(rgbMatch[2]);
                    const b = parseInt(rgbMatch[3]);

                    // Calculate brightness (perceived luminance)
                    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

                    // Check if background is red-ish (high red, low green/blue)
                    const isRed = r > 150 && g < 100 && b < 100;

                    if (isRed) {
                        // Black on red backgrounds
                        setCursorColor('#000000');
                    } else if (brightness > 180) {
                        // Black on light backgrounds (beige, cream, white, etc.)
                        setCursorColor('#000000');
                    } else if (brightness < 50) {
                        // White on very dark/black backgrounds
                        setCursorColor('#FFFFFF');
                    } else {
                        // Red for medium brightness backgrounds
                        setCursorColor('#FF4655');
                    }
                } else {
                    // Fallback to red if can't parse color
                    setCursorColor('#FF4655');
                }
            }
        };

        // Detect when hovering over interactive elements
        const handleMouseOver = (e) => {
            const target = e.target;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('button') ||
                target.closest('a') ||
                target.style.cursor === 'pointer'
            ) {
                setIsHovering(true);
            }
        };

        const handleMouseOut = (e) => {
            const target = e.target;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('button') ||
                target.closest('a') ||
                target.style.cursor === 'pointer'
            ) {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    return (
        <>
            {/* Crosshair + symbol */}
            <motion.div
                className="custom-cursor-crosshair"
                animate={{
                    x: mousePosition.x - 15,
                    y: mousePosition.y - 15,
                    scale: isHovering ? 1.3 : 1,
                    rotate: isHovering ? 45 : 0,
                }}
                transition={{
                    x: { type: 'spring', stiffness: 500, damping: 28, mass: 0.5 },
                    y: { type: 'spring', stiffness: 500, damping: 28, mass: 0.5 },
                    scale: { duration: 0.2 },
                    rotate: { duration: 0.3 },
                }}
                style={{
                    position: 'fixed',
                    width: '30px',
                    height: '30px',
                    pointerEvents: 'none',
                    zIndex: 9999,
                }}
            >
                {/* Horizontal line */}
                <motion.div
                    animate={{ backgroundColor: cursorColor }}
                    transition={{ duration: 0.3 }}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '0',
                        width: '100%',
                        height: '2px',
                        transform: 'translateY(-50%)',
                    }}
                />
                {/* Vertical line */}
                <motion.div
                    animate={{ backgroundColor: cursorColor }}
                    transition={{ duration: 0.3 }}
                    style={{
                        position: 'absolute',
                        left: '50%',
                        top: '0',
                        width: '2px',
                        height: '100%',
                        transform: 'translateX(-50%)',
                    }}
                />
            </motion.div>

            {/* Center dot - bigger */}
            <motion.div
                className="custom-cursor-dot"
                animate={{
                    x: mousePosition.x - 6,
                    y: mousePosition.y - 6,
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: cursorColor,
                }}
                transition={{
                    x: { type: 'spring', stiffness: 1000, damping: 35 },
                    y: { type: 'spring', stiffness: 1000, damping: 35 },
                    scale: { duration: 0.2 },
                    backgroundColor: { duration: 0.3 },
                }}
                style={{
                    position: 'fixed',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    boxShadow: `0 0 15px ${cursorColor}80`,
                }}
            />
        </>
    );
};

export default CustomCursor;
