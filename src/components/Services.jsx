import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import data from '../data.json';
import { Shield, Zap, Activity, Cpu, Code, Lock, Cloud, Database, Terminal, Crosshair, ArrowRight, CheckCircle, Circle } from 'lucide-react';

const Services = () => {
    const { what_i_offer, ready_for_team } = data;
    const icons = [Code, Shield, Cloud, Database];
    const [activeService, setActiveService] = useState(0);

    return (
        <section id="services" className="relative overflow-hidden py-20" style={{ backgroundColor: '#B80000' }}>
            {/* Dynamic Wave Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="wave-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <motion.path
                                d="M0,50 Q25,30 50,50 T100,50"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                                animate={{
                                    d: [
                                        "M0,50 Q25,30 50,50 T100,50",
                                        "M0,50 Q25,70 50,50 T100,50",
                                        "M0,50 Q25,30 50,50 T100,50"
                                    ]
                                }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#wave-pattern)" />
                </svg>

                {/* Orbiting Dots */}
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={`orbit-${i}`}
                        animate={{
                            x: [
                                Math.cos((i / 12) * Math.PI * 2) * 200,
                                Math.cos(((i / 12) * Math.PI * 2) + Math.PI * 2) * 200
                            ],
                            y: [
                                Math.sin((i / 12) * Math.PI * 2) * 200,
                                Math.sin(((i / 12) * Math.PI * 2) + Math.PI * 2) * 200
                            ]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 0.5
                        }}
                        className="absolute w-3 h-3 bg-white rounded-full"
                        style={{
                            left: '50%',
                            top: '50%'
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-16">
                    <SectionHeader title="Capabilities" subtitle="What I Offer" />
                </div>

                {/* SPLIT SCREEN LAYOUT - Service Explorer */}
                <div className="grid md:grid-cols-2 gap-0 mb-20 min-h-[400px]">
                    {/* LEFT: Service Navigation */}
                    <div className="bg-black/90 p-6 border-r-4 border-white">
                        <h3 className="text-2xl font-black text-white uppercase mb-6 flex items-center gap-3">
                            <Circle size={10} className="text-white fill-white" />
                            SERVICE INDEX
                        </h3>
                        <div className="space-y-3">
                            {what_i_offer.map((offer, index) => {
                                const Icon = icons[index % icons.length];
                                return (
                                    <motion.div
                                        key={index}
                                        onClick={() => setActiveService(index)}
                                        whileHover={{ x: 10 }}
                                        className={`cursor-pointer p-4 border-2 transition-all ${activeService === index
                                            ? 'bg-white text-black border-white'
                                            : 'bg-transparent text-white border-white/30 hover:border-white'
                                            }`}
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-3">
                                                <Icon size={24} strokeWidth={2} />
                                                <span className="text-lg font-black uppercase">
                                                    {offer.title}
                                                </span>
                                            </div>
                                            <ArrowRight size={20} />
                                        </div>
                                        {activeService === index && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                className="text-xs mt-2 pt-2 border-t-2 border-black/20"
                                            >
                                                Click to view details →
                                            </motion.div>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT: Service Details */}
                    <div className="bg-white p-8 relative overflow-hidden">
                        <motion.div
                            key={activeService}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Service Number */}
                            <div className="absolute top-0 right-0 text-[150px] font-black text-[#B80000]/10 leading-none">
                                {String(activeService + 1).padStart(2, '0')}
                            </div>

                            <div className="relative z-10">
                                {/* Icon */}
                                <motion.div
                                    animate={{ rotate: [0, 5, -5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="mb-4 inline-block p-4 bg-[#B80000] text-white"
                                >
                                    {React.createElement(icons[activeService % icons.length], { size: 48, strokeWidth: 2 })}
                                </motion.div>

                                {/* Title */}
                                <h4 className="text-3xl font-black uppercase text-[#B80000] mb-4 leading-tight">
                                    {what_i_offer[activeService].title}
                                </h4>

                                {/* Description */}
                                <p className="text-gray-800 text-base leading-relaxed mb-6">
                                    {what_i_offer[activeService].description}
                                </p>

                                {/* Features List */}
                                <div className="space-y-2">
                                    {['High Performance', 'Scalable Solutions', 'Best Practices', 'Modern Tech Stack'].map((feature, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex items-center gap-2 text-gray-700 text-sm"
                                        >
                                            <CheckCircle size={16} className="text-[#B80000]" />
                                            <span className="font-bold">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* HORIZONTAL TIMELINE - Ready for Deployment */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Timeline Container */}
                    <div className="bg-black p-6 relative overflow-hidden border-2 border-white">
                        {/* Diagonal Stripes Background */}
                        <div className="absolute inset-0 opacity-5" style={{
                            backgroundImage: 'repeating-linear-gradient(45deg, #FFFFFF 0, #FFFFFF 10px, transparent 10px, transparent 20px)'
                        }} />

                        <div className="relative z-10">
                            {/* Header */}
                            <div className="text-center mb-8">
                                <motion.h3
                                    animate={{
                                        scale: [1, 1.02, 1]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="text-3xl md:text-4xl font-black uppercase text-white mb-3"
                                >
                                    READY FOR DEPLOYMENT
                                </motion.h3>
                                <p className="text-white/80 text-sm max-w-2xl mx-auto">
                                    I am currently available for full-time roles and specialized contracts.
                                    My skillset is primed for immediate integration into high-velocity engineering teams.
                                </p>
                            </div>

                            {/* Horizontal Timeline */}
                            <div className="relative">
                                {/* Timeline Line */}
                                <div className="absolute top-1/2 left-0 right-0 h-px bg-white/20" />
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '100%' }}
                                    transition={{ duration: 2, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                    className="absolute top-1/2 left-0 h-px bg-white"
                                />

                                {/* Timeline Items */}
                                <div className="relative flex justify-between items-center py-8">
                                    {ready_for_team.map((role, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.15 }}
                                            viewport={{ once: true }}
                                            className="flex flex-col items-center text-center flex-1"
                                        >
                                            {/* Node */}
                                            <motion.div
                                                whileHover={{ scale: 1.3 }}
                                                className="w-4 h-4 bg-white border-2 border-black rounded-full mb-3 cursor-pointer relative z-10"
                                            />
                                            {/* Label */}
                                            <div className="bg-white border border-white px-3 py-1.5 font-black uppercase text-xs text-black max-w-[120px]">
                                                {role}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Stats Row */}
                            <div className="grid grid-cols-4 gap-4 mt-8">
                                <StatBox number={100} label="Operational" suffix="%" />
                                <StatBox number={24} label="Available" suffix="/7" />
                                <StatBox number={ready_for_team.length} label="Roles" suffix="+" />
                                <StatBox number={99} label="Reliable" suffix="%" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// Stat Box Component
const StatBox = ({ number, label, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count < number) {
            const timer = setTimeout(() => setCount(count + 1), 20);
            return () => clearTimeout(timer);
        }
    }, [count, number]);

    return (
        <div className="text-center p-3 bg-[#B80000] text-white">
            <div className="text-2xl md:text-3xl font-black mb-1">
                {count}{suffix}
            </div>
            <div className="text-[10px] md:text-xs uppercase tracking-wider opacity-80">
                {label}
            </div>
        </div>
    );
};

export default Services;
