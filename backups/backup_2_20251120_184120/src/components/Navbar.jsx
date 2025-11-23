import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import data from '../data.json';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { sections } = data.header;
    const location = useLocation();

    const getLinkProps = (item) => {
        if (item === 'Education') {
            return { to: '/education', as: Link };
        }
        const href = location.pathname === '/' ? `#${item.toLowerCase()}` : `/#${item.toLowerCase()}`;
        return { href, as: 'a' };
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--bg-primary)]/40 backdrop-blur-md transition-colors duration-300">
            <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl font-header font-bold text-[var(--text-primary)] tracking-widest uppercase flex items-center gap-2 group">
                            <span className="w-8 h-8 bg-valorant-red flex items-center justify-center text-white clip-path-polygon group-hover:bg-[var(--text-primary)] group-hover:text-[var(--bg-primary)] transition-colors">
                                M.
                            </span>
                            <span className="group-hover:text-valorant-red transition-colors">Taahier</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex items-baseline space-x-8">
                            {sections.map((item) => {
                                const isEducation = item === 'Education';
                                const href = isEducation ? '/education' : (location.pathname === '/' ? `#${item.toLowerCase()}` : `/#${item.toLowerCase()}`);

                                return isEducation ? (
                                    <Link
                                        key={item}
                                        to="/education"
                                        className="text-[var(--text-primary)] hover:text-valorant-red px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wider transition-colors relative group"
                                    >
                                        {item}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-valorant-red transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                ) : (
                                    <a
                                        key={item}
                                        href={href}
                                        className="text-[var(--text-primary)] hover:text-valorant-red px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wider transition-colors relative group"
                                    >
                                        {item}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-valorant-red transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                );
                            })}
                        </div>
                        <ThemeToggle />
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center gap-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-[var(--text-primary)] hover:text-valorant-red p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-[var(--bg-primary)] border-b border-[var(--border-primary)]"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {sections.map((item) => {
                            const isEducation = item === 'Education';
                            const href = isEducation ? '/education' : (location.pathname === '/' ? `#${item.toLowerCase()}` : `/#${item.toLowerCase()}`);

                            return isEducation ? (
                                <Link
                                    key={item}
                                    to="/education"
                                    className="text-[var(--text-primary)] hover:text-valorant-red block px-3 py-2 rounded-md text-base font-medium uppercase tracking-wider"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </Link>
                            ) : (
                                <a
                                    key={item}
                                    href={href}
                                    className="text-[var(--text-primary)] hover:text-valorant-red block px-3 py-2 rounded-md text-base font-medium uppercase tracking-wider"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </a>
                            );
                        })}
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
