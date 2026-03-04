import React from 'react';

interface CompanyLogoProps {
    name: string;
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({ name }) => {
    const logos: Record<string, React.ReactNode> = {
        Google: <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold text-xl transition-transform hover:scale-110">G</div>,
        Apple: <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black text-2xl transition-transform hover:scale-110"></div>,
        Meta: <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-500 text-xl font-bold transition-transform hover:scale-110">∞</div>,
    };
    return logos[name] || <div className="w-10 h-10 bg-gray-700 rounded-full transition-transform hover:scale-110" />;
};
