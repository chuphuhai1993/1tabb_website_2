
import React, { useState } from 'react';
import logo from '../assets/images/1tabb_logo_primary.svg';
import SettingsModal from './SettingsModal';
import { useLanguage } from '../context/LanguageContext';

const Header: React.FC = () => {
    const { t } = useLanguage();
    const [showSettings, setShowSettings] = useState(false);

    const navLinks = [
        { label: t.header.nav.about, href: '#' },
        { label: t.header.nav.products, href: '#' },
        { label: t.header.nav.careers, href: '#' },
        { label: t.header.nav.contact, href: '#' },
    ];

    return (
        <>
            <header className="sticky top-4 z-50 px-4">
                <div className="max-w-7xl mx-auto px-6"> 
                    <div className="h-16 flex items-center justify-between glass-panel !rounded-[16px] pr-4 pl-6 border-black/10 dark:border-white/10 backdrop-blur-xl transition-all duration-300 shadow-lg dark:shadow-none">
                        <div className="flex items-center gap-12">
                            <a className="flex items-center gap-2" href="#">
                                <img src={logo} alt="1Tabb" className="h-4 w-auto" />
                            </a>
                            <nav className="hidden lg:flex gap-8 items-center">
                                {navLinks.map((link) => (
                                    <a key={link.label} className="nav-link font-mono text-xs uppercase font-medium tracking-wide text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors" href={link.href}>
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                        <div className="flex items-center gap-4">
                            <button 
                                onClick={() => setShowSettings(true)}
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-all border border-transparent hover:border-black/10 dark:hover:border-white/10"
                            >
                                <span className="material-symbols-outlined text-[20px]">settings</span>
                            </button>
                            <button className="primary-glow-btn px-5 py-2 rounded-full font-mono text-[10px] font-bold uppercase backdrop-blur-md">
                                {t.header.getStarted}
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <SettingsModal isOpen={showSettings} onClose={() => setShowSettings(false)} />
        </>
    );
};

export default Header;
