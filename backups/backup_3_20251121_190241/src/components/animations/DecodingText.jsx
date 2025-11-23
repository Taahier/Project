import { useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const DecodingText = ({ text, className = '', speed = 50 }) => {
    const [displayText, setDisplayText] = useState('');
    const [isDecoding, setIsDecoding] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: '-100px' }); // Changed to false

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';

    useEffect(() => {
        if (!isInView) {
            // Reset when out of view
            setDisplayText('');
            setIsDecoding(false);
            return;
        }

        if (isDecoding) return;

        setIsDecoding(true);
        let iteration = 0;
        const maxIterations = text.length;

        const interval = setInterval(() => {
            setDisplayText((prev) =>
                text
                    .split('')
                    .map((char, index) => {
                        if (char === ' ') return ' ';

                        if (index < iteration) {
                            return text[index];
                        }

                        return characters[Math.floor(Math.random() * characters.length)];
                    })
                    .join('')
            );

            iteration += 1 / 3; // Slower progression for more dramatic effect

            if (iteration >= maxIterations) {
                clearInterval(interval);
                setDisplayText(text);
                setIsDecoding(false);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [isInView, text, speed]);

    return (
        <span ref={ref} className={className}>
            {displayText || text}
        </span>
    );
};

export default DecodingText;
