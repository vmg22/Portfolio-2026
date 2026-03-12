import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/useTheme'; // Adjust path
import { LanguageSelector } from './LanguageSelector'; // Adjust path
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo Area */}
          <Link to="/" className="flex items-center gap-2 group">
            {/* Mobile Logo Icon */}
            <div className="md:hidden size-8 bg-accent-light rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-background-dark text-xl">terminal</span>
            </div>
            {/* Desktop Logo Icon */}
            <div className="hidden md:flex size-8 bg-primary rounded-lg items-center justify-center group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-off-white text-xl">terminal</span>
            </div>
            {/* Text */}
            <span className="text-xl md:text-xl font-bold tracking-tight text-off-white hidden md:block group-hover:text-primary transition-colors">Matias Garnica</span>
            <span className="text-lg font-bold tracking-tight text-off-white md:hidden">Matias G.</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link 
                to="/projects" 
                className={`text-sm font-medium transition-colors ${isActive('/projects') ? 'text-accent-light' : 'text-off-white/80 hover:text-accent-light'}`}
            >
                {t('nav.projects')}
            </Link>
            <a href="/#servicios" className="text-sm font-medium text-off-white/80 hover:text-accent-light transition-colors">{t('nav.services')}</a>
            {/* <Link to="/services" ... if we had a page. For now anchor to home or separate page? keeping anchor logic for now but pointing to home if mostly one page content still? Let's use /projects for now. */}
            
            <a href="/#stack" className="text-sm font-medium text-off-white/80 hover:text-accent-light transition-colors">{t('nav.stack')}</a>
            
            <div className="h-4 w-[1px] bg-off-white/10 mx-2"></div>

            {/* Language Selector Desktop */}
            <LanguageSelector />

            {/* Theme Toggle Desktop */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-off-white/10 transition-colors text-off-white/80 hover:text-accent-light"
              aria-label="Toggle Theme"
            >
              <span className="material-symbols-outlined text-xl">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </button>

            <Link to="/contact" className="bg-primary hover:bg-primary/80 text-off-white px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20 ml-2">
              {t('nav.contact')}
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-3">
             <LanguageSelector />

             {/* Theme Toggle Mobile */}
             <button 
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent-light/5 text-off-white/80 border border-accent-light/10"
              aria-label="Toggle Theme"
            >
              <span className="material-symbols-outlined text-xl">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent-light/10 text-accent-light border border-accent-light/20">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </nav>
  );
}
