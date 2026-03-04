import React from 'react';
import { CompanyLogo } from './CompanyLogo';
import type { Experience } from '../data/experience';

export const ExperienceItem: React.FC<{ experience: Experience }> = ({ experience }) => {
    return (
        <div className="relative pl-4 border-l-2 border-white/5 group hover:border-white/20 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                    <CompanyLogo name={experience.companyName} />
                    <div>
                        <h3 className="text-lg md:text-xl font-bold">{experience.role}</h3>
                    </div>
                </div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full group-hover:bg-white/10 transition-colors">
                    {experience.period}
                </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
                {experience.description}
            </p>
        </div>
    );
};
