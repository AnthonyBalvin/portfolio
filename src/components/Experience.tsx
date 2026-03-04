import React from 'react';
import { Bot, LayoutDashboard, Globe } from 'lucide-react';

export const Experience: React.FC = () => {
    const services = [
        {
            icon: <Bot className="w-6 h-6 text-white/50 mb-6" />,
            title: "AUTOMATIZACIONES",
            description: "Automatización de procesos empresariales utilizando herramientas como n8n y Make, integrando aplicaciones y reduciendo tareas manuales."
        },
        {
            icon: <LayoutDashboard className="w-6 h-6 text-white/50 mb-6" />,
            title: "SISTEMAS WEB",
            description: "Desarrollo de sistemas administrativos personalizados para la gestión de ventas, inventarios, usuarios y operaciones internas."
        },
        {
            icon: <Globe className="w-6 h-6 text-white/50 mb-6" />,
            title: "PÁGINAS WEB PROFESIONALES",
            description: "Creación de sitios web modernos, rápidos y adaptables, enfocados en presencia digital y conversión."
        }
    ];

    return (
        <section id="servicios" className="relative mb-32 scroll-mt-32 bg-[#0a0a0a] rounded-[2rem] p-6 md:p-12 overflow-hidden border border-white/5">
            {/* Extremely subtle ambient light overlay radial */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/[0.03] via-transparent to-transparent pointer-events-none"></div>

            <div className="relative z-10 w-full">
                <h2 className="text-center text-xl md:text-2xl font-bold tracking-wide uppercase mb-16">
                    <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-300 bg-[length:200%_auto] hover:bg-right transition-all duration-500 ease-out hover:scale-[1.02] cursor-default">
                        Servicios que Ofrezco
                    </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-[#111] backdrop-blur-sm rounded-2xl p-6 md:p-8 transition-all duration-300 ease-out flex flex-col items-start border border-white/5 hover:border-white/15 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 overflow-hidden h-full"
                        >
                            {/* Top 2px edge animates in with a gentle multi-color logic on hover */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-blue-500/50 group-hover:via-purple-500/50 group-hover:to-cyan-500/50 transition-all duration-300"></div>

                            {service.icon}

                            <div className="relative z-10 w-full flex flex-col items-start">
                                <h3 className="text-sm font-bold tracking-widest text-white/80 mb-4 group-hover:text-white transition-colors">{service.title}</h3>
                                <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/60 transition-colors">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
