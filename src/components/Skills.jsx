import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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

    const containerRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.5, 1], [0, 1, 1, 1]);

    return (
        <section id="skills" className="py-20 bg-[var(--bg-primary)] relative overflow-hidden">
            {/* Base Background Glow */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute right-0 top-1/4 w-96 h-96 bg-valorant-red rounded-full blur-3xl"></div>
            </div>

            {/* AGENCY-LEVEL BACKGROUND ANIMATIONS LAYER - OPTIMIZED & VISIBLE */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
                {/* Randomly Appearing Glowing Boxes - MORE VISIBLE */}
                {[...Array(20)].map((_, i) => {
                    const randomLeft = (i * 13 + 5) % 85;
                    const randomTop = (i * 19 + 10) % 75;
                    const randomSize = 50 + (i * 11) % 80;
                    const randomDelay = (i * 0.8) % 10;
                    const randomDuration = 5 + (i % 4) * 1.5;

                    return (
                        <motion.div
                            key={`glow-box-${i}`}
                            animate={{
                                opacity: [0, 0.8, 0],
                                scale: [0.9, 1.1, 0.9],
                                rotate: [0, 5, 0]
                            }}
                            transition={{
                                duration: randomDuration,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: randomDelay
                            }}
                            className="absolute border-[3px] border-[#B80000]"
                            style={{
                                left: `${randomLeft}%`,
                                top: `${randomTop}%`,
                                width: `${randomSize}px`,
                                height: `${randomSize}px`,
                                boxShadow: '0 0 30px rgba(184, 0, 0, 0.8), inset 0 0 30px rgba(184, 0, 0, 0.4)',
                                willChange: 'opacity, transform'
                            }}
                        />
                    );
                })}

                {/* Floating Geometric Shapes - HIGHLY VISIBLE */}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={`shape-${i}`}
                        animate={{
                            y: [0, -40, 0],
                            x: [0, i % 2 === 0 ? 30 : -30, 0],
                            rotate: [0, 180, 360],
                            opacity: [0.6, 0.8, 0.6]
                        }}
                        transition={{
                            duration: 8 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.5
                        }}
                        className="absolute border-[3px]"
                        style={{
                            left: `${10 + i * 18}%`,
                            top: `${15 + (i % 3) * 25}%`,
                            width: `${60 + i * 20}px`,
                            height: `${60 + i * 20}px`,
                            borderColor: '#B80000',
                            willChange: 'transform, opacity'
                        }}
                    />
                ))}

                {/* Diagonal Scan Lines - VISIBLE */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={`scan-${i}`}
                        animate={{
                            x: ['-100%', '200%']
                        }}
                        transition={{
                            duration: 15 + i * 3,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 2
                        }}
                        className="absolute h-px"
                        style={{
                            top: `${25 + i * 25}%`,
                            width: '100%',
                            background: `linear-gradient(90deg, transparent, var(--text-primary), transparent)`,
                            opacity: 0.4,
                            transform: 'skewY(-2deg)',
                            willChange: 'transform'
                        }}
                    />
                ))}

                {/* Floating Particles - VISIBLE */}
                {[...Array(8)].map((_, i) => {
                    const randomX1 = (i * 13) % 50 - 25;
                    const randomX2 = (i * 17) % 100 - 50;
                    const randomLeft = (i * 12.5) % 100;

                    return (
                        <motion.div
                            key={`particle-${i}`}
                            animate={{
                                y: [0, -100, -200],
                                x: [0, randomX1, randomX2],
                                opacity: [0, 0.7, 0],
                                scale: [0, 1.5, 0]
                            }}
                            transition={{
                                duration: 6 + (i % 3) * 1.5,
                                repeat: Infinity,
                                ease: "easeOut",
                                delay: i * 0.5
                            }}
                            className="absolute w-2 h-2 rounded-full"
                            style={{
                                left: `${randomLeft}%`,
                                bottom: '0%',
                                backgroundColor: 'var(--text-primary)',
                                willChange: 'transform, opacity'
                            }}
                        />
                    );
                })}

                {/* Gradient Orbs with Breathing Animation */}
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, 50, 0],
                        opacity: [0.08, 0.15, 0.08]
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute w-[600px] h-[600px] rounded-full blur-3xl"
                    style={{
                        background: 'radial-gradient(circle, var(--text-primary), transparent)',
                        left: '10%',
                        top: '20%',
                        willChange: 'transform, opacity'
                    }}
                />

                <motion.div
                    animate={{
                        scale: [1, 1.4, 1],
                        x: [0, -60, 0],
                        opacity: [0.06, 0.12, 0.06]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                    className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
                    style={{
                        background: 'radial-gradient(circle, var(--text-primary), transparent)',
                        right: '15%',
                        bottom: '25%',
                        willChange: 'transform, opacity'
                    }}
                />

                {/* Corner Accent Frames - VISIBLE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.4, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2"
                    style={{ borderColor: 'var(--text-primary)' }}
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.4, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2"
                    style={{ borderColor: 'var(--text-primary)' }}
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.4, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2"
                    style={{ borderColor: 'var(--text-primary)' }}
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.4, scale: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2"
                    style={{ borderColor: 'var(--text-primary)' }}
                />

                {/* Vertical Scan Effect - VISIBLE */}
                <motion.div
                    animate={{
                        y: ['0%', '100%']
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute left-0 w-full h-px"
                    style={{
                        background: `linear-gradient(90deg, transparent, var(--text-primary) 50%, transparent)`,
                        opacity: 0.5,
                        willChange: 'transform'
                    }}
                />
            </div>

            <motion.div
                ref={containerRef}
                style={{ y, scale, opacity }}
                className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
            >
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
                    {Object.entries(skills).map(([category, items], catIndex) => {
                        // Define unique reveal animations for each category
                        const revealAnimations = [
                            // 0: Slide Right (Programming Languages)
                            {
                                initial: { x: '0%' },
                                animate: { x: '100%' },
                                transition: { duration: 1.2, ease: "easeInOut" }
                            },
                            // 1: Slide Left (Web Development)
                            {
                                initial: { x: '0%' },
                                animate: { x: '-100%' },
                                transition: { duration: 1, ease: "easeOut" }
                            },
                            // 2: Slide Down (Databases)
                            {
                                initial: { y: '0%' },
                                animate: { y: '100%' },
                                transition: { duration: 1.1, ease: "easeInOut" }
                            },
                            // 3: Diagonal Wipe (Cloud Platforms)
                            {
                                initial: { x: '0%', y: '0%' },
                                animate: { x: '100%', y: '100%' },
                                transition: { duration: 1.3, ease: "easeOut" }
                            },
                            // 4: Scale Out (Cybersecurity)
                            {
                                initial: { scale: 1 },
                                animate: { scale: 0, opacity: 0 },
                                transition: { duration: 1.2, ease: "easeInOut" }
                            }
                        ];

                        const currentReveal = revealAnimations[catIndex % revealAnimations.length];

                        return (
                            <motion.div
                                key={category}
                                initial={{ filter: 'blur(10px)' }}
                                whileInView={{ filter: 'blur(0px)' }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="relative overflow-hidden"
                            >
                                {/* SLIDE REVEAL OVERLAY - WIPES AWAY */}
                                <motion.div
                                    initial={currentReveal.initial}
                                    whileInView={currentReveal.animate}
                                    transition={{ ...currentReveal.transition, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="absolute inset-0 z-20 pointer-events-none"
                                    style={{
                                        background: `linear-gradient(135deg, #B80000 0%, #FF0000 50%, #B80000 100%)`
                                    }}
                                />
                                {/* Category Header - Massive with Staggered Animation */}
                                <div className="mb-12 overflow-hidden">
                                    <div className="flex items-center gap-6">
                                        {/* Animated Red Bar */}
                                        <motion.div
                                            initial={{ scaleY: 0 }}
                                            whileInView={{ scaleY: 1 }}
                                            transition={{ duration: 0.6, delay: 0.2 }}
                                            viewport={{ once: true }}
                                            className="w-2 h-24 bg-[#B80000] origin-top"
                                        />
                                        <div>
                                            {/* Staggered Word Animation for Category Title */}
                                            <h3 className="text-6xl font-josefin font-black uppercase text-[var(--text-primary)] leading-none">
                                                {category.replace(/_/g, ' ').split(' ').map((word, i) => (
                                                    <motion.span
                                                        key={i}
                                                        initial={{ opacity: 0, y: 50 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        transition={{
                                                            duration: 0.5,
                                                            delay: 0.3 + (i * 0.1),
                                                            type: "spring",
                                                            stiffness: 100
                                                        }}
                                                        viewport={{ once: true }}
                                                        className="inline-block mr-4"
                                                    >
                                                        {word}
                                                    </motion.span>
                                                ))}
                                            </h3>
                                            <motion.div
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5, delay: 0.6 }}
                                                viewport={{ once: true }}
                                                className="flex items-center gap-2 mt-2"
                                            >
                                                <motion.div
                                                    animate={{ scale: [1, 1.2, 1] }}
                                                    transition={{ duration: 1.5, repeat: Infinity }}
                                                    className="w-3 h-3 bg-[#B80000]"
                                                />
                                                <span className="text-[var(--text-primary)]/60 font-mono text-sm tracking-widest">
                                                    {items.length} SKILLS LOADED
                                                </span>
                                            </motion.div>
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
                                                {/* COLOR SLIDE REVEAL OVERLAY */}
                                                <motion.div
                                                    initial={{ x: '-100%' }}
                                                    whileInView={{ x: '100%' }}
                                                    transition={{
                                                        duration: 0.8,
                                                        delay: skillIndex * 0.05,
                                                        ease: "easeInOut"
                                                    }}
                                                    viewport={{ once: true }}
                                                    className="absolute inset-0 z-20 pointer-events-none"
                                                    style={{
                                                        background: `linear-gradient(90deg, transparent 0%, ${accentColors[colorIndex]} 50%, transparent 100%)`,
                                                        opacity: 0.3
                                                    }}
                                                />

                                                {/* SHIMMER EFFECT ON HOVER */}
                                                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                                {/* Diagonal Accent Stripe */}
                                                <motion.div
                                                    initial={{ scale: 0, rotate: 0 }}
                                                    whileInView={{ scale: 1, rotate: 0 }}
                                                    transition={{ duration: 0.5, delay: skillIndex * 0.03 + 0.2 }}
                                                    viewport={{ once: true }}
                                                    className="absolute top-0 right-0 w-24 h-24 opacity-10 origin-top-right"
                                                    style={{
                                                        background: accentColors[colorIndex],
                                                        clipPath: 'polygon(100% 0, 100% 100%, 0 0)'
                                                    }}
                                                />

                                                {/* Skill Number Badge with Rotation */}
                                                <motion.div
                                                    initial={{ scale: 0, rotate: -180 }}
                                                    whileInView={{ scale: 1, rotate: 0 }}
                                                    transition={{
                                                        duration: 0.6,
                                                        delay: skillIndex * 0.03 + 0.1,
                                                        type: "spring",
                                                        stiffness: 200
                                                    }}
                                                    viewport={{ once: true }}
                                                    whileHover={{ rotate: 360 }}
                                                    className="absolute top-2 left-2 w-8 h-8 flex items-center justify-center font-black text-xs"
                                                    style={{
                                                        backgroundColor: accentColors[colorIndex],
                                                        color: colorIndex === 1 ? '#FFFFFF' : (colorIndex === 2 ? '#B80000' : '#000000')
                                                    }}
                                                >
                                                    {String(skillIndex + 1).padStart(2, '0')}
                                                </motion.div>

                                                {/* Icon with Bounce */}
                                                <motion.div
                                                    initial={{ scale: 0, opacity: 0 }}
                                                    whileInView={{ scale: 1, opacity: 1 }}
                                                    transition={{
                                                        duration: 0.4,
                                                        delay: skillIndex * 0.03 + 0.3,
                                                        type: "spring",
                                                        stiffness: 300
                                                    }}
                                                    viewport={{ once: true }}
                                                    className="mb-4 mt-6"
                                                >
                                                    {skillIcons[skill] && React.cloneElement(skillIcons[skill], {
                                                        size: 32,
                                                        style: { color: accentColors[colorIndex] }
                                                    })}
                                                </motion.div>

                                                {/* Skill Name with Letter Stagger */}
                                                <h4
                                                    className="font-black uppercase text-2xl mb-3 tracking-wider leading-tight overflow-hidden"
                                                    style={{ color: textColors[colorIndex] }}
                                                >
                                                    {skill.split('').map((letter, i) => (
                                                        <motion.span
                                                            key={i}
                                                            initial={{ opacity: 0, y: 20 }}
                                                            whileInView={{ opacity: 1, y: 0 }}
                                                            transition={{
                                                                duration: 0.3,
                                                                delay: skillIndex * 0.03 + 0.4 + (i * 0.02)
                                                            }}
                                                            viewport={{ once: true }}
                                                            className="inline-block"
                                                        >
                                                            {letter === ' ' ? '\u00A0' : letter}
                                                        </motion.span>
                                                    ))}
                                                </h4>

                                                {/* Proficiency Display */}
                                                <div className="flex items-end justify-between">
                                                    <div>
                                                        <motion.div
                                                            initial={{ scale: 0 }}
                                                            whileInView={{ scale: 1 }}
                                                            transition={{
                                                                duration: 0.5,
                                                                delay: skillIndex * 0.03 + 0.6,
                                                                type: "spring"
                                                            }}
                                                            viewport={{ once: true }}
                                                            className="text-4xl font-black font-mono leading-none"
                                                            style={{ color: accentColors[colorIndex] }}
                                                        >
                                                            {proficiency}
                                                        </motion.div>
                                                        <div
                                                            className="text-xs font-mono uppercase tracking-widest mt-1"
                                                            style={{ color: textColors[colorIndex], opacity: 0.6 }}
                                                        >
                                                            Proficiency
                                                        </div>
                                                    </div>

                                                    {/* Vertical Progress Bar with Fill Animation */}
                                                    <div
                                                        className="w-2 h-16 relative overflow-hidden"
                                                        style={{ backgroundColor: `${textColors[colorIndex]}20` }}
                                                    >
                                                        <motion.div
                                                            initial={{ height: 0 }}
                                                            whileInView={{ height: `${proficiency}%` }}
                                                            transition={{
                                                                delay: skillIndex * 0.03 + 0.7,
                                                                duration: 1,
                                                                ease: "easeOut"
                                                            }}
                                                            viewport={{ once: true }}
                                                            className="w-full absolute bottom-0"
                                                            style={{ backgroundColor: accentColors[colorIndex] }}
                                                        />
                                                    </div>
                                                </div>

                                                {/* Animated Corner Accent */}
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    whileInView={{ scale: 1 }}
                                                    transition={{ delay: skillIndex * 0.03 + 0.5 }}
                                                    viewport={{ once: true }}
                                                    className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 origin-bottom-right"
                                                    style={{ borderColor: accentColors[colorIndex] }}
                                                />

                                                {/* Hover Glow with Pulse */}
                                                <motion.div
                                                    animate={{
                                                        opacity: [0, 0.5, 0]
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        ease: "easeInOut"
                                                    }}
                                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                                                    style={{
                                                        boxShadow: `inset 0 0 30px ${accentColors[colorIndex]}40`
                                                    }}
                                                />
                                            </motion.div>
                                        );
                                    })}
                                </div>

                                {/* Decorative Line */}
                                {catIndex < Object.entries(skills).length - 1 && (
                                    <div className="mt-16 h-px bg-gradient-to-r from-transparent via-[#B80000] to-transparent"></div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
