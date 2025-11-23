import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import data from '../data.json';
import { Shield, Zap, Activity, Cpu, Crosshair } from 'lucide-react';
import DrawSVG from './animations/DrawSVG';
import ParallaxSection from './animations/ParallaxSection';


const Services = () => {
    const { what_i_offer, ready_for_team } = data;

    const icons = [Zap, Shield, Activity, Cpu];

    return (
        <section id="services" className="py-20 section-inverted relative overflow-hidden">
            <ParallaxSection speed={0.25}>
                <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">

                    {/* What I Offer Section */}
                    <div className="mb-20">
                        <SectionHeader title="Capabilities" subtitle="What I Offer" inverted={true} />

                        <div className="flex flex-col gap-12 relative">
                            {what_i_offer.map((offer, index) => {
                                const Icon = icons[index % icons.length];
                                return (
                                    <div
                                        key={index}
                                        className="group p-8 md:p-12 about-box border hover:border-2 hover:border-valorant-red transition-all duration-300 relative overflow-hidden sticky"
                                        style={{
                                            top: `${100 + index * 20}px`,
                                            zIndex: index
                                        }}
                                    >
                                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                                            <DrawSVG duration={1.5} delay={index * 0.2}>
                                                <Icon size={128} className="text-valorant-red" strokeWidth={1.5} />
                                            </DrawSVG>
                                        </div>

                                        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                                            <div className="w-16 h-16 bg-valorant-red/10 flex items-center justify-center group-hover:bg-valorant-red group-hover:text-white transition-colors duration-300 shrink-0">
                                                <DrawSVG duration={1.5} delay={index * 0.2}>
                                                    <Icon size={32} className="text-valorant-red group-hover:text-white" strokeWidth={2} />
                                                </DrawSVG>
                                            </div>

                                            <div>
                                                <h3 className="text-2xl md:text-3xl font-header about-box-text uppercase mb-4">
                                                    {offer.title}
                                                </h3>

                                                <p className="about-box-desc text-base md:text-lg leading-relaxed max-w-2xl">
                                                    {offer.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Hover Line */}
                                        <div className="absolute bottom-0 left-0 w-0 h-1 bg-valorant-red transition-all duration-300 group-hover:w-full"></div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Ready For Team Section */}
                    <div>
                        <div className="relative about-box border p-8 md:p-12 overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-valorant-red to-transparent opacity-50"></div>

                            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-header about-box-text uppercase mb-4">
                                        Ready for Deployment
                                    </h3>
                                    <p className="about-box-desc text-lg mb-8 max-w-xl">
                                        I am currently available for full-time roles and specialized contracts. My skillset is primed for immediate integration into high-velocity engineering teams.
                                    </p>

                                    <div className="flex flex-col gap-3">
                                        {ready_for_team.map((role, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <Crosshair size={20} className="text-valorant-red" />
                                                <span className="about-box-text font-header uppercase tracking-wider text-lg">
                                                    {role}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="hidden md:flex justify-center">
                                    <div className="relative w-64 h-64 flex items-center justify-center">
                                        {/* Radar Sweep Effect */}
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                            className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-valorant-red/10 to-transparent z-0"
                                        />

                                        {/* Outer Ring - Dashed & Rotating */}
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                            className="absolute inset-0 border-2 border-dashed border-valorant-red/40 rounded-full"
                                        />

                                        {/* Middle Ring - Tech Segments & Counter-Rotating */}
                                        <motion.div
                                            animate={{ rotate: -360 }}
                                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                            className="absolute inset-4 border-t-4 border-b-4 border-l-2 border-r-2 border-transparent border-t-valorant-red/60 border-b-valorant-red/60 rounded-full"
                                        />

                                        {/* Inner Ring - Pulsing & Fast Rotating */}
                                        <motion.div
                                            animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                                            transition={{ rotate: { duration: 8, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity } }}
                                            className="absolute inset-8 border border-valorant-red/30 rounded-full"
                                        />

                                        {/* Core Pulse Glow */}
                                        <motion.div
                                            animate={{ opacity: [0.2, 0.6, 0.2], scale: [0.8, 1.1, 0.8] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="absolute inset-0 bg-valorant-red/5 rounded-full blur-xl"
                                        />

                                        {/* Static Tech Markers */}
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-4 bg-valorant-red"></div>
                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-4 bg-valorant-red"></div>
                                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-1 bg-valorant-red"></div>
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-1 bg-valorant-red"></div>

                                        {/* Center Content */}
                                        <div className="relative z-10 text-center">
                                            <motion.div
                                                animate={{ textShadow: ["0 0 0px #ff4655", "0 0 10px #ff4655", "0 0 0px #ff4655"] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                className="text-6xl font-header font-bold about-box-text"
                                            >
                                                100%
                                            </motion.div>
                                            <motion.div
                                                animate={{ opacity: [1, 0.5, 1] }}
                                                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                                                className="text-valorant-red text-sm font-mono mt-1 tracking-[0.2em] font-bold"
                                            >
                                                OPERATIONAL
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ParallaxSection>
        </section>
    );
};

export default Services;
