import React from 'react';
import { motion } from 'framer-motion';
import data from '../data.json';
import DecodingText from './animations/DecodingText';

const Hero = () => {
    const { header, contact } = data;
    return (
        <section id="intro" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background split */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[#ECE8E1]" />
                <img
                    className="absolute inset-0 w-full h-full object-cover hidden lg:block"
                    src="/images/hero.png"
                    alt="Hero background"
                    style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 70% 100%)' }}
                />
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
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-header font-bold uppercase leading-none mb-6 !text-black">
                            <DecodingText text={header.title.split(' ')[0]} speed={40} />
                            <br />
                            <DecodingText text={header.title.split(' ')[1]} speed={40} />
                        </h1>
                        <p className="text-gray-800 text-lg md:text-xl max-w-xl mb-8 font-body border-l-4 border-valorant-red pl-6 leading-relaxed">
                            {header.description}
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <a href="#projects" className="btn-valorant text-lg px-10 py-4">
                                View Projects
                            </a>
                            <a
                                href={contact.links.Resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-10 py-4 border border-black text-black font-bold tracking-wider uppercase hover:bg-black hover:text-white transition-all duration-300 text-lg"
                            >
                                Download CV
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative hidden md:block"
                    >
                        {/* Placeholder for future foreground element */}
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-black flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-valorant-red to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
