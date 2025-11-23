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
            className="valorant-card-red group flex flex-col h-full"
        >
            {/* Decorative Corners */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-black/50 z-20"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-black/50 z-20"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-black/50 z-20"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-black/50 z-20"></div>

            {/* Image Placeholder or Actual Image */}
            <div className="w-full h-48 bg-black/20 border-b-2 border-black/20 relative overflow-hidden mb-4 group-hover:border-valorant-red/50 transition-colors duration-300">
                {project.image ? (
                    <>
                        <img
                            src={project.image}
                            alt={project.title || project.name}
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105 transform"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                    </>
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        {project.type === 'cybersecurity' ? <Shield size={48} className="opacity-50" /> :
                            project.type === 'iot' ? <Cpu size={48} className="opacity-50" /> :
                                <Folder size={48} className="opacity-50" />}
                    </div>
                )}
                {/* Overlay Grid */}
                <div className="absolute inset-0 bg-[var(--image-grid-pattern)] opacity-10 pointer-events-none"></div>
            </div>

            <div className="relative z-10 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2 border border-black/20 rounded text-xs font-mono uppercase font-bold opacity-80">
                        {project.type || 'Project'}
                    </div>
                    <div className="flex gap-3">
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 hover:text-white transition-colors">
                                <Github size={20} />
                            </a>
                        )}
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 hover:text-white transition-colors">
                                <ExternalLink size={20} />
                            </a>
                        )}
                    </div>
                </div>

                <h3 className="text-xl font-header font-bold mb-2">
                    {project.title || project.name}
                </h3>

                <p className="text-sm mb-6 line-clamp-3 opacity-80">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech && project.tech.map((tech, i) => (
                        <span key={i} className="text-xs font-mono bg-black/10 px-2 py-1 border border-black/20">
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
                        <div className="valorant-card-red group">
                            {/* Decorative Corners */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-black/50"></div>
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-black/50"></div>
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-black/50"></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-black/50"></div>

                            <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl font-header font-bold">EXP</div>
                            <div className="relative z-10">
                                <h4 className="text-3xl font-header uppercase">{projects.internship.company}</h4>
                                <p className="text-white/80 font-body font-bold uppercase tracking-widest mb-4">{projects.internship.role}</p>
                                <ul className="space-y-2 opacity-80">
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
