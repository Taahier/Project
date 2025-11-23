import { useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const DecodingText = ({ text, className = '', speed = 50, loop = false, loopDelay = 4000 }) => {
    const [displayText, setDisplayText] = useState('');
    const [isDecoding, setIsDecoding] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: '-100px' });
    const loopTimeoutRef = useRef(null);

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';

    const startDecoding = () => {
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

            iteration += 1 / 3;

            if (iteration >= maxIterations) {
                clearInterval(interval);
                setDisplayText(text);
                setIsDecoding(false);

                // Schedule next loop if enabled
                if (loop && isInView) {
                    loopTimeoutRef.current = setTimeout(() => {
                        startDecoding();
                    }, loopDelay);
                }
            }
        }, speed);

        return () => clearInterval(interval);
    };

    useEffect(() => {
        if (!isInView) {
            setDisplayText(text);
            setIsDecoding(false);
            if (loopTimeoutRef.current) {
                clearTimeout(loopTimeoutRef.current);
            }
            return;
        }

        // Start initial decoding
        const cleanup = startDecoding();

        return () => {
            if (cleanup) cleanup();
            if (loopTimeoutRef.current) {
                clearTimeout(loopTimeoutRef.current);
            }
        };
    }, [isInView]);

    return (
        <span ref={ref} className={className}>
            {displayText || text}
        </span>
    );
};

export default DecodingText;
