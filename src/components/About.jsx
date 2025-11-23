import React from 'react';
import SectionHeader from './SectionHeader';
import data from '../data.json';
import { Target, Crosshair } from 'lucide-react';
import ScrollReveal from './animations/ScrollReveal';
import ParallaxSection from './animations/ParallaxSection';

const About = () => {
    const { about, mission_objectives } = data;

    return (
        <section id="about" className="py-20 bg-[#FF4655] relative overflow-hidden">
            <ParallaxSection speed={0.3}>
                <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <SectionHeader title="Agent Profile" subtitle="About Me" lineColor="bg-black" accentColor="bg-black" iconColor="#000000" />

                    <div className="grid md:grid-cols-2 gap-12 mb-20">
                        {/* Text Content */}
                        <ScrollReveal animation="slide-right" duration={0.8}>
                            <h3 className="text-2xl font-header text-white uppercase mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-white"></span>
                                Mission Briefing
                            </h3>
                            <div className="space-y-4 text-gray-100 text-lg leading-relaxed">
                                {about.summary.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>

                            {/* Expertise Grid (The "4 boxes") */}
                            <div className="mt-8 grid grid-cols-2 gap-4">
                                {Object.entries(about.expertise).map(([key, value], index) => (
                                    <ScrollReveal
                                        key={key}
                                        animation="zoom-in"
                                        delay={0.2 + (index * 0.1)}
                                        className="p-4 about-box border-l-2 transition-colors h-full"
                                    >
                                        <h4 className="about-box-text font-bold uppercase text-sm mb-2">
                                            {key.replace(/_/g, ' ')}
                                        </h4>
                                        <p className="about-box-desc text-xs line-clamp-3">
                                            {value}
                                        </p>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </ScrollReveal>

                        {/* Mission Objectives - Restored the "Good" Design */}
                        <ScrollReveal
                            animation="slide-left"
                            duration={0.8}
                            delay={0.2}
                            className="relative"
                        >
                            <div className="about-box border-2 p-8 relative overflow-hidden group hover:border-gray-700 transition-colors duration-300 h-full">
                                {/* Decorative Corners */}
                                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-black"></div>
                                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-black"></div>
                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-black"></div>
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-black"></div>

                                {/* Background Grid */}
                                <div className="absolute inset-0 bg-black opacity-5"></div>

                                <h3 className="text-xl font-header about-box-text uppercase mb-6 flex items-center gap-2 relative z-10">
                                    <Target className="about-box-text" /> Current Objectives
                                </h3>

                                <div className="space-y-6 relative z-10">
                                    {mission_objectives.map((objective, index) => (
                                        <div key={index} className="flex items-start gap-4 group/item">
                                            <div className="mt-1">
                                                <Crosshair size={18} className="about-box-text group-hover/item:rotate-90 transition-transform duration-300" />
                                            </div>
                                            <div>
                                                <h4 className="about-box-text font-bold uppercase tracking-wider text-sm mb-1">
                                                    {objective.title}
                                                </h4>
                                                <p className="about-box-desc text-sm">
                                                    {objective.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </ParallaxSection>
        </section>
    );
};

export default About;
