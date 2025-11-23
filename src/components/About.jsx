import React, { useRef } from 'react';
import SectionHeader from './SectionHeader';
import data from '../data.json';
import { Target, Zap, Code, Shield, Lock, ArrowRight, Circle } from 'lucide-react';
import ScrollReveal from './animations/ScrollReveal';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
    const { about, mission_objectives } = data;
    const sectionRef = useRef(null);

    // Track scroll progress of this section
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "start start"]
    });

    // Transform scroll progress to x position (0% to -100%)
    const redX = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
    const splitOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

    return (
        <section ref={sectionRef} id="about" className="py-20 bg-[#B80000] relative overflow-hidden">
            {/* Animated Red Reveal - Scroll-Based */}
            <motion.div
                className="absolute inset-0 bg-[#B80000] z-20"
                style={{ x: redX }}
            />

            {/* Diagonal Split Background */}
            <motion.div
                className="absolute inset-0"
                style={{ opacity: splitOpacity }}
            >
                <div className="absolute inset-0 bg-black" style={{
                    clipPath: 'polygon(0 0, 60% 0, 40% 100%, 0 100%)'
                }}></div>
            </motion.div>

            {/* Geometric Patterns */}
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute border-2 border-white"
                        style={{
                            width: `${(i + 1) * 40}px`,
                            height: `${(i + 1) * 40}px`,
                            top: '50%',
                            right: '10%',
                            transform: 'translate(50%, -50%) rotate(45deg)',
                        }}
                    />
                ))}
            </div>

            <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionHeader title="Agent Profile" subtitle="About Me" lineColor="bg-white" accentColor="bg-white" iconColor="#FFFFFF" />

                {/* ICONIC LAYOUT */}
                <div className="grid lg:grid-cols-12 gap-8">
                    {/* LEFT SIDE - MASSIVE TEXT BLOCK */}
                    <div className="lg:col-span-7">
                        <ScrollReveal animation="slide-right" duration={0.8}>
                            {/* HUGE TITLE */}
                            <div className="mb-12">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-2 h-20 bg-white"></div>
                                    <h2 className="text-6xl md:text-7xl font-josefin font-black text-white uppercase leading-none">
                                        Mission<br />Briefing
                                    </h2>
                                </div>
                                <div className="flex items-center gap-3 ml-6">
                                    <Circle className="w-3 h-3 text-white fill-white animate-pulse" />
                                    <span className="text-white font-mono text-sm tracking-widest">CLASSIFIED INTEL</span>
                                </div>
                            </div>

                            {/* SOLID WHITE TEXT BLOCK */}
                            <div className="bg-white p-10 mb-8 relative">
                                {/* Corner Cuts */}
                                <div className="absolute top-0 left-0 w-8 h-8 bg-[#B80000]"></div>
                                <div className="absolute bottom-0 right-0 w-8 h-8 bg-[#B80000]"></div>

                                <div className="space-y-6 text-black text-xl leading-relaxed font-light">
                                    {about.summary.map((paragraph, index) => (
                                        <motion.p
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.2 }}
                                            viewport={{ once: true }}
                                            className="relative pl-6 border-l-4 border-black"
                                        >
                                            {paragraph}
                                        </motion.p>
                                    ))}
                                </div>
                            </div>

                            {/* EXPERTISE - BOLD GRID */}
                            <div className="grid grid-cols-2 gap-4">
                                {Object.entries(about.expertise).map(([key, value], index) => {
                                    const icons = [Code, Zap, Shield, Lock];
                                    const Icon = icons[index];
                                    const colors = ['#000000', '#FFFFFF', '#000000', '#FFFFFF'];
                                    const bgColors = ['#FFFFFF', '#000000', '#FFFFFF', '#000000'];
                                    const numberColors = ['#000000', '#B80000', '#000000', '#B80000'];

                                    return (
                                        <motion.div
                                            key={key}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            whileHover={{ scale: 1.05 }}
                                            className="relative p-6 cursor-pointer group"
                                            style={{ backgroundColor: bgColors[index] }}
                                        >
                                            {/* Number */}
                                            <div
                                                className="absolute top-2 right-2 text-6xl font-black opacity-10"
                                                style={{ color: numberColors[index] }}
                                            >
                                                {index + 1}
                                            </div>

                                            <Icon className="w-8 h-8 mb-4" style={{ color: colors[index] }} />

                                            <h4
                                                className="font-black uppercase text-sm mb-2 tracking-wider"
                                                style={{ color: colors[index] }}
                                            >
                                                {key.replace(/_/g, ' ')}
                                            </h4>
                                            <p
                                                className="text-xs leading-relaxed line-clamp-2"
                                                style={{ color: colors[index], opacity: 0.8 }}
                                            >
                                                {value}
                                            </p>

                                            {/* Hover Arrow */}
                                            <ArrowRight
                                                className="absolute bottom-4 right-4 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity"
                                                style={{ color: colors[index] }}
                                            />
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* RIGHT SIDE - OBJECTIVES TOWER */}
                    <div className="lg:col-span-5">
                        <ScrollReveal animation="slide-left" duration={0.8} delay={0.2}>
                            <div className="bg-black p-8 h-full relative">
                                {/* Massive Corner Brackets */}
                                <div className="absolute top-0 left-0 w-16 h-16 border-t-8 border-l-8 border-white"></div>
                                <div className="absolute top-0 right-0 w-16 h-16 border-t-8 border-r-8 border-white"></div>
                                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-8 border-l-8 border-white"></div>
                                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-8 border-r-8 border-white"></div>

                                {/* Header */}
                                <div className="mb-8 pb-6 border-b-4 border-[#B80000]">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Target className="text-[#B80000] w-8 h-8" />
                                        <h3 className="text-3xl font-josefin font-black text-[#B80000] uppercase">
                                            Objectives
                                        </h3>
                                    </div>
                                    <div className="text-white/60 font-mono text-xs tracking-widest">
                                        CURRENT MISSION TARGETS
                                    </div>
                                </div>

                                {/* Objectives List */}
                                <div className="space-y-6 mb-8">
                                    {mission_objectives.map((objective, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.15 }}
                                            viewport={{ once: true }}
                                            className="group"
                                        >
                                            {/* Objective Number */}
                                            <div className="flex items-start gap-4">
                                                <div className="flex-shrink-0 w-12 h-12 bg-[#B80000] flex items-center justify-center">
                                                    <span className="text-white font-black text-xl">
                                                        {String(index + 1).padStart(2, '0')}
                                                    </span>
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="text-white font-black uppercase text-sm mb-2 tracking-wider">
                                                        {objective.title}
                                                    </h4>
                                                    <p className="text-white/80 text-sm leading-relaxed">
                                                        {objective.description}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Solid Progress Bar */}
                                            <div className="mt-4 h-2 bg-[#B80000]/20">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${Math.random() * 30 + 70}%` }}
                                                    transition={{ delay: index * 0.2, duration: 1 }}
                                                    viewport={{ once: true }}
                                                    className="h-full bg-[#B80000]"
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Stats - BOLD BLOCKS */}
                                <div className="grid grid-cols-2 gap-4 pt-6 border-t-4 border-[#B80000]">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-[#B80000] p-6 text-center cursor-pointer"
                                    >
                                        <div className="text-5xl font-black text-white mb-2">100</div>
                                        <div className="text-white text-xs font-bold uppercase tracking-widest">% Commit</div>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-[#B80000] p-6 text-center cursor-pointer"
                                    >
                                        <div className="text-5xl font-black text-white mb-2">24/7</div>
                                        <div className="text-white text-xs font-bold uppercase tracking-widest">Active</div>
                                    </motion.div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
