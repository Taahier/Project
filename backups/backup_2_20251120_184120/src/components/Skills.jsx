import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import data from '../data.json';
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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[var(--card-bg)] p-6 border border-[var(--border-primary)] hover:border-2 hover:border-valorant-red transition-all duration-300 group"
                        >
                            <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                                <div className="w-2 h-2 bg-valorant-red"></div>
                            </div>

                            <h3 className="text-xl font-header text-[var(--text-primary)] uppercase mb-6 border-b border-[var(--border-primary)] pb-2">
                                {category.replace(/_/g, ' ')}
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-[var(--bg-primary)] text-[var(--text-secondary)] text-sm font-body uppercase tracking-wider hover:bg-valorant-red hover:text-white transition-colors cursor-default border border-[var(--border-primary)]"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
