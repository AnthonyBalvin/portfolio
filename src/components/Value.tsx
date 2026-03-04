import React from 'react';

export const Value: React.FC = () => {
    const valueProps = [
        {
            number: "01",
            title: "Diagnóstico Preciso",
            description: "Analizar el estado actual del negocio para identificar cuellos de botella y oportunidades claras de automatización y digitalización."
        },
        {
            number: "02",
            title: "Desarrollo a Medida",
            description: "Crear soluciones de software con arquitecturas escalables que se adapten exactamente a las necesidades operativas sin código basura."
        },
        {
            number: "03",
            title: "Integración Estratégica",
            description: "Conectar herramientas o plataformas existentes mediante integraciones API para mantener el flujo de datos ininterrumpido a lo largo del negocio."
        },
        {
            number: "04",
            title: "Soporte y Evolución",
            description: "Acompañar el despliegue de cada producto digital asegurando estabilidad a largo plazo y capacitando en el uso de los nuevos sistemas."
        }
    ];

    return (
        <section id="valor" className="mb-32 scroll-mt-32">
            <h2 className="text-center text-xl md:text-2xl font-bold tracking-wide uppercase mb-16">
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-violet-300 bg-[length:200%_auto] hover:bg-right transition-all duration-500 ease-out hover:scale-[1.02] cursor-default">
                    Cómo Genero Valor
                </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {valueProps.map((item, index) => (
                    <div
                        key={index}
                        className="group relative bg-[#0a0a0a] rounded-2xl p-6 md:p-8 border border-white/5 overflow-hidden transition-all duration-300 hover:bg-[#111] hover:border-white/10 h-full"
                    >
                        {/* Giant Number Background */}
                        <div className="absolute top-2 right-4 text-8xl font-black text-white/[0.02] group-hover:text-white/[0.04] transition-colors duration-500 pointer-events-none select-none z-0">
                            {item.number}
                        </div>

                        <div className="relative z-10 w-full">
                            <h3 className="text-lg font-bold tracking-wide text-white/90 mb-3">{item.title}</h3>
                            <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
