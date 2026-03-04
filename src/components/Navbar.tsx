import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
    const [activeSection, setActiveSection] = useState('inicio');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const sections = document.querySelectorAll("section, footer");

        const handleScroll = () => {
            const middle = window.innerHeight / 2;
            let currentSection = "";

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();

                if (rect.top <= middle && rect.bottom >= middle) {
                    currentSection = section.id;
                }
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when clicking a link
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    const navLinks = [
        { id: 'inicio', label: 'Inicio' },
        { id: 'proyectos', label: 'Proyectos' },
        { id: 'valor', label: 'Cómo Genero Valor' },
        { id: 'servicios', label: 'Servicios' },
        { id: 'contacto', label: 'Contáctame', isSpecial: true },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-white/5">
            <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center md:justify-center">
                {/* Mobile Logo / Brand (Optional, can be empty or just help center flex) */}
                <div className="md:hidden font-bold tracking-widest text-white/90">AB</div>

                {/* Hamburger Button (Mobile) */}
                <button
                    className="md:hidden text-white/70 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-12 text-sm font-medium tracking-wide">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.id;
                        const textColor = link.isSpecial ? 'text-blue-100/70 hover:text-blue-100' : 'text-white/60 hover:text-white';
                        const activeTextColor = link.isSpecial ? 'text-blue-100 opacity-100' : 'text-white opacity-100';
                        const lineColor = link.isSpecial ? 'bg-blue-400' : 'bg-white';

                        return (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                className={`group relative py-1 transition-all duration-300 ${isActive ? activeTextColor : textColor}`}
                            >
                                {link.label}
                                {/* Animated Underline for Hover */}
                                <span
                                    className={`absolute left-0 -bottom-1 h-[2px] ${lineColor} origin-left transition-transform duration-300 ease-in-out ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                                    style={{ width: '100%' }}
                                ></span>
                            </a>
                        );
                    })}
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-80 py-4 opacity-100' : 'max-h-0 py-0 opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col items-center space-y-6">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.id;
                        const textColor = link.isSpecial ? 'text-blue-400' : 'text-white/60';
                        const activeTextColor = link.isSpecial ? 'text-blue-300' : 'text-white';

                        return (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                onClick={handleLinkClick}
                                className={`text-base font-medium tracking-wide transition-colors ${isActive ? activeTextColor : textColor} ${link.isSpecial ? 'border border-blue-500/30 px-6 py-2 rounded-md bg-blue-500/10' : ''}`}
                            >
                                {link.label}
                            </a>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};
