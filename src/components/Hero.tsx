import React from 'react';

export const Hero: React.FC = () => {
    return (
        <section id="inicio" className="text-center mb-32 scroll-mt-32">
            <div className="relative inline-block mb-8">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
                <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full border-2 border-purple-500/30 p-0 overflow-hidden shadow-2xl flex items-center justify-center">
                    <img
                        src="/profile.png"
                        alt="Profile"
                        className="w-full h-full object-cover object-[center_30%] rounded-full scale-[1.15]"
                    />
                </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight text-white">
                Ingeniero en Sistemas e Informática
            </h1>

            <h2 className="text-xl md:text-2xl text-white/70 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                Especializado en <br className="hidden sm:block" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 font-bold">
                    Automatizaciones, Sistemas Web y Páginas Web Profesionales
                </span>
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4 sm:px-0 max-w-sm sm:max-w-none mx-auto">
                <a
                    href="#contacto"
                    className="w-full sm:w-auto bg-white text-black px-6 py-3 sm:py-2.5 rounded-md font-medium hover:bg-gray-200 active:scale-95 transition-all duration-200"
                >
                    Contáctame
                </a>
                <a
                    href="/anthonybalvin_cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-transparent border border-white/20 text-white px-6 py-3 sm:py-2.5 rounded-md hover:bg-white/5 transition-all duration-200"
                >
                    Descargar CV
                </a>
            </div>
        </section>
    );
};
