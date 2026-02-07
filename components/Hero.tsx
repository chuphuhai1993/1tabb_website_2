
import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-[85vh] flex items-center justify-center px-6 pt-20">
            <div className="max-w-6xl mx-auto text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary-dark-2)] backdrop-blur-sm mb-8">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/60">Redefining Digital Experience</span>
                </div>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-light italic leading-[0.9] text-white text-glow mb-10 tracking-tight">
                    Human-centric <br />
                    <span className="not-italic font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">Innovation.</span>
                </h1>
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 font-light leading-relaxed mb-12">
                    We craft digital ecosystems where technology dissolves into intuition, creating seamless bridges between human intent and digital action.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:-translate-y-1 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-5px_rgba(255,255,255,0.5)]">
                        Explore Ecosystem
                    </button>
                    <button className="glass-button px-8 py-4 rounded-full font-medium text-white hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group">
                        Watch the Film <span className="material-symbols-outlined text-lg">play_circle</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
