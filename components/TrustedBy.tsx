
import React from 'react';

const logos = [
    { name: 'TechFlow', className: 'text-xl font-serif text-black/30 dark:text-white/30 italic' },
    { name: 'NEXUS', className: 'text-xl font-bold text-black/30 dark:text-white/30 tracking-tight' },
    { name: 'bitstream', className: 'text-xl font-mono text-black/30 dark:text-white/30' },
    { name: 'Aura', className: 'text-xl font-serif text-black/30 dark:text-white/30 uppercase' },
    { name: 'Velociti', className: 'text-xl font-bold text-black/30 dark:text-white/30' },
    { name: 'CodeCraft', className: 'text-xl font-mono text-black/30 dark:text-white/30' },
    { name: 'Prism', className: 'text-xl font-serif text-black/30 dark:text-white/30 italic' },
];

const TrustedBy: React.FC = () => {
    return (
        <section className="py-20 border-t border-b border-white/5 bg-white/[0.05]">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-black/40 dark:text-white/40 mb-12">Trusted by industry leaders</p>
                <div className="logo-slider overflow-hidden flex relative w-full">
                    <div className="flex gap-16 items-center animate-[scroll_40s_linear_infinite] min-w-full justify-around whitespace-nowrap px-4">
                        {[...logos, ...logos].map((logo, index) => (
                            <span key={index} className={logo.className}>{logo.name}</span>
                        ))}
                    </div>
                </div>
                <style>
                    {`
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    `}
                </style>
            </div>
        </section>
    );
};

export default TrustedBy;
