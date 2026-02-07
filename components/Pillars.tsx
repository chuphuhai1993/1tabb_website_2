
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Pillar } from '../types';

const pillarsConfig = [
    {
        id: 'innovation',
        icon: 'lightbulb',
        color: '[var(--primary)]',
    },
    {
        id: 'quality',
        icon: 'diamond',
        color: 'purple-400',
    },
    {
        id: 'collaboration',
        icon: 'groups',
        color: 'cyan-400',
    },
] as const;

const PillarCard: React.FC<{ pillar: Pillar }> = ({ pillar }) => (
    <div className="glass-card p-10 rounded-[32px] group relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className={`material-symbols-outlined text-8xl text-${pillar.color}`}>{pillar.icon}</span>
        </div>
        <div className={`w-14 h-14 rounded-2xl icon-glass mb-8 group-hover:border-${pillar.color}/50 transition-all duration-500 relative z-10`}>
            <span className={`material-symbols-outlined text-2xl text-${pillar.color}`}>{pillar.icon}</span>
        </div>
        <h3 className="text-xl font-bold text-black/90 dark:text-white mb-3 relative z-10">{pillar.title}</h3>
        <p className="text-black/50 dark:text-white/50 text-sm leading-relaxed relative z-10">{pillar.description}</p>
    </div>
);

const Pillars: React.FC = () => {
    const { t } = useLanguage();

    const pillarsData: Pillar[] = pillarsConfig.map((config) => ({
        icon: config.icon,
        color: config.color,
        title: t.pillars.items[config.id].title,
        description: t.pillars.items[config.id].description,
    }));

    return (
        <section className="py-12 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">{t.pillars.label}</span>
                <h2 className="text-3xl font-serif mt-4 text-black/90 dark:text-white">{t.pillars.title}</h2>
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
