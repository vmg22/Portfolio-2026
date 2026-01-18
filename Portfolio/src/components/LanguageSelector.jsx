import { useTranslation } from 'react-i18next';

export function LanguageSelector({ mobile = false }) {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const languages = [
        { code: 'es', label: 'ES', flag: '🇪🇸' },
        { code: 'en', label: 'EN', flag: '🇺🇸' },
        { code: 'pt', label: 'PT', flag: '🇧🇷' }
    ];

    if (mobile) {
        return (
            <div className="flex gap-4 items-center justify-center p-4 bg-accent-deep/20 rounded-xl border border-accent-light/10 mt-4">
                {languages.map((lang) => (
                    <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`px-3 py-2 rounded-lg text-sm font-bold transition-all ${
                            i18n.resolvedLanguage === lang.code 
                            ? 'bg-accent-light text-background-dark shadow-md' 
                            : 'text-off-white/60 hover:text-off-white'
                        }`}
                    >
                        {lang.label}
                    </button>
                ))}
            </div>
        )
    }

    return (
        <div className="flex items-center gap-1 bg-accent-deep/30 rounded-lg p-1 border border-accent-light/10">
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`px-2 py-1 rounded-md text-xs font-bold transition-all ${
                        i18n.resolvedLanguage === lang.code 
                        ? 'bg-accent-light text-background-dark shadow-sm' 
                        : 'text-off-white/60 hover:text-off-white hover:bg-off-white/5'
                    }`}
                >
                    {lang.label}
                </button>
            ))}
        </div>
    );
}
