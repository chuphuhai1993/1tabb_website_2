import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../context/translations';
import enIcon from '../assets/images/en.png';
import viIcon from '../assets/images/vi.png';

interface SettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
    const { theme, setTheme } = useTheme();
    const { language, setLanguage, t } = useLanguage();

    if (!isOpen) return null;

    const languages: { id: Language; label: string; icon: string }[] = [
        { id: 'en', label: 'English', icon: enIcon },
        { id: 'vi', label: 'Tiếng Việt', icon: viIcon },
    ];

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div 
                className="absolute inset-0  bg-white/60 dark:bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>
            <div className="relative w-full max-w-md bg-white dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 rounded-[32px] p-8 shadow-2xl transition-colors duration-300">
                {/* Drag handle */}
                <div className="w-12 h-1 bg-black/10 dark:bg-white/10 rounded-full mx-auto mb-8"></div>

                <div className="text-center mb-8">
                    <h2 className="text-3xl font-serif text-black dark:text-white mb-2">{t.settings.title}</h2>
                    <p className="text-black/60 dark:text-white/40 text-sm">{t.settings.subtitle}</p>
                </div>

                <div className="space-y-6">
                    {/* Appearance */}
                    <div>
                        <h3 className="text-xs font-mono font-bold text-black/40 dark:text-white/40 uppercase tracking-widest mb-4">{t.settings.appearance}</h3>
                        <div className="grid grid-cols-3 gap-3">
                            <button 
                                onClick={() => setTheme('light')}
                                className={`flex flex-col items-center justify-center gap-3 p-4 rounded-2xl border transition-all ${
                                    theme === 'light' 
                                    ? 'bg-primary/10 border-[var(--primary)] text-black dark:text-white' 
                                    : 'bg-black/5 dark:bg-white/5 border-transparent text-black/40 dark:text-white/40 hover:bg-black/10 dark:hover:bg-white/10'
                                }`}
                            >
                                <span className="material-symbols-outlined">light_mode</span>
                                <span className="text-xs font-medium">{t.settings.themes.light}</span>
                            </button>
                            <button 
                                onClick={() => setTheme('dark')}
                                className={`flex flex-col items-center justify-center gap-3 p-4 rounded-2xl border transition-all ${
                                    theme === 'dark' 
                                    ? 'bg-primary/10 border-primary text-black dark:text-white shadow-[0_0_15px_rgba(212,255,91,0.1)]' 
                                    : 'bg-black/5 dark:bg-white/5 border-transparent text-black/40 dark:text-white/40 hover:bg-black/10 dark:hover:bg-white/10'
                                }`}
                            >
                                <span className="material-symbols-outlined">dark_mode</span>
                                <span className="text-xs font-medium">{t.settings.themes.dark}</span>
                            </button>
                            <button 
                                onClick={() => setTheme('system')}
                                className={`flex flex-col items-center justify-center gap-3 p-4 rounded-2xl border transition-all ${
                                    theme === 'system' 
                                    ? 'bg-primary/10 border-[var(--primary)] text-black dark:text-white' 
                                    : 'bg-black/5 dark:bg-white/5 border-transparent text-black/40 dark:text-white/40 hover:bg-black/10 dark:hover:bg-white/10'
                                }`}
                            >
                                <span className="material-symbols-outlined">settings_brightness</span>
                                <span className="text-xs font-medium">{t.settings.themes.system}</span>
                            </button>
                        </div>
                    </div>

                    {/* Language */}
                    <div>
                        <h3 className="text-xs font-mono font-bold text-black/40 dark:text-white/40 uppercase tracking-widest mb-4">{t.settings.language}</h3>
                        <div className="flex flex-wrap gap-3">
                            {languages.map((lang) => (
                                <button
                                    key={lang.id}
                                    onClick={() => setLanguage(lang.id)}
                                    className={`px-4 py-2.5 rounded-xl border text-sm transition-all flex items-center gap-2 ${
                                        language === lang.id
                                        ? 'bg-black/10 dark:bg-white/10 border-black dark:border-white text-black dark:text-white'
                                        : 'bg-black/5 dark:bg-white/5 border-transparent text-black/40 dark:text-white/40 hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-white'
                                    }`}
                                >
                                    <img src={lang.icon} alt={lang.label} className="w-5 h-5 object-contain" />
                                    {lang.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-10 space-y-4">
                    <button 
                        onClick={onClose}
                        className="w-full bg-[var(--primary)] text-[var(--bg-primary)] font-bold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(212,255,91,0.4)] transition-all tracking-wide text-sm"
                    >
                        {t.settings.save}
                    </button>
                    <button 
                        onClick={onClose}
                        className="w-full text-black/20 dark:text-white/20 hover:text-black dark:hover:text-white transition-colors text-sm"
                    >
                        {t.settings.skip}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SettingsModal;