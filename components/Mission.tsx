import React from 'react';
import CountUp from 'react-countup';
import { useLanguage } from '../context/LanguageContext';
import icon1 from '../assets/images/icon_1.png';
import icon2 from '../assets/images/icon_2.png';
import icon3 from '../assets/images/icon_3.png';
import icon4 from '../assets/images/icon_4.png';
import icon5 from '../assets/images/icon_5.png';
import icon6 from '../assets/images/icon_6.png';
import icon7 from '../assets/images/icon_7.png';
import icon8 from '../assets/images/icon_8.png';
import icon9 from '../assets/images/icon_9.png';

const Mission: React.FC = () => {
    const { t } = useLanguage();

    const stats = [
        { value: '100M+', label: t.mission.stats.users },
        { value: '15+', label: t.mission.stats.awards },
        { value: '4.9', label: t.mission.stats.rating },
    ];

    return (
        <section id="mission" className="py-32 px-6 relative">
            <div className="px-6 max-w-5xl mx-auto"> 
                <div className="glass-panel px-12 relative overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_12px_32px_rgba(0,0,0,0.25)]">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                    <div className="grid md:grid-cols-2 gap-6 items-center relative z-10">
                        <div>
                            <span className="font-mono text-[var(--primary)] text-xs uppercase tracking-[0.2em] mb-4 block">{t.mission.label}</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-black dark:text-white leading-tight mb-8 transition-colors duration-300">
                                {t.mission.title}
                            </h2>
                            <p className="text-black/60 dark:text-white/60 leading-relaxed mb-8 transition-colors duration-300">
                                {t.mission.description}
                            </p>
                            <div className="flex gap-12 border-t border-black/10 dark:border-white/10 pt-8 transition-colors duration-300">
                                {stats.map((stat) => {
                                    const match = stat.value.match(/^([\d.]+)(.*)$/);
                                    const end = match ? parseFloat(match[1]) : 0;
                                    const suffix = match ? match[2] : stat.value;
                                    const decimals = match && match[1].includes('.') ? match[1].split('.')[1].length : 0;

                                    return (
                                        <div key={stat.label}>
                                            <div className="text-3xl font-bold text-black dark:text-white mb-1 transition-colors duration-300">
                                                <CountUp
                                                    end={end}
                                                    duration={2.5}
                                                    suffix={suffix}
                                                    decimals={decimals}
                                                    enableScrollSpy
                                                    scrollSpyOnce
                                                />
                                            </div>
                                            <div className="text-xs text-black/40 dark:text-white/40 uppercase tracking-wider font-mono transition-colors duration-300">{stat.label}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center group h-[500px] overflow-hidden">
                            {/* Background Scrolling Icons */}
                            <div className="absolute inset-0 flex flex-row justify-center gap-7 pointer-events-none">
                                {/* Column 1: Up */}
                                <div className="flex flex-col h-max animate-marquee-up [animation-duration:100s!important]">
                                    <div className="flex flex-col gap-7 py-3">
                                        <img src={icon1} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon2} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon3} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon4} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon5} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon6} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon7} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon8} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon9} className="w-24 h-24 object-contain" alt="" />
                                    </div>
                                    <div className="flex flex-col gap-7 py-3">
                                        <img src={icon1} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon2} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon3} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon4} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon5} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon6} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon7} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon8} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon9} className="w-24 h-24 object-contain" alt="" />
                                    </div>
                                </div>

                                {/* Column 2: Down */}
                                <div className="flex flex-col h-max animate-marquee-down [animation-duration:100s!important]">
                                    <div className="flex flex-col gap-7 py-3">
                                        <img src={icon9} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon8} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon7} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon6} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon5} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon4} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon3} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon2} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon1} className="w-24 h-24 object-contain" alt="" />
                                    </div>
                                    <div className="flex flex-col gap-7 py-3">
                                        <img src={icon9} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon8} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon7} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon6} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon5} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon4} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon6} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon5} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon4} className="w-24 h-24 object-contain" alt="" />
                                    </div>
                                </div> 

                                {/* Column 3: Up */}
                                <div className="flex flex-col h-max animate-marquee-up [animation-duration:100s!important]">
                                    <div className="flex flex-col gap-7 py-3">
                                        <img src={icon9} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon8} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon7} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon6} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon5} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon4} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon6} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon5} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon4} className="w-24 h-24 object-contain" alt="" />
                                    </div>
                                    <div className="flex flex-col gap-7 py-3">
                                        <img src={icon9} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon8} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon7} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon6} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon5} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon4} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon6} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon5} className="w-24 h-24 object-contain" alt="" />
                                        <img src={icon4} className="w-24 h-24 object-contain" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;