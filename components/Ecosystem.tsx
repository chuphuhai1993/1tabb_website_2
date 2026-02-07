
import React from 'react';
import { Product } from '../types';
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

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
    <div className="glass-card p-8 rounded-[32px] flex flex-col h-full group">
        <div className="flex justify-between items-start mb-8">
            <div className="w-16 h-16 icon-glass rounded-[20px] transition-transform duration-300 flex items-center justify-center">
                {product.icon.includes('/') ? (
                    <img src={product.icon} alt={product.title} className="w-8 h-8 object-contain" />
                ) : (
                    <span className="material-symbols-outlined text-3xl text-black/90 dark:text-white">{product.icon}</span>
                )}
            </div>
            <span className={`glass-button px-3 py-1 rounded-full font-mono text-[10px] font-medium text-${product.categoryColor} border-${product.categoryColor}/20`}>
                {product.category}
            </span>
        </div>
        <h3 className={`text-xl font-bold mb-3 text-black/90 dark:text-white transition-colors`}>{product.title}</h3>
        <p className="text-black/50 dark:text-white/50 text-sm leading-relaxed mb-8 flex-grow">{product.description}</p>
        <div className="flex gap-3 mt-auto">
            <button className="w-10 h-10 rounded-full glass-button flex items-center justify-center hover:bg-white/20" title="App Store">
                <span className="material-symbols-outlined text-lg">ios</span>
            </button>
            <button className="w-10 h-10 rounded-full glass-button flex items-center justify-center hover:bg-white/20" title="Google Play">
                <span className="material-symbols-outlined text-lg">robot_2</span>
            </button>
        </div>
    </div>
);

const Ecosystem: React.FC = () => {
    const { t } = useLanguage();

    const productsConfig = [
        {
            id: 'superNeon',
            icon: icon1,
            categoryColor: '[var(--primary)]',
        },
        {
            id: 'oneZip',
            icon: icon2,
            categoryColor: 'cyan-400',
        },
        {
            id: 'collage',
            icon: icon4,
            categoryColor: 'purple-400',
        },
        {
            id: 'runTracker',
            icon: icon5,
            categoryColor: 'pink-400',
        },
        {
            id: 'pdf',
            icon: icon6,
            categoryColor: 'blue-400',
        },
        {
            id: 'arDraw',
            icon: icon8,
            categoryColor: 'emerald-400',
        },
    ] as const;

    const productsData: Product[] = productsConfig.map((config) => ({
        icon: config.icon,
        category: t.products.items[config.id].category,
        categoryColor: config.categoryColor,
        title: t.products.items[config.id].title,
        description: t.products.items[config.id].description,
    }));

    return (
        <section id="ecosystem" className="py-32 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-6">
                <div>
                    <h2 className="text-4xl md:text-5xl font-serif text-black/90 dark:text-white mb-4">{t.products.label}</h2>
                    <p className="text-black/50 dark:text-white/50 max-w-md">{t.products.description}</p>
                </div>
                <button className="glass-button px-6 py-3 rounded-full text-sm font-medium text-black/90 dark:text-white flex items-center gap-2 hover:bg-white hover:text-black transition-colors">
                    {t.products.title} <span className="material-symbols-outlined text-sm">arrow_forward</span>
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
