import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import data from '../data.json';
import ParallaxSection from './animations/ParallaxSection';
import {
    FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaAws,
    FaGitAlt, FaGithub, FaInfinity, FaBootstrap, FaShieldAlt,
    FaBug, FaUserLock, FaNetworkWired, FaDatabase, FaCloud, FaCode
} from 'react-icons/fa';


const Skills = () => {
    const { skills } = data;

    const skillIcons = {
        "Java": <FaJava size={24} />,
        "Python": <FaPython size={24} />,
        "C/C++": <FaCode size={24} />,
        "HTML5": <FaHtml5 size={24} />,
        "CSS3": <FaCss3Alt size={24} />,
        "JavaScript (ES6+)": <FaJs size={24} />,
        "React": <FaReact size={24} />,
        "MySQL": <FaDatabase size={24} />,
        "Oracle DB": <FaDatabase size={24} />,
        "Amazon Web Services (AWS)": <FaAws size={24} />,
        "Microsoft Azure": <FaCloud size={24} />,
        "Oracle Cloud (OCI)": <FaCloud size={24} />,
        "Git": <FaGitAlt size={24} />,
        "GitHub": <FaGithub size={24} />,
        "CI/CD Pipelines": <FaInfinity size={24} />,
        "J2EE": <FaJava size={24} />,
        "Bootstrap": <FaBootstrap size={24} />,
        "Tailwind CSS": <FaCss3Alt size={24} />,
        "AppSec & DevSecOps": <FaShieldAlt size={24} />,
        "VAPT (Vulnerability Assessment)": <FaBug size={24} />,
        "Identity & Access Management (IAM)": <FaUserLock size={24} />,
        "Network Defense": <FaNetworkWired size={24} />
    };

    return (
        <section id="skills" className="py-20 bg-[var(--bg-primary)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute right-0 top-1/4 w-96 h-96 bg-valorant-red rounded-full blur-3xl"></div>
            </div>

            <ParallaxSection speed={0.4}>
                <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <SectionHeader title="Arsenal" subtitle="Technical Skills" />

                    {/* Infinite Logo Loop */}
                    <div className="mb-12 overflow-hidden relative">
                        <div className="flex gap-16 animate-scroll items-center py-8">
                            {/* First set of logos */}
                            {Object.values(skills).flat().map((skill, index) => (
                                <div
                                    key={`logo-1-${index}`}
                                    className="flex-shrink-0 flex items-center justify-center"
                                    title={skill}
                                >
                                    <span className="text-valorant-red">
                                        {/* Clone element to change size prop if it's a React element */}
                                        {React.isValidElement(skillIcons[skill])
                                            ? React.cloneElement(skillIcons[skill], { size: 48 })
                                            : <span className="font-header uppercase tracking-wider text-xl font-bold">{skill}</span>
                                        }
                                    </span>
                                </div>
                            ))}
                            {/* Duplicate set for seamless loop */}
                            {Object.values(skills).flat().map((skill, index) => (
                                <div
                                    key={`logo-2-${index}`}
                                    className="flex-shrink-0 flex items-center justify-center"
                                    title={skill}
                                >
                                    <span className="text-valorant-red">
                                        {React.isValidElement(skillIcons[skill])
                                            ? React.cloneElement(skillIcons[skill], { size: 48 })
                                            : <span className="font-header uppercase tracking-wider text-xl font-bold">{skill}</span>
                                        }
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* INNOVATIVE CIRCULAR SKILL METERS */}
                    <div className="space-y-16">
                        {Object.entries(skills).map(([category, items], catIndex) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, x: catIndex % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                {/* Category Header - Massive */}
                                <div className="mb-12">
                                    <div className="flex items-center gap-6">
                                        <div className="w-2 h-24 bg-[#B80000]"></div>
                                        <div>
                                            <h3 className="text-6xl font-josefin font-black uppercase text-[var(--text-primary)] leading-none">
                                                {category.replace(/_/g, ' ')}
                                            </h3>
                                            <div className="flex items-center gap-2 mt-2">
                                                <div className="w-3 h-3 bg-[#B80000] animate-pulse"></div>
                                                <span className="text-[var(--text-primary)]/60 font-mono text-sm tracking-widest">
                                                    {items.length} SKILLS LOADED
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Bold Skill Cards Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {items.map((skill, skillIndex) => {
                                        const proficiency = Math.floor(Math.random() * (100 - 85) + 85);

                                        // Alternating colors: Black, White, Red
                                        const bgColors = ['#000000', '#FFFFFF', '#B80000'];
                                        const textColors = ['#FFFFFF', '#000000', '#FFFFFF'];
                                        const accentColors = ['#B80000', '#B80000', '#FFFFFF'];
                                        const colorIndex = skillIndex % 3;

                                        return (
                                            <motion.div
                                                key={skill}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ delay: skillIndex * 0.03, type: "spring" }}
                                                viewport={{ once: true }}
                                                whileHover={{ scale: 1.03, y: -5 }}
                                                className="relative p-6 cursor-pointer group overflow-hidden"
                                                style={{ backgroundColor: bgColors[colorIndex] }}
                                            >
                                                {/* Diagonal Accent Stripe */}
                                                <div
                                                    className="absolute top-0 right-0 w-24 h-24 opacity-10"
                                                    style={{
                                                        background: accentColors[colorIndex],
                                                        clipPath: 'polygon(100% 0, 100% 100%, 0 0)'
                                                    }}
                                                ></div>

                                                {/* Skill Number Badge */}
                                                <div
                                                    className="absolute top-2 left-2 w-8 h-8 flex items-center justify-center font-black text-xs"
                                                    style={{
                                                        backgroundColor: accentColors[colorIndex],
                                                        color: colorIndex === 1 ? '#FFFFFF' : (colorIndex === 2 ? '#B80000' : '#000000')
                                                    }}
                                                >
                                                    {String(skillIndex + 1).padStart(2, '0')}
                                                </div>

                                                {/* Icon */}
                                                <div className="mb-4 mt-6">
                                                    {skillIcons[skill] && React.cloneElement(skillIcons[skill], {
                                                        size: 32,
                                                        style: { color: accentColors[colorIndex] }
                                                    })}
                                                </div>

                                                {/* Skill Name */}
                                                <h4
                                                    className="font-black uppercase text-2xl mb-3 tracking-wider leading-tight"
                                                    style={{ color: textColors[colorIndex] }}
                                                >
                                                    {skill}
                                                </h4>

                                                {/* Proficiency Display */}
                                                <div className="flex items-end justify-between">
                                                    <div>
                                                        <div
                                                            className="text-4xl font-black font-mono leading-none"
                                                            style={{ color: accentColors[colorIndex] }}
                                                        >
                                                            {proficiency}
                                                        </div>
                                                        <div
                                                            className="text-xs font-mono uppercase tracking-widest mt-1"
                                                            style={{ color: textColors[colorIndex], opacity: 0.6 }}
                                                        >
                                                            Proficiency
                                                        </div>
                                                    </div>

                                                    {/* Vertical Progress Bar */}
                                                    <div
                                                        className="w-2 h-16"
                                                        style={{ backgroundColor: `${textColors[colorIndex]}20` }}
                                                    >
                                                        <motion.div
                                                            initial={{ height: 0 }}
                                                            whileInView={{ height: `${proficiency}%` }}
                                                            transition={{ delay: skillIndex * 0.03 + 0.3, duration: 1 }}
                                                            viewport={{ once: true }}
                                                            className="w-full"
                                                            style={{ backgroundColor: accentColors[colorIndex] }}
                                                        />
                                                    </div>
                                                </div>

                                                {/* Corner Accent */}
                                                <div
                                                    className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4"
                                                    style={{ borderColor: accentColors[colorIndex] }}
                                                ></div>

                                                {/* Hover Glow */}
                                                <div
                                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                                                    style={{
                                                        boxShadow: `inset 0 0 30px ${accentColors[colorIndex]}40`
                                                    }}
                                                ></div>
                                            </motion.div>
                                        );
                                    })}
                                </div>

                                {/* Decorative Line */}
                                {catIndex < Object.entries(skills).length - 1 && (
                                    <div className="mt-16 h-px bg-gradient-to-r from-transparent via-[#B80000] to-transparent"></div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </ParallaxSection>
        </section>
    );
};

export default Skills;
