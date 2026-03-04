import React from 'react';
import { Mail, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer id="contacto" className="pt-20 pb-10 border-t border-white/5 scroll-mt-32">
            <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
                <h2 className="text-xl md:text-2xl font-bold mb-4 tracking-wide text-white">
                    Contacto
                </h2>
                <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-md">
                    Abierto a discutir nuevos proyectos, oportunidades de consultoría y colaboraciones técnicas.
                </p>

                <div className="w-full px-4 sm:px-0">
                    <a href="mailto:anthony.balvinmalvaceda@gmail.com" className="flex sm:inline-flex items-center justify-center gap-2 w-full sm:w-auto text-white border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all px-6 py-3 sm:py-2.5 rounded-md text-sm font-medium mb-12">
                        <Mail className="w-4 h-4" />
                        <span>anthony.balvinmalvaceda@gmail.com</span>
                    </a>
                </div>

                <div className="flex gap-8 mb-16 items-center justify-center">
                    <a
                        href="https://www.linkedin.com/in/anthony-balvin-malvaceda/"
                        className="text-white/40 hover:text-white transition-all duration-300 hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="LinkedIn"
                    >
                        <Linkedin className="w-6 h-6" strokeWidth={1.5} />
                    </a>
                    <a
                        href="https://www.instagram.com/anthony.1b/"
                        className="text-white/40 hover:text-white transition-all duration-300 hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Instagram"
                    >
                        <Instagram className="w-6 h-6" strokeWidth={1.5} />
                    </a>
                    <a
                        href="https://wa.me/51934301716"
                        className="text-white/40 hover:text-white transition-all duration-300 hover:scale-110 flex items-center justify-center w-6 h-6"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="WhatsApp"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-full h-full"
                        >
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                        </svg>
                    </a>
                </div>
            </div>

            <div className="flex flex-col items-center gap-2 text-center text-xs text-white/40 tracking-widest font-medium uppercase mt-8 pt-8 border-t border-white/5 max-w-2xl mx-auto">
                <p>© {new Date().getFullYear()} Anthony Balvin Malvaceda</p>
                <p>Ingeniero en Sistemas e Informática</p>
            </div>
        </footer>
    );
};
