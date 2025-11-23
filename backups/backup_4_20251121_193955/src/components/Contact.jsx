import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import data from '../data.json';
import { Linkedin, Mail, Github, Twitter, Phone, ExternalLink } from 'lucide-react';
import ProfileCard from './animations/ProfileCard';

const Contact = () => {
    const { contact } = data;

    const iconMap = {
        LinkedIn: Linkedin,
        Email: Mail,
        GitHub: Github,
        Twitter: Twitter,
        WhatsApp: Phone
    };

    return (
        <section id="contact" className="py-20 bg-[var(--bg-primary)] relative overflow-hidden">
            <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <SectionHeader title="Recruit Me" subtitle="Contact Protocol" />

                        <p className="text-2xl text-[var(--text-primary)] font-header uppercase mb-8 leading-relaxed">
                            {contact.message}
                        </p>

                        {/* Mobile-only Image */}
                        <div className="relative block md:hidden mb-8">
                            <div className="w-full aspect-square bg-[var(--bg-primary)] border border-[var(--border-primary)] relative p-8">
                                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-valorant-red"></div>
                                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-valorant-red"></div>
                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-valorant-red"></div>
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-valorant-red"></div>

                                <div className="h-full w-full flex items-center justify-center border border-[var(--border-primary)] bg-[var(--image-grid-pattern)] opacity-50">
                                    <div className="text-center">
                                        <h3 className="text-6xl font-header text-[var(--text-primary)]/10 font-bold uppercase">Taahier</h3>
                                        <p className="text-valorant-red font-mono text-sm mt-2">STATUS: ONLINE</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            {Object.entries(contact.links).map(([platform, url]) => {
                                if (platform === 'Resume') return null; // Skip resume here as it's in Hero
                                const Icon = iconMap[platform] || ExternalLink;

                                return (
                                    <a
                                        key={platform}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-4 p-4 bg-[var(--card-bg)] hover:bg-valorant-red transition-colors duration-300 border-l-2 border-transparent hover:border-white"
                                    >
                                        <div className="p-2 bg-white/10 rounded group-hover:bg-white/20">
                                            <Icon size={20} className="text-[var(--text-primary)] group-hover:text-white" />
                                        </div>
                                        <span className="text-[var(--text-primary)] group-hover:text-white font-header uppercase tracking-wider text-lg">
                                            {platform}
                                        </span>
                                        <span className="ml-auto text-[var(--text-secondary)] group-hover:text-white font-mono text-xs">
                      // CONNECT
                                        </span>
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    <div className="relative hidden md:flex justify-center items-center">
                        {/* Decorative Border Wrapper */}
                        <div className="w-full aspect-square bg-[var(--bg-primary)] border border-[var(--border-primary)] relative p-8">
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-valorant-red"></div>
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-valorant-red"></div>
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-valorant-red"></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-valorant-red"></div>

                            <div className="h-full w-full flex items-center justify-center">
                                <ProfileCard
                                    name="Taahier Mhd"
                                    title="Full Stack Developer"
                                    handle="taahier"
                                    status="Online"
                                    contactText="Recruit Me"
                                    avatarUrl="/images/prof.jpeg"
                                    iconUrl="https://assets.codepen.io/13471/sparkles.gif"
                                    showUserInfo={true}
                                    enableTilt={true}
                                    enableMobileTilt={false}
                                    onContactClick={() => {
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-[var(--text-secondary)] font-body text-sm">
                        &copy; {new Date().getFullYear()} Taahier Mahammad. All Rights Reserved. <br />
                        <span className="text-xs opacity-50">Inspired by Valorant. Not affiliated with Riot Games.</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
