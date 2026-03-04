import React from 'react';
import { ExternalLink, Copy, Check } from 'lucide-react';
import type { Project } from '../data/projects';

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const [copied, setCopied] = React.useState(false);

    const handleCopy = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (project.demoCredentials) {
            const copyText = project.demoCredentials.user
                ? `Usuario: ${project.demoCredentials.user}\nContraseña: ${project.demoCredentials.pass}`
                : `Contraseña: ${project.demoCredentials.pass}`;
            navigator.clipboard.writeText(copyText);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-[#0f0f0f] rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(255,255,255,0.08)] transition-all duration-500 flex flex-col h-full"
        >
            {/* Image Placeholder with Hover Effects (16:9) */}
            <div className={`aspect-video bg-[#151515] border-b border-white/5 relative overflow-hidden flex-shrink-0 flex items-center justify-center`}>
                {/* External Link Icon */}
                <div className="absolute top-4 right-4 z-20">
                    <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white transition-colors duration-500" />
                </div>

                {/* Main Image */}
                <img
                    src={project.image}
                    alt={`${project.title} Preview`}
                    className="w-full h-full object-cover object-top filter brightness-75 group-hover:brightness-100 transform scale-100 group-hover:scale-110 transition-all duration-500 ease-in-out"
                />

                {/* Dark Overlay that fades out on hover */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 ease-in-out pointer-events-none"></div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                    <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold tracking-tight text-white/90 group-hover:text-white transition-colors">{project.title}</h4>
                    </div>
                    <p className="text-sm text-white/50 line-clamp-2 leading-relaxed">{project.description}</p>
                </div>

                {/* Tech Stack Chips */}
                {project.stack && project.stack.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.stack.map((tech, i) => (
                            <span key={i} className="text-[11px] font-medium text-white/40 px-2 py-0.5 rounded-md border border-white/5 bg-white/[0.02]">
                                {tech}
                            </span>
                        ))}
                    </div>
                )}

                <div className="flex-1 flex flex-col justify-end">
                    {/* Demo Credentials Box - Fixed Height / Placeholder */}
                    <div className="min-h-[110px] w-full mb-4">
                        {project.demoCredentials ? (
                            <div className="flex flex-col gap-2 p-3.5 rounded-xl border border-white/5 bg-white/[0.02] h-full">
                                <span className="text-[10px] uppercase font-bold tracking-widest text-white/40 mb-1">Acceso Demo</span>
                                <div
                                    onClick={handleCopy}
                                    className="flex items-center justify-between gap-3 px-3 py-2.5 bg-[#0f0f0f] border border-white/5 rounded-lg text-xs font-mono text-white/60 cursor-pointer hover:border-white/20 transition-colors"
                                    title="Copiar credenciales"
                                >
                                    <div className="flex flex-col gap-1.5">
                                        {project.demoCredentials.user && <span>Usuario: <span className="text-white/90">{project.demoCredentials.user}</span></span>}
                                        <span>Contraseña: <span className="text-white/90">{project.demoCredentials.pass}</span></span>
                                    </div>
                                    {copied ? <Check className="w-4 h-4 text-green-500 flex-shrink-0" /> : <Copy className="w-4 h-4 opacity-40 hover:opacity-100 transition-opacity flex-shrink-0" />}
                                </div>
                                {project.demoCredentials.note && (
                                    <p className="text-[11px] text-white/40 mt-1 leading-relaxed">{project.demoCredentials.note}</p>
                                )}
                            </div>
                        ) : (
                            <div className="h-full border border-dashed border-white/5 rounded-xl bg-white/[0.01] flex items-center justify-center">
                                <span className="text-[10px] uppercase font-bold tracking-widest text-white/20">Sin acceso demo público</span>
                            </div>
                        )}
                    </div>

                    <div className="pt-4 flex justify-end items-center border-t border-white/5">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm border border-white/10 px-4 py-1.5 rounded-md hover:border-white/30 hover:bg-white/5 transition-all duration-200 text-white font-medium"
                            onClick={(e) => e.stopPropagation()}
                        >
                            Ver Proyecto
                        </a>
                    </div>
                </div>
            </div>
        </a>
    );
};
