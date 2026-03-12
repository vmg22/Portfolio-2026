import { useTranslation } from 'react-i18next';
import { FadeIn } from './FadeIn';
import { SOCIAL_LINKS } from '../constants'; // Import social links

export function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <footer className="md:hidden px-6 pt-12 pb-24 bg-accent-deep/30 rounded-t-3xl border-t border-accent-light/10 mt-8">
        <FadeIn className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-off-white">{t('footer.cta_title')}</h3>
          <p className="text-accent-light/60 mb-8 text-sm">
            {t('footer.cta_text')}
          </p>
          <div className="flex justify-center gap-6 mb-10">
            <a 
                className="w-12 h-12 rounded-xl bg-accent-deep flex items-center justify-center text-accent-light border border-accent-light/10 hover:bg-accent-light hover:text-background-dark transition-all" 
                href={SOCIAL_LINKS.instagram}
                target="_blank" rel="noopener noreferrer"
                aria-label="Instagram"
            >
              <span className="material-symbols-outlined">camera_alt</span> {/* Instagram doesn't have a standard material icon, camera_alt is a proxy or we use simple text/svg later if requested */}
            </a>
            <a 
                className="w-12 h-12 rounded-xl bg-accent-deep flex items-center justify-center text-accent-light border border-accent-light/10 hover:bg-accent-light hover:text-background-dark transition-all" 
                href={SOCIAL_LINKS.github}
                target="_blank" rel="noopener noreferrer"
                aria-label="GitHub"
            >
              <span className="material-symbols-outlined">terminal</span> {/* Using terminal for GitHub or code */}
            </a>
            <a 
                className="w-12 h-12 rounded-xl bg-accent-deep flex items-center justify-center text-accent-light border border-accent-light/10 hover:bg-accent-light hover:text-background-dark transition-all" 
                href={SOCIAL_LINKS.linkedin}
                target="_blank" rel="noopener noreferrer"
                aria-label="LinkedIn"
            >
              <span className="material-symbols-outlined">person</span>
            </a>
          </div>
          <p className="text-[10px] text-accent-light/40 uppercase tracking-widest font-bold">
            {t('footer.copyright_mobile')}
          </p>
        </FadeIn>
      </footer>

      <footer className="hidden md:block py-12 border-t border-accent-deep/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="size-6 bg-primary rounded flex items-center justify-center">
                  <span className="material-symbols-outlined text-off-white text-sm">terminal</span>
                </div>
                <span className="font-bold tracking-tight text-off-white">DevPortfolio</span>
              </div>
              <p className="text-off-white/40 text-sm">{t('footer.description_desktop')}</p>
            </div>
            <div className="flex items-center gap-8">
              <a 
                className="text-off-white/50 hover:text-off-white transition-colors flex items-center gap-1" 
                href={SOCIAL_LINKS.linkedin}
                target="_blank" rel="noopener noreferrer"
              >
                  <span className="material-symbols-outlined text-lg">person</span> LinkedIn {/* Using person for LinkedIn as generic */}
              </a>
              <a 
                className="text-off-white/50 hover:text-off-white transition-colors flex items-center gap-1" 
                href={SOCIAL_LINKS.github}
                target="_blank" rel="noopener noreferrer"
              >
                  <span className="material-symbols-outlined text-lg">terminal</span> GitHub
              </a>
              <a 
                className="text-off-white/50 hover:text-off-white transition-colors flex items-center gap-1" 
                href={SOCIAL_LINKS.instagram}
                target="_blank" rel="noopener noreferrer"
              >
                  <span className="material-symbols-outlined text-lg">camera_alt</span> Instagram
              </a>
            </div>
            <div className="text-off-white/40 text-sm">
              {t('footer.copyright_desktop')}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
