import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useTranslation } from 'react-i18next';

export function Layout() {
    const { i18n } = useTranslation();

    return (
        <div className="min-h-screen bg-background-dark text-off-white selection:bg-primary/30 antialiased transition-colors duration-300">
            <Navbar />
            
            {/* Main content forces remount on language change to ensure animations replay */}
            <main className="w-full flex-grow" key={i18n.resolvedLanguage}>
                <Outlet />
            </main>

            <Footer />

            <div className="md:hidden fixed bottom-6 right-6 z-50">
                <button className="size-16 rounded-full bg-accent-light text-background-dark shadow-2xl shadow-accent-light/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-3xl">chat_bubble</span>
                </button>
            </div>
        </div>
    );
}
