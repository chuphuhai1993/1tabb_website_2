
import React from 'react';
import { Pillar } from '../types';

const pillarsData: Pillar[] = [
    {
        icon: 'lightbulb',
        title: 'Innovation',
        description: 'Pushing boundaries with AI-driven solutions that anticipate user needs before they arise.',
        color: 'primary',
    },
    {
        icon: 'diamond',
        title: 'Quality',
        description: 'Obsessive attention to detail, pixel-perfect interfaces, and robust architecture.',
        color: 'purple-400',
    },
    {
        icon: 'groups',
        title: 'Collaboration',
        description: 'Building bridges between disciplines to create holistic products that matter.',
        color: 'cyan-400',
    },
];

const PillarCard: React.FC<{ pillar: Pillar }> = ({ pillar }) => (
    <div className="glass-card p-10 rounded-[32px] group relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className={`material-symbols-outlined text-8xl text-${pillar.color}`}>{pillar.icon}</span>
        </div>
        <div className={`w-14 h-14 rounded-2xl icon-glass mb-8 group-hover:border-${pillar.color}/50 transition-all duration-500 relative z-10`}>
            <span className={`material-symbols-outlined text-2xl text-${pillar.color}`}>{pillar.icon}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-3 relative z-10">{pillar.title}</h3>
        <p className="text-white/50 text-sm leading-relaxed relative z-10">{pillar.description}</p>
    </div>
);

const Pillars: React.FC = () => {
    return (
        <section className="py-12 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">Core Values</span>
                <h2 className="text-3xl font-serif mt-4 text-white">The pillars of our craft</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pillarsData.map((pillar) => (
                    <PillarCard key={pillar.title} pillar={pillar} />
                ))}
            </div>
        </section>
    );
};

export default Pillars;
