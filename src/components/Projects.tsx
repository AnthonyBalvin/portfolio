import React from 'react';
import { projectsData } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export const Projects: React.FC = () => {
    return (
        <section id="proyectos" className="mb-32 scroll-mt-32">
            <h2 className="text-center text-xl md:text-2xl font-bold tracking-wide uppercase mb-16">
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-300 bg-[length:200%_auto] hover:bg-right transition-all duration-500 ease-out hover:scale-[1.02] cursor-default">
                    Proyectos
                </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};
