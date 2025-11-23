import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import data from '../data.json';
import { ExternalLink, Github, Folder, Shield, Cpu } from 'lucide-react';

const Projects = () => {
    const { projects } = data;

    const renderProjectCard = (project, index) => (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-[var(--card-bg)] border border-[var(--border-primary)] hover:border-2 hover:border-valorant-red transition-all duration-300 overflow-hidden flex flex-col h-full"
        >
            {/* Image Placeholder */}
            <div className="w-full h-48 bg-black/40 border-b border-[var(--border-primary)] relative overflow-hidden group-hover:border-valorant-red/50 transition-colors">
                <div className="absolute inset-0 flex items-center justify-center">
                    {project.type === 'cybersecurity' ? <Shield size={48} className="text-valorant-red/20 group-hover:text-valorant-red/40 transition-colors" /> :
                        project.type === 'iot' ? <Cpu size={48} className="text-valorant-red/20 group-hover:text-valorant-red/40 transition-colors" /> :
                            <Folder size={48} className="text-valorant-red/20 group-hover:text-valorant-red/40 transition-colors" />}
                </div>
                {/* Overlay Grid */}
                <div className="absolute inset-0 bg-[var(--image-grid-pattern)] opacity-30"></div>
            </div>

            <div className="p-6 relative z-10 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded text-xs font-mono uppercase text-valorant-red">
                        {project.type || 'Project'}
                    </div>
                    <div className="flex gap-3">
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-valorant-red transition-colors">
                                <Github size={20} />
                            </a>
                        )}
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-valorant-red transition-colors">
                                <ExternalLink size={20} />
                            </a>
                        )}
                    </div>
                </div>

                <h3 className="text-xl font-header font-bold text-[var(--text-primary)] mb-2 group-hover:text-valorant-red transition-colors">
                    {project.title || project.name}
                </h3>

                <p className="text-[var(--text-secondary)] text-sm mb-6 line-clamp-3">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech && project.tech.map((tech, i) => (
                        <span key={i} className="text-xs font-mono text-[var(--text-primary)] bg-[var(--bg-primary)] px-2 py-1 border border-[var(--border-primary)]">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );

    return (
        <section id="projects" className="py-20 bg-[var(--bg-primary)] relative overflow-hidden">
            <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader title="Mission Log" subtitle="Projects & Work" />

                <div className="space-y-16">
                    {/* Internship */}
                    <div>
                        <h3 className="text-xl text-valorant-red font-header uppercase mb-6 flex items-center gap-4">
                            <span className="w-8 h-px bg-valorant-red"></span>
                            Professional Experience
                        </h3>
                        <div className="bg-[var(--card-bg)] border-l-4 border-valorant-red p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl font-header font-bold text-[var(--text-primary)]">EXP</div>
                            <div className="relative z-10">
                                <h4 className="text-3xl font-header text-[var(--text-primary)] uppercase">{projects.internship.company}</h4>
                                <p className="text-valorant-red font-body uppercase tracking-widest mb-4">{projects.internship.role}</p>
                                <ul className="space-y-2 text-[var(--text-secondary)]">
                                    {projects.internship.description.map((desc, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-valorant-red mt-1.5 w-1.5 h-1.5 bg-valorant-red rotate-45 block"></span>
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Web Projects */}
                    <div>
                        <h3 className="text-xl text-valorant-red font-header uppercase mb-6 flex items-center gap-4">
                            <span className="w-8 h-px bg-valorant-red"></span>
                            Web Development
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {projects.web.map((p, i) => renderProjectCard(p, i))}
                        </div>
                    </div>

                    {/* Applications */}
                    <div>
                        <h3 className="text-xl text-valorant-red font-header uppercase mb-6 flex items-center gap-4">
                            <span className="w-8 h-px bg-valorant-red"></span>
                            Applications
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {projects.applications.map((p, i) => renderProjectCard(p, i))}
                        </div>
                    </div>

                    {/* Cybersecurity */}
                    <div>
                        <h3 className="text-xl text-valorant-red font-header uppercase mb-6 flex items-center gap-4">
                            <span className="w-8 h-px bg-valorant-red"></span>
                            Cybersecurity & IoT
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {projects.cybersecurity_iot.map((p, i) => renderProjectCard(p, i))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
