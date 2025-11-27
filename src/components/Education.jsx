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
                    <div>
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
                    </div>

                    {/* Certifications - INNOVATIVE DESIGN */}
                    <div>
                        <h3 className="text-2xl font-header text-[var(--text-primary)] uppercase mb-8 flex items-center gap-3">
                            <Award className="text-valorant-red" /> Certifications
                        </h3>

                        {/* Bold Certification Cards Grid */}
                        <div className="grid grid-cols-1 gap-4">
                            {education.certifications.map((cert, index) => {
                                // Alternating colors: Black, White, Red
                                const bgColors = ['#000000', '#FFFFFF', '#B80000'];
                                const textColors = ['#FFFFFF', '#000000', '#FFFFFF'];
                                const accentColors = ['#B80000', '#B80000', '#FFFFFF'];
                                const colorIndex = index % 3;

                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1, type: "spring" }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        className="relative p-6 cursor-pointer group overflow-hidden"
                                        style={{ backgroundColor: bgColors[colorIndex] }}
                                    >
                                        {/* Diagonal Accent Stripe */}
                                        <div
                                            className="absolute top-0 right-0 w-32 h-32 opacity-10"
                                            style={{
                                                background: accentColors[colorIndex],
                                                clipPath: 'polygon(100% 0, 100% 100%, 0 0)'
                                            }}
                                        ></div>

                                        {/* Certification Number Badge */}
                                        <div
                                            className="absolute top-3 left-3 w-10 h-10 flex items-center justify-center font-black text-sm"
                                            style={{
                                                backgroundColor: accentColors[colorIndex],
                                                color: colorIndex === 1 ? '#FFFFFF' : (colorIndex === 2 ? '#B80000' : '#000000')
                                            }}
                                        >
                                            {String(index + 1).padStart(2, '0')}
                                        </div>

                                        {/* Content Container */}
                                        <div className="relative z-10 pl-14 pr-4 flex items-center justify-between gap-4">
                                            {/* Certification Name */}
                                            <div className="flex-1">
                                                <h4
                                                    className="font-black uppercase text-lg md:text-xl tracking-wide leading-tight"
                                                    style={{ color: textColors[colorIndex] }}
                                                >
                                                    {cert}
                                                </h4>
                                            </div>

                                            {/* Verification Badge */}
                                            <div className="flex items-center gap-2 shrink-0">
                                                <div
                                                    className="text-xs font-mono uppercase tracking-widest"
                                                    style={{ color: textColors[colorIndex], opacity: 0.7 }}
                                                >
                                                    VERIFIED
                                                </div>
                                                <Award
                                                    size={20}
                                                    style={{ color: accentColors[colorIndex] }}
                                                    className="animate-pulse"
                                                />
                                            </div>
                                        </div>

                                        {/* Bottom Corner Accent */}
                                        <div
                                            className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4"
                                            style={{ borderColor: accentColors[colorIndex] }}
                                        ></div>

                                        {/* Hover Glow Effect */}
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                                            style={{
                                                boxShadow: `inset 0 0 40px ${accentColors[colorIndex]}40`
                                            }}
                                        ></div>

                                        {/* Side Accent Line */}
                                        <motion.div
                                            className="absolute left-0 top-0 w-1 h-0 group-hover:h-full transition-all duration-500"
                                            style={{ backgroundColor: accentColors[colorIndex] }}
                                        ></motion.div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
