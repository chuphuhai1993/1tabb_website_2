
import React from 'react';
import { Job } from '../types';

const jobsData: Job[] = [
    {
        icon: 'code',
        title: 'Senior Frontend Engineer',
        details: 'Remote • Full-time',
        color: 'primary',
    },
    {
        icon: 'brush',
        title: 'Product Designer (UI/UX)',
        details: 'Hanoi • Hybrid',
        color: 'purple-400',
    },
    {
        icon: 'analytics',
        title: 'Growth Manager',
        details: 'Remote • Contract',
        color: 'cyan-400',
    },
];

const JobListing: React.FC<{ job: Job }> = ({ job }) => (
    <div className="glass-card !rounded-[24px] p-4 flex items-center gap-4 hover:bg-white/5 transition-colors cursor-pointer group">
        <div className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 group-hover:text-${job.color} group-hover:bg-${job.color}/10 transition-all`}>
            <span className="material-symbols-outlined text-lg">{job.icon}</span>
        </div>
        <div>
            <h4 className="text-white font-medium text-sm">{job.title}</h4>
            <p className="text-white/40 text-xs">{job.details}</p>
        </div>
        <span className="material-symbols-outlined text-white/20 text-sm ml-auto group-hover:text-white transition-colors">arrow_forward</span>
    </div>
);

const Careers: React.FC = () => {
    return (
        <section className="py-32 px-6 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
                <div>
                    <span className="font-mono text-primary text-xs uppercase tracking-[0.2em] mb-4 block">Careers</span>
                    <h2 className="text-5xl font-serif text-white mb-6">Join Our Journey</h2>
                    <p className="text-white/60 mb-8 leading-relaxed max-w-md">
                        We are looking for visionaries, craftsmen, and dreamers who want to shape the future of digital interaction.
                    </p>
                    <div className="space-y-4 mb-8">
                        {jobsData.map((job) => (
                            <JobListing key={job.title} job={job} />
                        ))}
                    </div>
                    <a className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-wider hover:underline underline-offset-4" href="#">
                        View all openings <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                </div>
                <div className="relative">
                    <div className="glass-card p-8 rounded-[32px] h-full relative overflow-hidden flex flex-col justify-end min-h-[400px]">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                        <div className="absolute inset-0 bg-[url('https://picsum.photos/800/600?grayscale')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="relative z-20">
                            <h3 className="text-2xl font-bold text-white mb-2">Culture at 1Tabb</h3>
                            <p className="text-white/70 text-sm mb-6">"We build for people, with people. Our culture is defined by autonomy, mastery, and purpose."</p>
                            <div className="flex gap-2">
                                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] text-white/80">#RemoteFirst</span>
                                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] text-white/80">#Innovation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Careers;
