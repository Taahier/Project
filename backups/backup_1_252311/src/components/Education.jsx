import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import data from '../data.json';
import { GraduationCap, Award } from 'lucide-react';
import ScrollReveal from './animations/ScrollReveal';

const Education = () => {
    const { education } = data;

    return (
        <section className="min-h-screen py-32 bg-[var(--bg-primary)] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute left-0 bottom-0 w-96 h-96 bg-valorant-red rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionHeader title="Training Arc" subtitle="Education & Certs" />

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Degrees */}
                    <ScrollReveal animation="slide-right" duration={0.5}>
                        <h3 className="text-2xl font-header text-[var(--text-primary)] uppercase mb-8 flex items-center gap-3">
                            <GraduationCap className="text-valorant-red" /> Academic Record
                        </h3>
                        <div className="space-y-6">
                            {education.degree.map((deg, index) => (
                                <div key={index} className="card-valorant group hover:border-valorant-red/50 transition-all duration-300 border-l-4 border-l-valorant-red">
                                    <h4 className="text-xl font-bold text-[var(--text-primary)] uppercase">{deg.title}</h4>
                                    <p className="text-[var(--text-secondary)] text-sm mt-1">{deg.institute}</p>
                                    {deg.branch && <p className="text-valorant-red text-xs font-mono mt-2 uppercase">// {deg.branch}</p>}
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Certifications */}
                    <ScrollReveal animation="slide-left" duration={0.5} delay={0.2}>
                        <h3 className="text-2xl font-header text-[var(--text-primary)] uppercase mb-8 flex items-center gap-3">
                            <Award className="text-valorant-red" /> Certifications
                        </h3>
                        <div className="grid gap-4">
                            {education.certifications.map((cert, index) => (
                                <div key={index} className="p-4 bg-[var(--card-bg)] border border-[var(--border-primary)] hover:border-valorant-red transition-colors flex items-center gap-4 group">
                                    <div className="w-2 h-2 bg-valorant-red rotate-45 group-hover:bg-white transition-colors"></div>
                                    <span className="text-[var(--text-primary)] font-body font-medium">{cert}</span>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default Education;
