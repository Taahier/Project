import React from 'react';
import { motion } from 'framer-motion';
import data from '../data.json';

const Hero = () => {
    const { header, contact } = data;

    return (
        <section id="intro" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[var(--bg-primary)]">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[var(--bg-primary)] z-0">
                <div className="absolute inset-0 bg-[var(--image-grid-pattern)] opacity-10"></div>
                <div className="absolute top-20 right-0 w-1/2 h-full bg-gradient-to-l from-valorant-red/10 to-transparent clip-path-slant"></div>

                {/* Horizontal Electricity/Energy Lines */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        className="absolute top-[20%] left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-valorant-red to-transparent opacity-70 blur-[1px]"
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                    />
                    <motion.div
                        className="absolute top-[60%] left-0 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-valorant-red to-transparent opacity-50 blur-[2px]"
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 2 }}
                    />
                    <motion.div
                        className="absolute top-[85%] left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-[var(--text-primary)] to-transparent opacity-30"
                        animate={{ x: ['200%', '-100%'] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 0.5 }}
                    />
                    <motion.div
                        className="absolute top-[40%] left-0 w-full h-px bg-gradient-to-r from-transparent via-valorant-red/50 to-transparent opacity-20"
                        animate={{ opacity: [0.2, 0.5, 0.2] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </div>

            <div className="w-full px-8 sm:px-12 lg:px-16 relative z-10">
                <div className="grid md:grid-cols-2 gap-32 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-valorant-red font-bold tracking-widest uppercase mb-4 text-lg">
                            {header.tagline}
                        </h2>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-header font-bold text-[var(--text-primary)] uppercase leading-none mb-6">
                            {header.title.split(' ')[0]} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] to-gray-400">
                                {header.title.split(' ')[1]}
                            </span>
                        </h1>
                        <p className="text-[var(--text-secondary)] text-lg md:text-xl max-w-xl mb-8 font-body border-l-4 border-valorant-red pl-6 leading-relaxed">
                            {header.description}
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <a href="#projects" className="btn-valorant text-lg px-10 py-4">
                                View Projects
                            </a>
                            <a href={contact.links.Resume} target="_blank" rel="noopener noreferrer" className="px-10 py-4 border border-[var(--border-primary)] text-[var(--text-primary)] font-bold tracking-wider uppercase hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all duration-300 text-lg">
                                Download CV
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden md:block"
                    >
                        {/* Abstract Tech Rectangle/Graphic */}
                        <div className="relative w-full aspect-square max-w-lg mx-auto">
                            <div className="absolute inset-0 electric-border"></div>
                            <div className="absolute inset-8 border border-[var(--border-primary)]"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-80 h-80 bg-valorant-red/20 blur-3xl"></div>
                            </div>
                            {/* Placeholder for User Image if available, or abstract graphic */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-9xl font-header font-bold text-[var(--text-primary)]/5 select-none">
                                    TM
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[var(--text-secondary)] flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-valorant-red to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
