
import React from 'react';
import { Product } from '../types';

const productsData: Product[] = [
    {
        icon: 'cleaning_services',
        category: 'UTILITY',
        categoryColor: 'primary',
        title: 'CleanMaster Pro',
        description: 'Smart device optimization that learns your usage patterns to keep performance peak.',
    },
    {
        icon: 'sports_esports',
        category: 'GAMING',
        categoryColor: 'cyan-400',
        title: 'Pixel Quest',
        description: 'Immersive retro-style adventure with touch-optimized combat mechanics.',
    },
    {
        icon: 'photo_camera',
        category: 'CREATIVE',
        categoryColor: 'purple-400',
        title: 'Vibe Lens',
        description: 'AI-powered artistic photo editor that transforms moments into masterpieces.',
    },
    {
        icon: 'favorite',
        category: 'HEALTH',
        categoryColor: 'pink-400',
        title: 'Zen Pulse',
        description: 'Mental health and heart rate monitoring with deep biometric analysis.',
    },
    {
        icon: 'translate',
        category: 'EDUCATION',
        categoryColor: 'blue-400',
        title: 'Lingo Flow',
        description: 'Learn languages naturally through real conversations with AI voice assistants.',
    },
    {
        icon: 'finance',
        category: 'FINANCE',
        categoryColor: 'emerald-400',
        title: 'Wallet Wiz',
        description: 'Intelligent personal finance management with automated categorization.',
    },
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
    <div className="glass-card p-8 rounded-[32px] flex flex-col h-full group">
        <div className="flex justify-between items-start mb-8">
            <div className="w-16 h-16 icon-glass rounded-[20px] transition-transform duration-300">
                <span className="material-symbols-outlined text-3xl text-white">{product.icon}</span>
            </div>
            <span className={`glass-button px-3 py-1 rounded-full font-mono text-[10px] font-medium text-${product.categoryColor} border-${product.categoryColor}/20`}>
                {product.category}
            </span>
        </div>
        <h3 className={`text-xl font-bold mb-3 text-white transition-colors`}>{product.title}</h3>
        <p className="text-white/50 text-sm leading-relaxed mb-8 flex-grow">{product.description}</p>
        <div className="flex gap-3 mt-auto">
            <button className="w-10 h-10 rounded-full glass-button flex items-center justify-center hover:text-white hover:bg-white/20" title="App Store">
                <span className="material-symbols-outlined text-lg">ios</span>
            </button>
            <button className="w-10 h-10 rounded-full glass-button flex items-center justify-center hover:text-white hover:bg-white/20" title="Google Play">
                <span className="material-symbols-outlined text-lg">robot_2</span>
            </button>
        </div>
    </div>
);

const Ecosystem: React.FC = () => {
    return (
        <section className="py-32 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-6">
                <div>
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Product Ecosystem</h2>
                    <p className="text-white/50 max-w-md">A suite of interconnected applications designed to elevate your daily digital interactions.</p>
                </div>
                <button className="glass-button px-6 py-3 rounded-full text-sm font-medium text-white flex items-center gap-2 hover:bg-white hover:text-black transition-colors">
                    View All Apps <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {productsData.map((product) => (
                    <ProductCard key={product.title} product={product} />
                ))}
            </div>
        </section>
    );
};

export default Ecosystem;
