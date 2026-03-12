import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { TECH_STACK } from '../constants';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/FadeIn';
import { TechCarousel } from '../components/TechCarousel';
import { ProjectCard } from '../components/ProjectCard';

import { SEO } from '../components/SEO';

export function Home() {
    const { t } = useTranslation();
    const [dbProjects, setDbProjects] = useState([]);

    useEffect(() => {
        fetch('/api/projects')
            .then(res => res.json())
            .then(json => {
                if (json.success) setDbProjects(json.data);
            })
            .catch(err => console.error('Error fetching projects:', err));
    }, []);

    const servicesData = t('data.services', { returnObjects: true });
    const services = Array.isArray(servicesData) ? servicesData : [];
    
    const projectsToDisplay = dbProjects.length > 0 
        ? dbProjects 
        : t('data.projects_desktop', { returnObjects: true });
  
    return (
        <>
        <SEO 
            title={t('hero.title_mobile_prefix') + " " + t('hero.title_mobile_highlight')} 
            description={t('hero.subtitle_desktop')}
        />
        {/* MOBILE HERO */}
        <section className="md:hidden pt-24 px-6 pb-12 flex flex-col items-center text-center max-w-md mx-auto">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-light/10 border border-accent-light/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-light opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-light"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-accent-light">{t('hero.status')}</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-4xl font-bold leading-tight tracking-tight mb-4 text-off-white">
              {t('hero.title_mobile_prefix')} <span className="text-accent-light">{t('hero.title_mobile_highlight')}</span> {t('hero.title_mobile_suffix')}
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-accent-light/70 text-base max-w-[280px] mb-8 leading-relaxed">
              {t('hero.subtitle_mobile')}
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="flex flex-col w-full gap-3 px-4">
            <Link to="/projects" className="w-full bg-accent-light text-background-dark font-bold py-4 rounded-xl shadow-lg shadow-accent-light/10 flex items-center justify-center gap-2">
              <span>{t('hero.cta_primary_mobile')}</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
            <a href="/assets/cv.pdf" download="Matias_Garnica_CV.pdf" className="w-full bg-accent-deep/50 text-off-white font-bold py-4 rounded-xl border border-accent-light/20 flex items-center justify-center">
              {t('hero.cta_secondary_mobile')}
            </a>
          </FadeIn>
        </section>

        {/* DESKTOP HERO */}
        <section className="hidden md:block relative pt-32 pb-20 overflow-hidden hero-pattern">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column: Text */}
                <div className="max-w-2xl">
                <StaggerContainer>
                    <StaggerItem>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-deep/40 border border-primary/30 mb-6">
                        <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-light opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-light"></span>
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-accent-light">{t('hero.status_desktop')}</span>
                    </div>
                    </StaggerItem>

                    <StaggerItem>
                    <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8 text-off-white">
                        {t('hero.title_desktop_prefix')} <span className="text-primary">{t('hero.title_desktop_highlight')}</span>{t('hero.title_desktop_suffix')}
                    </h1>
                    </StaggerItem>

                    <StaggerItem>
                    <p className="text-xl text-off-white/60 mb-10 leading-relaxed max-w-lg">
                        {t('hero.subtitle_desktop')}
                    </p>
                    </StaggerItem>

                    <StaggerItem>
                    <div className="flex flex-wrap gap-4">
                        <Link to="/projects" className="bg-primary text-off-white px-8 py-4 rounded-xl font-bold text-lg hover:translate-y-[-2px] transition-transform shadow-xl shadow-primary/25">
                        {t('hero.cta_primary_desktop')}
                        </Link>
                        <a href="/assets/cv.pdf" download="Matias_Garnica_CV.pdf" className="bg-accent-deep/50 text-off-white border border-primary/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent-deep transition-colors">
                        {t('hero.cta_secondary_desktop')}
                        </a>
                    </div>
                    </StaggerItem>
                </StaggerContainer>
                </div>

                {/* Right Column: Tech Carousel */}
                <div className="relative h-[400px] w-full flex items-center justify-center">
                     {/* Glow Effect behind carousel */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-[80px] -z-10"></div>
                    <TechCarousel />
                </div>
            </div>
          </div>
        </section>

        {/* MOBILE: TECH STACK SCROLL */}
        <section className="md:hidden py-4 max-w-md mx-auto">
          <FadeIn>
            <h2 className="px-6 text-xs font-bold uppercase tracking-widest text-accent-light/50 mb-4">{t('sections.tech_stack_title_mobile')}</h2>
            <div className="flex gap-3 px-6 overflow-x-auto custom-scrollbar pb-2">
              {TECH_STACK.slice(0, 5).map((tech) => (
                <div key={`mobile-stack-${tech}`} className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-accent-deep border border-accent-light/10 px-4">
                  <span className="text-accent-light font-bold">{tech}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* DESKTOP: PARA EMPRESAS (SERVICES TEASER) */}
        <section className="hidden md:block py-20 bg-accent-deep/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <FadeIn delay={0.1}>
                <div className="p-8 rounded-2xl glass-card hover:bg-accent-deep/30 transition-all group h-full">
                  <div className="size-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-accent-light">trending_up</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-off-white">{t('sections.services_business_title')}</h3>
                  <p className="text-off-white/60 mb-6 leading-relaxed">
                    {t('sections.services_business_desc')}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {t('sections.services_business_list', { returnObjects: true }).map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-off-white/80">
                        <span className="material-symbols-outlined text-primary text-lg">check_circle</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
              {/* Card 2 */}
              <FadeIn delay={0.2}>
                <div className="p-8 rounded-2xl glass-card hover:bg-accent-deep/30 transition-all group h-full">
                  <div className="size-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-accent-light">code</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-off-white">{t('sections.services_recruiters_title')}</h3>
                  <p className="text-off-white/60 mb-6 leading-relaxed">
                    {t('sections.services_recruiters_desc')}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {t('sections.services_recruiters_list', { returnObjects: true }).map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-off-white/80">
                        <span className="material-symbols-outlined text-primary text-lg">check_circle</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* DESKTOP: SERVICIOS DETAILED */}
        <section className="hidden md:block py-24" id="servicios">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4 text-off-white">{t('sections.services_specialized_title')}</h2>
                <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
              </div>
            </FadeIn>
            
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <StaggerItem key={service.title} className="text-center p-8">
                    <div className="size-16 mx-auto mb-6 rounded-2xl bg-accent-deep/40 etched-border flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-accent-light text-3xl">{service.icon}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-off-white">{service.title}</h4>
                  <p className="text-off-white/60 text-sm leading-relaxed">{service.description}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION SECTION */}
        <section className="py-24 bg-accent-deep/20" id="resume">
          <div className="max-w-4xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4 text-off-white">{t('sections.experience_title')}</h2>
                <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
              </div>
            </FadeIn>

            <div className="relative border-l border-off-white/10 ml-3 md:ml-6 space-y-12">
              {t('data.experience', { returnObjects: true }).map((exp, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="relative pl-8 md:pl-12 group">
                    {/* Dot */}
                    <div className="absolute -left-[5px] top-2 size-3 rounded-full bg-primary shadow-[0_0_12px_rgba(var(--primary-rgb),0.5)] group-hover:scale-125 transition-transform"></div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-bold text-off-white">{exp.role}</h3>
                      <span className="text-xs font-bold uppercase tracking-wider text-accent-light bg-accent-light/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0 border border-accent-light/20">
                        {exp.year}
                      </span>
                    </div>
                    <p className="text-lg text-off-white/80 mb-2 font-medium">{exp.context}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* DISPONIBLE DESKTOP/MOBILE: PROYECTOS DESTACADOS */}
        <section className="py-24 px-6 max-w-7xl mx-auto" id="proyectos">
          <FadeIn>
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-off-white">{t('sections.projects_title')}</h2>
              <Link to="/projects" className="text-primary hover:text-accent-light font-bold flex items-center gap-2 transition-colors">
                <span>Ver todos</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsToDisplay.slice(0, 3).map((project, idx) => (
              <ProjectCard key={project._id || project.id} project={project} index={idx} />
            ))}
          </div>
        </section>

        {/* DESKTOP STACK GRID */}

        <section className="hidden md:block py-24" id="stack">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <FadeIn className="max-w-md text-center md:text-left">
                <h2 className="text-3xl font-bold mb-4 text-off-white">{t('sections.tech_stack_title_desktop')}</h2>
                <p className="text-off-white/60">{t('sections.tech_stack_subtitle_desktop')}</p>
              </FadeIn>
              
              <StaggerContainer className="flex flex-wrap justify-center md:justify-end gap-3 max-w-xl">
                {TECH_STACK.map((tech) => (
                  <StaggerItem key={tech} className="px-6 py-3 glass-card rounded-xl hover:border-accent-light transition-colors cursor-default group">
                    <span className="text-off-white/70 group-hover:text-accent-light font-medium">{tech}</span>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>
        </>
    );
}
