import React from 'react';
import SectionHeader from './SectionHeader';
import data from '../data.json';
import { Shield, Zap, Activity, Cpu, Crosshair } from 'lucide-react';

const Services = () => {
    const { what_i_offer, ready_for_team } = data;

    const icons = [Zap, Shield, Activity, Cpu];

    return (
        <section className="py-20 section-inverted relative overflow-hidden">
            <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">

                {/* What I Offer Section */}
                <div className="mb-20">
                    <SectionHeader title="Capabilities" subtitle="What I Offer" inverted={true} />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {what_i_offer.map((offer, index) => {
                            const Icon = icons[index % icons.length];
                            return (
                                <div key={index} className="group p-6 about-box border hover:border-2 hover:border-valorant-red transition-all duration-300 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                                        <Icon size={64} className="text-valorant-red" />
                                    </div>

                                    <div className="relative z-10">
                                        <div className="w-12 h-12 bg-valorant-red/10 flex items-center justify-center mb-4 group-hover:bg-valorant-red group-hover:text-white transition-colors duration-300">
                                            <Icon size={24} className="text-valorant-red group-hover:text-white" />
                                        </div>

                                        <h3 className="text-xl font-header about-box-text uppercase mb-3">
                                            {offer.title}
                                        </h3>

                                        <p className="about-box-desc text-sm leading-relaxed">
                                            {offer.description}
                                        </p>
                                    </div>

                                    {/* Hover Line */}
                                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-valorant-red transition-all duration-300 group-hover:w-full"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Ready For Team Section */}
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
                            <div className="relative w-64 h-64">
                                {/* Outer pulsating circle - thicker and brighter */}
                                <div className="absolute inset-0 border-8 border-valorant-red rounded-full animate-pulse"></div>

                                {/* Spikes radiating outward */}
                                <div className="absolute inset-0">
                                    {/* Top spike */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-1 h-6 bg-valorant-red animate-pulse"></div>
                                    {/* Right spike */}
                                    <div className="absolute top-1/2 right-0 translate-x-2 -translate-y-1/2 w-6 h-1 bg-valorant-red animate-pulse"></div>
                                    {/* Bottom spike */}
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 w-1 h-6 bg-valorant-red animate-pulse"></div>
                                    {/* Left spike */}
                                    <div className="absolute top-1/2 left-0 -translate-x-2 -translate-y-1/2 w-6 h-1 bg-valorant-red animate-pulse"></div>

                                    {/* Diagonal spikes */}
                                    <div className="absolute top-[15%] right-[15%] translate-x-2 -translate-y-2 w-1 h-4 bg-valorant-red/80 rotate-45 animate-pulse"></div>
                                    <div className="absolute bottom-[15%] right-[15%] translate-x-2 translate-y-2 w-1 h-4 bg-valorant-red/80 -rotate-45 animate-pulse"></div>
                                    <div className="absolute bottom-[15%] left-[15%] -translate-x-2 translate-y-2 w-1 h-4 bg-valorant-red/80 rotate-45 animate-pulse"></div>
                                    <div className="absolute top-[15%] left-[15%] -translate-x-2 -translate-y-2 w-1 h-4 bg-valorant-red/80 -rotate-45 animate-pulse"></div>
                                </div>

                                <div className="absolute inset-4 border about-box rounded-full"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-5xl font-header font-bold about-box-text">100%</div>
                                        <div className="text-valorant-red text-sm font-mono mt-1">OPERATIONAL</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Services;
