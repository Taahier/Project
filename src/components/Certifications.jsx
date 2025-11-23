import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { Award, Shield, Lock, Terminal, Cpu, Globe, CheckCircle, Scan, Database, Server, Code, Wifi } from 'lucide-react';
import ParallaxSection from './animations/ParallaxSection';

const Certifications = () => {
    const certifications = [
        {
            name: "AWS Certified Solutions Architect",
            issuer: "Amazon Web Services",
            id: "AWS-CSA-2024",
            icon: <Globe />,
            level: "ASSOCIATE",
            color: "#FF9900"
        },
        {
            name: "Microsoft Certified: Azure Fundamentals",
            issuer: "Microsoft",
            id: "MS-AZ-900",
            icon: <Server />,
            level: "FUNDAMENTAL",
            color: "#0078D4"
        },
        {
            name: "(ISC)² Certified in Cybersecurity",
            issuer: "ISC²",
            id: "ISC2-CC-7X",
            icon: <Shield />,
            level: "PROFESSIONAL",
            color: "#B80000"
        },
        {
            name: "Cisco Certified Network Associate",
            issuer: "Cisco",
            id: "CSCO-CCNA-2",
            icon: <Wifi />,
            level: "ASSOCIATE",
            color: "#1BA0D7"
        },
        {
            name: "Oracle OCI - AI for Cloud Apps",
            issuer: "Oracle",
            id: "ORCL-AI-CLD",
            icon: <Cpu />,
            level: "SPECIALIST",
            color: "#C74634"
        },
        {
            name: "Java Full Stack Development",
            issuer: "Professional Cert",
            id: "JAVA-FS-DEV",
            icon: <Code />,
            level: "EXPERT",
            color: "#5382A1"
        }
    ];

    return (
        <section id="certifications" className="py-32 bg-[var(--bg-primary)] relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

            <ParallaxSection speed={0.2}>
                {/* Wider Container */}
                <div className="w-full max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <SectionHeader title="Credentials" subtitle="Security Clearance & Authorizations" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
                        {certifications.map((cert, index) => (
                            <CredentialPlate key={index} cert={cert} index={index} />
                        ))}
                    </div>
                </div>
            </ParallaxSection>
        </section>
    );
};

const CredentialPlate = ({ cert, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative group h-48 w-full"
        >
            {/* Main Plate Background - Blood Red */}
            <div className="absolute inset-0 bg-[#B80000] border-l-4 border-r-4 border-t border-b border-white/10 transition-all duration-300 group-hover:border-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] clip-path-plate"></div>

            {/* Content Container */}
            <div className="relative h-full p-6 flex flex-col justify-between z-10">

                {/* Top Row: ID & Status */}
                <div className="flex justify-between items-center border-b border-white/20 pb-3">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-white animate-pulse"></div>
                        <span className="font-mono text-xs text-white/80 tracking-[0.2em]">{cert.id}</span>
                    </div>
                    <div className="px-2 py-0.5 bg-black/20 border border-white/20 text-[10px] font-bold text-white tracking-wider uppercase group-hover:bg-white group-hover:text-[#B80000] transition-colors">
                        {cert.level}
                    </div>
                </div>

                {/* Middle Row: Icon & Title */}
                <div className="flex items-center gap-5 my-auto">
                    <div
                        className="p-3 bg-black/20 border border-white/10 text-white group-hover:bg-white group-hover:text-[#B80000] transition-all duration-300"
                    >
                        {React.cloneElement(cert.icon, { size: 32, strokeWidth: 1.5 })}
                    </div>
                    <div>
                        <h3 className="text-2xl font-black text-white uppercase leading-none tracking-tight">
                            {cert.name}
                        </h3>
                        <p className="text-xs font-mono text-white/80 mt-1 uppercase tracking-wider">
                            Issued by {cert.issuer}
                        </p>
                    </div>
                </div>

                {/* Bottom Row: Decorative Tech Lines */}
                <div className="flex items-end justify-between mt-auto pt-3 border-t border-white/20">
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className={`w-1 h-3 ${i < 3 ? 'bg-white' : 'bg-white/20'} transform skew-x-12`}></div>
                        ))}
                    </div>
                    <Scan className="text-white/40 group-hover:text-white transition-colors" size={18} />
                </div>
            </div>

            {/* Hover Overlay Scan */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"></div>
        </motion.div>
    );
};

export default Certifications;
