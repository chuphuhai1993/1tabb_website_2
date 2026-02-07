
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="relative min-h-[85vh] flex items-center justify-center px-6 pt-20">
            <div className="max-w-6xl mx-auto text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-sm mb-8 shadow-[0_0_10px_var(--glass-shadow)]">
                    <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span> 
                    <span className="font-mono text-[10px] uppercase tracking-widest text-black/60 dark:text-white/60">{t.hero.label}</span>
                </div>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif italic leading-[0.9] text-black/90 dark:text-white/90 text-glow mb-10 tracking-tight transition-colors duration-300">
                    {t.hero.title.prefix} <br />
                    <span className="not-italic font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-black via-black/50 to-black dark:from-white dark:via-white/50 dark:to-white animate-gradient-x">{t.hero.title.highlight}</span>
                </h1>
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-black/60 dark:text-white/60 leading-relaxed mb-12 transition-colors duration-300">
                    {t.hero.subtitle}
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <button className="bg-black text-white dark:bg-white dark:text-black px-8 py-4 rounded-full font-medium hover:-translate-y-1 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-5px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_0_60px_-5px_rgba(255,255,255,0.5)]">
                        {t.hero.cta}
                    </button>
                    <button className="glass-button px-8 py-4 rounded-full font-medium text-black dark:text-white hover:bg-white dark:hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group">
                        {t.hero.watchFilm} <span className="material-symbols-outlined text-lg">play_circle</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
