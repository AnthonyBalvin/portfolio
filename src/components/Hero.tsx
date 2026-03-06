import React, { useState, useEffect } from 'react';

const PHRASES = [
    "Aplicaciones Web Profesionales",
    "Plataformas Digitales",
    "Sistemas Escalables para Negocios"
];

export const Hero: React.FC = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;
        const i = loopNum % PHRASES.length;
        const fullText = PHRASES[i];

        if (isDeleting) {
            timeout = setTimeout(() => {
                setText(fullText.substring(0, text.length - 1));
            }, 40);
        } else {
            timeout = setTimeout(() => {
                setText(fullText.substring(0, text.length + 1));
            }, 80);
        }

        if (!isDeleting && text === fullText) {
            clearTimeout(timeout);
            timeout = setTimeout(() => setIsDeleting(true), 1500);
        } else if (isDeleting && text === '') {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                setIsDeleting(false);
                setLoopNum((prev) => prev + 1);
            }, 300);
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, loopNum]);
    return (
        <section id="inicio" className="text-center mb-32 scroll-mt-32">
            <div className="relative inline-block mb-8 group animate-float">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 via-blue-500 to-cyan-400 rounded-full blur-xl opacity-30 md:group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full p-[2px] bg-gradient-to-tr from-purple-500/40 via-blue-500/40 to-cyan-400/40 shadow-2xl transition-transform duration-300 md:group-hover:scale-105">
                    <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0a0a]">
                        <img
                            src="/profile1.webp"
                            alt="Profile"
                            loading="eager"
                            decoding="async"
                            fetchPriority="high"
                            className="w-full h-full object-cover object-[center_30%] rounded-full scale-[1.15]"
                        />
                    </div>
                </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight text-white">
                Desarrollador de Sistemas Web
            </h1>

            <div className="text-xl md:text-2xl text-white/80 font-medium mb-12 max-w-3xl mx-auto leading-relaxed flex flex-col items-center min-h-[80px] md:min-h-[96px]">
                <span className="mb-2">Especializado en crear</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 font-bold block text-center min-h-[32px] md:min-h-[40px]">
                    {text}<span className="text-cyan-400 animate-pulse ml-1 font-normal opacity-80">|</span>
                </span>
            </div>

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
