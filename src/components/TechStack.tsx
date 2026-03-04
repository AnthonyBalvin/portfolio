import React from 'react';
import { Marquee } from './ui/marquee';
import {
    SiReact,
    SiNodedotjs,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiAmazonwebservices,
    SiN8N,
    SiMake
} from 'react-icons/si';

const technologies = [
    { name: 'React', icon: SiReact, color: 'group-hover:text-[#61DAFB]', iconClass: 'w-8 h-8 sm:w-9 sm:h-9' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'group-hover:text-[#339933]', iconClass: 'w-8 h-8 sm:w-9 sm:h-9' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'group-hover:text-white', iconClass: 'w-8 h-8 sm:w-9 sm:h-9' },
    { name: 'TypeScript', icon: SiTypescript, color: 'group-hover:text-[#3178C6]', iconClass: 'w-7 h-7 sm:w-8 sm:h-8' },
    { name: 'TailwindCSS', icon: SiTailwindcss, color: 'group-hover:text-[#06B6D4]', iconClass: 'w-8 h-8 sm:w-9 sm:h-9' },
    { name: 'AWS', icon: SiAmazonwebservices, color: 'group-hover:text-[#FF9900]', iconClass: 'w-10 h-10 sm:w-12 sm:h-12 relative -top-[1px]', hideName: true },
    { name: 'n8n', icon: SiN8N, color: 'group-hover:text-[#FF6D5A]', iconClass: 'w-8 h-8 sm:w-[36px] sm:h-[36px] relative top-[1px]' },
    { name: 'Make', icon: SiMake, color: 'group-hover:text-white', iconClass: 'w-7 h-7 sm:w-8 sm:h-8' },
];

export const TechStack: React.FC = () => {
    return (
        <section className="mb-32 overflow-hidden relative py-8 md:py-16">
            <h2 className="text-center text-xl md:text-2xl font-bold tracking-wide uppercase mb-16">
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-cyan-300 bg-[length:200%_auto] hover:bg-right transition-all duration-500 ease-out hover:scale-[1.02] cursor-default">
                    Tecnologías que utilizo
                </span>
            </h2>

            <div className="-mt-4 relative w-full flex">
                {/* Optional fade masks for edges to look more professional */}
                <div className="absolute left-0 top-0 w-32 sm:w-64 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent z-20 pointer-events-none"></div>
                <div className="absolute right-0 top-0 w-32 sm:w-64 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent z-20 pointer-events-none"></div>

                <Marquee pauseOnHover={false} speed={40}>
                    <div className="flex w-max items-center gap-20 px-8 sm:px-12">
                        {technologies.map((tech, index) => {
                            const Icon = tech.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex items-center justify-center gap-4 min-w-[120px] sm:min-w-[160px] group cursor-pointer transition-all duration-300 ease-in-out opacity-60 grayscale hover:grayscale-0 hover:opacity-100 text-white"
                                >
                                    <div className="flex items-center justify-center h-10">
                                        <Icon className={`transition-colors duration-300 ${tech.color} ${tech.iconClass}`} />
                                    </div>
                                    {!tech.hideName && (
                                        <span className="font-medium text-base sm:text-lg tracking-wide group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                                            {tech.name}
                                        </span>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </Marquee>
            </div>
        </section>
    );
};
