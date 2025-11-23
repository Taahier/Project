import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle, lineColor, accentColor, inverted }) => {
    const textPrimaryClass = inverted ? 'inverted-text-primary' : 'text-[var(--text-primary)]';
    const textSecondaryClass = inverted ? 'inverted-text-secondary' : 'text-[var(--text-secondary)]';

    return (
        <div className="relative mb-12 flex items-center gap-4">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '50px' }}
                className={`h-1 ${accentColor || 'bg-valorant-red'}`}
            />
            <div>
                <h2 className={`text-4xl md:text-5xl font-header font-bold ${textPrimaryClass} uppercase tracking-tighter`}>
                    {title}
                </h2>
                {subtitle && (
                    <p className={`${textSecondaryClass} font-body tracking-widest uppercase text-sm mt-1 font-bold`}>
                        {subtitle}
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
