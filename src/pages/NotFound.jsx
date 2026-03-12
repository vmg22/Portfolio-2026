import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FadeIn } from '../components/FadeIn';

import { SEO } from '../components/SEO';

export function NotFound() {
    const { t } = useTranslation();

    return (
        <section className="min-h-screen flex items-center justify-center bg-background-dark relative overflow-hidden px-6">
            <SEO title={t('404.title')} />
            {/* Background Abstract */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 text-center max-w-2xl mx-auto">
                <FadeIn>
                    <div className="mb-8 relative inline-block">
                        <span className="text-9xl font-black text-white/5 select-none">404</span>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="material-symbols-outlined text-6xl text-primary animate-bounce">
                                sentiment_dissatisfied
                            </span>
                        </div>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl font-bold text-off-white mb-6">
                        {t('404.title')}
                    </h1>
                    
                    <p className="text-lg text-off-white/60 mb-10 max-w-md mx-auto leading-relaxed">
                        {t('404.description')}
                    </p>

                    <Link 
                        to="/" 
                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary/80 text-off-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-primary/20 hover:-translate-y-1"
                    >
                        <span className="material-symbols-outlined">home</span>
                        {t('404.button')}
                    </Link>
                </FadeIn>
            </div>
        </section>
    );
}
