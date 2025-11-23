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
                            className="valorant-card-red group"
                        >
                            {/* Decorative Corners */}
                            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-black/50"></div>
                            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-black/50"></div>
                            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-black/50"></div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-black/50"></div>

                            <h3 className="text-xl font-header uppercase mb-6 border-b-2 border-black/20 pb-2 relative z-10">
                                {category.replace(/_/g, ' ')}
                            </h3>

                            <div className="space-y-4 relative z-10">
                                {items.map((skill, i) => (
                                    <div key={skill} className="group/skill">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-body font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                                                {skillIcons[skill] && React.cloneElement(skillIcons[skill], { size: 16, className: "opacity-80" })}
                                                {skill}
                                            </span>
                                            <span className="text-xs font-mono opacity-70">
                                                {Math.floor(Math.random() * (100 - 85) + 85)}%
                                            </span>
                                        </div>
                                        <div className="h-1.5 w-full bg-black/20 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${Math.floor(Math.random() * (100 - 85) + 85)}%` }}
                                                transition={{ duration: 1, delay: 0.2 + (i * 0.05) }}
                                                className="h-full skill-progress-bar transition-colors duration-300"
                                            ></motion.div>
                                        </div>
                                    </div>
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
