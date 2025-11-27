import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { Award, Shield, Lock, Terminal, Cpu, Globe, CheckCircle, Scan, Database, Server, Code, Wifi, Zap, Star } from 'lucide-react';
import ParallaxSection from './animations/ParallaxSection';

const Certifications = () => {
    const certifications = [
        {
            name: "AWS Certified Solutions Architect",
            issuer: "Amazon Web Services",
            id: "AWS-CSA-2024",
            icon: <Globe />,
            level: "ASSOCIATE",
            year: "2024",
            color: "#FF9900"
        },
        {
            name: "Microsoft Certified: Azure Fundamentals",
            issuer: "Microsoft",
            id: "MS-AZ-900",
            icon: <Server />,
            level: "FUNDAMENTAL",
            year: "2024",
            color: "#0078D4"
        },
        {
            name: "(ISC)² Certified in Cybersecurity",
            issuer: "ISC²",
            id: "ISC2-CC-7X",
            icon: <Shield />,
            level: "PROFESSIONAL",
            year: "2024",
            color: "#B80000"
        },
        {
            name: "Cisco Certified Network Associate",
            issuer: "Cisco",
            id: "CSCO-CCNA-2",
            icon: <Wifi />,
            level: "ASSOCIATE",
            year: "2023",
            color: "#1BA0D7"
        },
        {
            name: "Oracle OCI - AI for Cloud Apps",
            issuer: "Oracle",
            id: "ORCL-AI-CLD",
            icon: <Cpu />,
            level: "SPECIALIST",
            year: "2024",
            color: "#C74634"
        },
        {
            name: "Java Full Stack Development",
            issuer: "Professional Cert",
            id: "JAVA-FS-DEV",
            icon: <Code />,
            level: "EXPERT",
            year: "2023",
            color: "#5382A1"
        }
    ];

    return (
        <section id="certifications" className="py-32 bg-[var(--bg-primary)] relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.03, 0.05, 0.03]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-valorant-red rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.02, 0.04, 0.02]
                    }}
                    transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                    className="absolute left-0 bottom-1/4 w-[400px] h-[400px] bg-valorant-red rounded-full blur-3xl"
                />
            </div>

            <ParallaxSection speed={0.3}>
                <div className="w-full max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Section Header */}
                    <div className="mb-20">
                        <div className="flex items-center gap-6 mb-4">
                            <motion.div
                                animate={{ scaleY: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-2 h-24 bg-[#B80000]"
                            />
                            <div>
                                <h2 className="text-6xl md:text-7xl font-josefin font-black uppercase text-[var(--text-primary)] leading-none">
                                    CREDENTIALS
                                </h2>
                                <div className="flex items-center gap-2 mt-3">
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                        className="w-3 h-3 bg-[#B80000]"
                                    />
                                    <span className="text-[var(--text-primary)]/60 font-mono text-sm tracking-widest">
                                        {certifications.length} VERIFIED CERTIFICATIONS
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Innovative Credential Display - Hexagonal Grid Layout */}
                    <div className="relative">
                        {/* Floating Connection Lines */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" style={{ zIndex: 0 }}>
                            <motion.line
                                x1="20%" y1="20%" x2="50%" y2="40%"
                                stroke="#B80000"
                                strokeWidth="1"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                                viewport={{ once: true }}
                            />
                            <motion.line
                                x1="50%" y1="40%" x2="80%" y2="20%"
                                stroke="#B80000"
                                strokeWidth="1"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 1.5, delay: 0.7 }}
                                viewport={{ once: true }}
                            />
                        </svg>

                        {/* Credentials in Innovative Staggered Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                            {certifications.map((cert, index) => (
                                <CredentialCard key={index} cert={cert} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </ParallaxSection>
        </section>
    );
};

const CredentialCard = ({ cert, index }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
            }}
            viewport={{ once: true }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative group perspective-1000"
            style={{ transformStyle: 'preserve-3d' }}
        >
            {/* Main Card Container */}
            <motion.div
                whileHover={{
                    rotateY: 5,
                    rotateX: -5,
                    scale: 1.05,
                    z: 50
                }}
                transition={{ duration: 0.3 }}
                className="relative bg-[var(--bg-primary)] border-2 border-[var(--border-primary)] overflow-hidden"
                style={{
                    transformStyle: 'preserve-3d',
                    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)'
                }}
            >
                {/* Animated Gradient Background */}
                <motion.div
                    animate={{
                        background: isHovered
                            ? `linear-gradient(135deg, ${cert.color}20, transparent)`
                            : 'transparent'
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                />

                {/* Floating Icon with Orbit Animation */}
                <div className="absolute top-4 right-4 z-20">
                    <motion.div
                        animate={{
                            rotate: isHovered ? 360 : 0,
                            scale: isHovered ? 1.2 : 1
                        }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Icon Glow Ring */}
                        <motion.div
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.3, 0, 0.3]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 rounded-full"
                            style={{ backgroundColor: cert.color, filter: 'blur(8px)' }}
                        />

                        {/* Icon */}
                        <div
                            className="relative p-3 rounded-full border-2"
                            style={{ borderColor: cert.color, backgroundColor: 'var(--bg-primary)' }}
                        >
                            {React.cloneElement(cert.icon, {
                                size: 24,
                                strokeWidth: 2,
                                style: { color: cert.color }
                            })}
                        </div>
                    </motion.div>
                </div>

                {/* Content */}
                <div className="relative p-6 pt-20 z-10">
                    {/* Level Badge with Slide Animation */}
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.15 + 0.3 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4 px-3 py-1 text-xs font-black uppercase tracking-widest border-l-4"
                        style={{
                            borderColor: cert.color,
                            backgroundColor: `${cert.color}15`,
                            color: cert.color
                        }}
                    >
                        {cert.level}
                    </motion.div>

                    {/* Certification Name with Stagger */}
                    <h3 className="text-xl font-black uppercase text-[var(--text-primary)] mb-2 leading-tight">
                        {cert.name.split(' ').map((word, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.15 + 0.1 * i }}
                                viewport={{ once: true }}
                                className="inline-block mr-2"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </h3>

                    {/* Issuer */}
                    <p className="text-sm text-[var(--text-secondary)] font-mono mb-4">
                        // {cert.issuer}
                    </p>

                    {/* Divider with Animation */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ delay: index * 0.15 + 0.5, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="h-px mb-4 origin-left"
                        style={{ backgroundColor: cert.color }}
                    />

                    {/* Bottom Info */}
                    <div className="flex items-center justify-between">
                        {/* ID */}
                        <div>
                            <div className="text-xs text-[var(--text-secondary)] font-mono mb-1">
                                ID: {cert.id}
                            </div>
                            <div className="text-xs font-bold" style={{ color: cert.color }}>
                                {cert.year}
                            </div>
                        </div>

                        {/* Verification Badge */}
                        <motion.div
                            animate={{
                                scale: isHovered ? [1, 1.2, 1] : 1
                            }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-1"
                        >
                            <CheckCircle size={16} style={{ color: cert.color }} />
                            <span className="text-xs font-bold uppercase" style={{ color: cert.color }}>
                                Verified
                            </span>
                        </motion.div>
                    </div>
                </div>

                {/* Corner Cut Accent */}
                <div
                    className="absolute bottom-0 right-0 w-16 h-16 opacity-20"
                    style={{
                        background: cert.color,
                        clipPath: 'polygon(100% 0, 100% 100%, 0 100%)'
                    }}
                />

                {/* Scan Line Animation */}
                <motion.div
                    animate={{
                        y: isHovered ? ['0%', '100%'] : '0%'
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: isHovered ? Infinity : 0,
                        ease: "linear"
                    }}
                    className="absolute left-0 w-full h-px opacity-30 pointer-events-none"
                    style={{ backgroundColor: cert.color }}
                />

                {/* Particle Effects on Hover */}
                {isHovered && (
                    <>
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{
                                    opacity: [0, 1, 0],
                                    scale: [0, 1, 0],
                                    x: Math.random() * 100 - 50,
                                    y: Math.random() * 100 - 50
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: i * 0.2
                                }}
                                className="absolute w-1 h-1 rounded-full"
                                style={{
                                    backgroundColor: cert.color,
                                    left: '50%',
                                    top: '50%'
                                }}
                            />
                        ))}
                    </>
                )}
            </motion.div>

            {/* Floating Shadow */}
            <motion.div
                animate={{
                    opacity: isHovered ? 0.3 : 0,
                    scale: isHovered ? 1.1 : 1
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 -z-10 blur-xl"
                style={{
                    backgroundColor: cert.color,
                    transform: 'translateZ(-20px)'
                }}
            />
        </motion.div>
    );
};

export default Certifications;
