import React from 'react';
import { motion } from 'framer-motion';
import DecodingText from './animations/DecodingText';
import DrawSVG from './animations/DrawSVG';

const SectionHeader = ({ title, subtitle, lineColor, accentColor, inverted, iconColor }) => {
    const textPrimaryClass = inverted ? 'inverted-text-primary' : 'text-[var(--text-primary)]';
    const textSecondaryClass = inverted ? 'inverted-text-secondary' : 'text-[var(--text-secondary)]';
    const crosshairColor = iconColor || '#FF4655'; // Default to red

    return (
        <div className="relative mb-12 flex items-center gap-4">
            {/* Animated Crosshair Icon */}
            <DrawSVG duration={1.2} delay={0}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="flex-shrink-0">
                    <circle cx="20" cy="20" r="15" stroke={crosshairColor} strokeWidth="2" />
                    <line x1="20" y1="5" x2="20" y2="15" stroke={crosshairColor} strokeWidth="2" />
                    <line x1="20" y1="25" x2="20" y2="35" stroke={crosshairColor} strokeWidth="2" />
                    <line x1="5" y1="20" x2="15" y2="20" stroke={crosshairColor} strokeWidth="2" />
                    <line x1="25" y1="20" x2="35" y2="20" stroke={crosshairColor} strokeWidth="2" />
                    <circle cx="20" cy="20" r="3" fill={crosshairColor} />
                </svg>
            </DrawSVG>

            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '50px' }}
                className={`h-1 ${accentColor || 'bg-valorant-red'}`}
            />
            <div>
                <h2 className={`text-4xl md:text-5xl font-header font-bold ${textPrimaryClass} uppercase tracking-tighter`}>
                    <DecodingText text={title} speed={30} />
                </h2>
                {subtitle && (
                    <p className={`${textSecondaryClass} font-body tracking-widest uppercase text-sm mt-1 font-bold`}>
                        <DecodingText text={subtitle} speed={40} />
                    </p>
                )}
            </div>
            <div className={`flex-grow h-px ${lineColor || 'bg-[var(--border-primary)]'} ml-4 relative`}>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-valorant-red rotate-45" />
            </div>
        </div>
    );
};

export default SectionHeader;
