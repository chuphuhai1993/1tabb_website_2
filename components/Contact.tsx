
import React from 'react';

const Contact: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-4xl mx-auto">
            <div className="glass-panel p-8 md:p-16 border-white/10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif text-white mb-4">Let's build something extraordinary</h2>
                    <p className="text-white/50 text-sm">Partnership inquiries? We'd love to hear from you.</p>
                </div>
                <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-mono uppercase text-white/60 ml-2">Name</label>
                            <input className="w-full form-input p-4" placeholder="John Doe" type="text" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-mono uppercase text-white/60 ml-2">Email</label>
                            <input className="w-full form-input p-4" placeholder="john@company.com" type="email" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-mono uppercase text-white/60 ml-2">Message</label>
                        <textarea className="w-full form-input p-4 min-h-[120px]" placeholder="Tell us about your project..."></textarea>
                    </div>
                    <div className="pt-4 text-center">
                        <button className="primary-glow-btn px-10 py-4 rounded-full font-mono text-sm font-bold uppercase tracking-wider inline-flex items-center gap-2 group" type="button">
                            Send Request <span className="material-symbols-outlined text-lg">send</span>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
