
import React from 'react';

const Footer: React.FC = () => {
    const sitemapLinks = ['Home', 'Our Vision', 'Ecosystem', 'Careers'];
    const legalLinks = ['Privacy Policy', 'Terms of Service', 'Cookie Settings'];

    return (
        <footer className="mt-12 pb-12 px-6 border-t border-white/5 pt-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-1 space-y-6">
                        <a className="font-mono text-2xl font-bold tracking-tighter text-black/50 dark:text-white flex items-center gap-2" href="#">
                            <div className="w-3 h-3 bg-primary rounded-full"></div>
                            1Tabb
                        </a>
                        <p className="text-sm text-black/50 dark:text-white/40 leading-relaxed">
                            Pioneering the next generation of mobile experiences through intelligent design and human-centric engineering.
                        </p>
                        <div className="flex gap-4">
                            <a className="w-10 h-10 rounded-full glass-button flex items-center justify-center text-black/50 dark:text-white/60 hover:text-white hover:bg-white/10 transition-all" href="#">
                                <span className="text-xs font-bold">In</span>
                            </a>
                            <a className="w-10 h-10 rounded-full glass-button flex items-center justify-center text-black/50 dark:text-white/60 hover:text-white hover:bg-white/10 transition-all" href="#">
                                <span className="text-xs font-bold">X</span>
                            </a>
                            <a className="w-10 h-10 rounded-full glass-button flex items-center justify-center text-black/50 dark:text-white/60 hover:text-white hover:bg-white/10 transition-all" href="#">
                                <span className="text-xs font-bold">Fb</span>
                            </a>
                        </div>
                    </div>
                    <div className="md:col-start-3">
                        <h5 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black/50 dark:text-white/30 mb-6">Sitemap</h5>
                        <ul className="space-y-3 text-sm text-black/50 dark:text-white/60">
                            {sitemapLinks.map(link => <li key={link}><a className="hover:text-[var(--primary)] transition-colors" href="#">{link}</a></li>)}
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black/50 dark:text-white/30 mb-6">Legal</h5>
                        <ul className="space-y-3 text-sm text-black/50 dark:text-white/60">
                            {legalLinks.map(link => <li key={link}><a className="hover:text-[var(--primary)] transition-colors" href="#">{link}</a></li>)}
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
                    <p className="font-mono text-[10px] text-black/50 dark:text-white/20 uppercase tracking-widest">© 2024 1Tabb Inc. All rights reserved.</p>
                    <p className="font-mono text-[10px] text-black/50 dark:text-white/20 uppercase tracking-widest">Designed with <span className="text-red-500/50">♥</span> 1TABB</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
