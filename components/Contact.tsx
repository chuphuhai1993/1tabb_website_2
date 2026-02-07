
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
            <div className="glass-panel p-8 md:p-16 border-white/10 shadow-lg dark:shadow-none">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif text-black/90 dark:text-white mb-4 ">{t.contact.title}</h2>
                    <p className="text-black/50 text-black/50 dark:text-white/50 text-sm">{t.contact.subtitle}</p>
                </div>
                <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-mono uppercase text-black/50 dark:text-white/60 ml-2">{t.contact.form.name}</label>
                            <input className="w-full form-input p-4" placeholder={t.contact.form.placeholders.name} type="text" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-mono uppercase text-black/50 dark:text-white/60 ml-2">{t.contact.form.email}</label>
                            <input className="w-full form-input p-4" placeholder={t.contact.form.placeholders.email} type="email" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-mono uppercase text-black/50 dark:text-white/60 ml-2">{t.contact.form.message}</label>
                        <textarea className="w-full form-input p-4 min-h-[120px]" placeholder={t.contact.form.placeholders.message}></textarea>
                    </div>
                    <div className="pt-4 text-center">
                        <button className="primary-glow-btn px-10 py-4 rounded-full font-mono text-sm font-bold uppercase tracking-wider inline-flex items-center gap-2 group" type="button">
                            {t.contact.form.submit} <span className="material-symbols-outlined text-lg">send</span>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
