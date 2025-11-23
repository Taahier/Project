import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { Award, ExternalLink } from 'lucide-react';
import ScrollReveal from './animations/ScrollReveal';
import ParallaxSection from './animations/ParallaxSection';

const Certifications = () => {
    const certifications = [
        {
            name: "AWS Certified Solutions Architect – Associate",
            issuer: "Amazon Web Services",
            skills: ["Cloud Architecture", "AWS", "Solutions Design"]
        },
        {
            name: "Microsoft Certified: Azure Fundamentals",
            issuer: "Microsoft",
            skills: ["Azure", "Cloud Services", "Microsoft Cloud"]
        },
        {
            name: "(ISC)² Certified in Cybersecurity",
            issuer: "ISC²",
            skills: ["Cybersecurity", "Security Principles", "Risk Management"]
        },
        {
            name: "Cisco Certified Network Associate (CCNA)",
            issuer: "Cisco",
            skills: ["Networking", "Cisco", "Network Security"]
        },
        {
            name: "Oracle OCI - AI for Cloud Applications",
            issuer: "Oracle",
            skills: ["Oracle Cloud", "AI", "Cloud Applications"]
        },
        {
            name: "Java Full Stack Development",
            issuer: "Professional Certification",
            skills: ["Java", "Full Stack", "Web Development"]
        }
    ];

    return (
        <section id="certifications" className="py-20 bg-[var(--bg-primary)] relative min-h-screen">
            <ParallaxSection speed={0.3}>
                <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader title="Credentials" subtitle="Certifications & Achievements" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                        {certifications.map((cert, index) => (
                            <CertificationCard key={index} cert={cert} index={index} />
                        ))}
                    </div>
                </div>
            </ParallaxSection>
        </section>
    );
};

const CertificationCard = ({ cert, index }) => {
    return (
        <div className="valorant-card-red group relative">
            {/* Decorative Corners */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-black/50"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-black/50"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-black/50"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-black/50"></div>

            <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-valorant-red/10 border border-valorant-red/30 group-hover:bg-valorant-red/20 transition-colors">
                            <Award className="text-valorant-red" size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-header uppercase leading-tight">
                                {cert.name}
                            </h3>
                            <p className="text-sm font-mono text-valorant-red mt-1">
                                {cert.issuer}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div>
                    <p className="font-mono text-xs uppercase mb-2 opacity-60">
                        Skills Validated
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, i) => (
                            <span
                                key={i}
                                className="text-xs font-mono px-2 py-1 bg-black/10 dark:bg-white/10 border border-black/20 dark:border-white/20"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Hover Indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="text-valorant-red" size={16} />
                </div>
            </div>
        </div>
    );
};

export default Certifications;
