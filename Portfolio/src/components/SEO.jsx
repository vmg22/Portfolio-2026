import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export function SEO({ title, description, image = '/og-image.jpg' }) {
    const { t } = useTranslation();
    const siteTitle = "Matias Garnica | Portfolio";
    const defaultDescription = t('hero.subtitle_desktop') || "Full Stack Developer Portfolio";

    return (
        <Helmet>
            <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title ? `${title} | ${siteTitle}` : siteTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={title ? `${title} | ${siteTitle}` : siteTitle} />
            <meta property="twitter:description" content={description || defaultDescription} />
            <meta property="twitter:image" content={image} />
        </Helmet>
    );
}
