import { useTranslation } from 'react-i18next';
import { TECH_STACK } from './constants'; // Keep constant data that doesn't need translation
import { FadeIn, StaggerContainer, StaggerItem } from './components/FadeIn';
import { useTheme } from './hooks/useTheme';
import { LanguageSelector } from './components/LanguageSelector';

function App() {
  const { theme, toggleTheme } = useTheme();
  // Destructure i18n to get current language
  const { t, i18n } = useTranslation();

  // Load data from translations with safety checks
  const servicesData = t('data.services', { returnObjects: true });
  const services = Array.isArray(servicesData) ? servicesData : [];

  const projectsMobileData = t('data.projects_mobile', { returnObjects: true });
  const projectsMobile = Array.isArray(projectsMobileData) ? projectsMobileData : [];

  const projectsDesktopData = t('data.projects_desktop', { returnObjects: true });
  const projectsDesktop = Array.isArray(projectsDesktopData) ? projectsDesktopData : [];

  const experienceData = t('data.experience', { returnObjects: true });
  const experience = Array.isArray(experienceData) ? experienceData : [];

  return (
    <div className="min-h-screen bg-background-dark text-off-white selection:bg-primary/30 antialiased overflow-x-hidden transition-colors duration-300">
      {/* NAVIGATION (RESPONSIVE) */}
      <nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo Area */}
          <div className="flex items-center gap-2">
            {/* Mobile Logo Icon */}
            <div className="md:hidden size-8 bg-accent-light rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-background-dark text-xl">terminal</span>
            </div>
            {/* Desktop Logo Icon */}
            <div className="hidden md:flex size-8 bg-primary rounded-lg items-center justify-center">
              <span className="material-symbols-outlined text-off-white text-xl">terminal</span>
            </div>
            {/* Text */}
            <span className="text-xl md:text-xl font-bold tracking-tight text-off-white hidden md:block">DevPortfolio</span>
            <span className="text-lg font-bold tracking-tight text-off-white md:hidden">PortafolioDev</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            <a className="text-sm font-medium text-off-white/80 hover:text-accent-light transition-colors" href="#proyectos">{t('nav.projects')}</a>
            <a className="text-sm font-medium text-off-white/80 hover:text-accent-light transition-colors" href="#servicios">{t('nav.services')}</a>
            <a className="text-sm font-medium text-off-white/80 hover:text-accent-light transition-colors" href="#stack">{t('nav.stack')}</a>
            
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

            <button className="bg-primary hover:bg-primary/80 text-off-white px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20 ml-2">
              {t('nav.contact')}
            </button>
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

      {/* MAIN CONTENT - Key forces remount on language change */}
      <main className="w-full" key={i18n.resolvedLanguage}>
        
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
            <button className="w-full bg-accent-light text-background-dark font-bold py-4 rounded-xl shadow-lg shadow-accent-light/10 flex items-center justify-center gap-2">
              <span>{t('hero.cta_primary_mobile')}</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            <button className="w-full bg-accent-deep/50 text-off-white font-bold py-4 rounded-xl border border-accent-light/20">
              {t('hero.cta_secondary_mobile')}
            </button>
          </FadeIn>
        </section>

        {/* DESKTOP HERO */}
        <section className="hidden md:block relative pt-32 pb-20 overflow-hidden hero-pattern">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
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
                  <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-8 text-off-white">
                    {t('hero.title_desktop_prefix')} <span className="text-primary">{t('hero.title_desktop_highlight')}</span>{t('hero.title_desktop_suffix')}
                  </h1>
                </StaggerItem>

                <StaggerItem>
                  <p className="text-xl text-off-white/60 mb-10 leading-relaxed max-w-2xl">
                    {t('hero.subtitle_desktop')}
                  </p>
                </StaggerItem>

                <StaggerItem>
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-primary text-off-white px-8 py-4 rounded-xl font-bold text-lg hover:translate-y-[-2px] transition-transform shadow-xl shadow-primary/25">
                      {t('hero.cta_primary_desktop')}
                    </button>
                    <button className="bg-accent-deep/50 text-off-white border border-primary/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent-deep transition-colors">
                      {t('hero.cta_secondary_desktop')}
                    </button>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
          
          <FadeIn delay={0.4} className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />
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

        {/* MOBILE PROJECTS (Vertical List) */}
        <section className="md:hidden px-6 py-8 space-y-6 max-w-md mx-auto">
          <FadeIn>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-bold tracking-tight text-off-white">{t('sections.projects_title')}</h2>
              <div className="h-[1px] flex-grow mx-4 bg-accent-light/10"></div>
            </div>
          </FadeIn>
          
          {projectsMobile.map((project, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="project-card-mobile rounded-xl overflow-hidden flex flex-col group">
                <div className="relative h-48 bg-background-dark overflow-hidden">
                  <img alt={`Interfaz de ${project.title}`} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src={project.image}/>
                  <div className="absolute top-3 left-3 px-2 py-1 rounded bg-accent-light text-[10px] font-bold text-background-dark uppercase tracking-tighter">
                    {project.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2 text-off-white">{project.title}</h3>
                  <p className="text-sm text-accent-light/60 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex gap-2">
                   {/* Tags are not translated, they come from JSON. Ensure JSON has them or use constant logic? 
                       In JSON I didn't put tags! I need to check this.
                       Original constants had tags. My write_to_file for JSON MISSING tags!
                       I need to fix the JSON files to include 'tags' and 'image' and 'icon' properties.
                   */}
                   {project.tags && project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-mono text-accent-light bg-accent-light/10 px-2 py-1 rounded">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </section>

        {/* DESKTOP PROJECTS (Grid) */}
        <section className="hidden md:block py-24 bg-accent-deep/20" id="proyectos">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-12 text-off-white">{t('sections.projects_title')}</h2>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Featured Large Project (Index 0) */}
              <FadeIn className="md:col-span-2 row-span-2 group relative overflow-hidden rounded-3xl glass-card">
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent z-10"></div>
                <div className="h-[400px] w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{backgroundImage: `url('${projectsDesktop[0].image}')`}}>
                </div>
                <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-accent-light text-xs font-bold uppercase tracking-widest mb-2 block">{projectsDesktop[0].category}</span>
                      <h3 className="text-3xl font-bold mb-3 text-off-white">{projectsDesktop[0].title}</h3>
                      <p className="text-off-white/70 max-w-md">{projectsDesktop[0].description}</p>
                    </div>
                    <button className="bg-off-white text-background-dark size-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined">arrow_outward</span>
                    </button>
                  </div>
                </div>
              </FadeIn>
              
              {/* Small Projects (Index 1 & 2) */}
              {projectsDesktop.slice(1).map((project, idx) => (
                <FadeIn key={idx} delay={(idx + 1) * 0.1}>
                  <div className="group relative overflow-hidden rounded-3xl glass-card h-full">
                    <div className="p-8 h-full flex flex-col justify-between">
                      <div>
                        <span className="text-accent-light text-xs font-bold uppercase mb-2 block">{project.category}</span>
                        <h3 className="text-xl font-bold mb-3 text-off-white">{project.title}</h3>
                        <p className="text-off-white/60 text-sm">{project.description}</p>
                      </div>
                      
                     {idx === 0 ? (
                        <div className="mt-6 w-full h-32 bg-background-dark rounded-xl border border-primary/20 overflow-hidden">
                          <div className="p-4 flex flex-col gap-2">
                            <div className="h-2 w-2/3 bg-accent-deep/60 rounded-full"></div>
                            <div className="h-2 w-1/2 bg-accent-deep/60 rounded-full"></div>
                            <div className="h-8 w-full bg-primary/20 rounded mt-2 border border-primary/30"></div>
                          </div>
                        </div>
                      ) : (
                        <div className="mt-6 flex gap-2">
                          {project.tags && project.tags.map(tag => (
                            <span key={tag} className="px-2 py-1 bg-accent-deep/40 border border-primary/20 text-[10px] text-accent-light rounded">{tag}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
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

        {/* MOBILE EXPERIENCE (Timeline) */}
        <section className="md:hidden px-6 py-8 max-w-md mx-auto">
          <FadeIn>
            <h2 className="text-xs font-bold uppercase tracking-widest text-accent-light/50 mb-6">{t('sections.experience_title')}</h2>
          </FadeIn>
          
          <StaggerContainer className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-accent-light/10">
            {experience.map((exp, idx) => (
              <StaggerItem key={idx} className="relative pl-10">
                <div className={`absolute left-0 top-1 size-6 rounded-full bg-background-dark border-4 ${idx === 0 ? 'border-accent-light' : 'border-accent-deep'} z-10`}></div>
                <div className="flex flex-col">
                  <span className={`text-sm ${idx === 0 ? 'text-accent-light' : 'text-accent-light/50'} font-bold mb-1`}>{exp.year}</span>
                  <h4 className="font-bold text-off-white">{exp.role}</h4>
                  <p className="text-xs text-accent-light/60 italic">{exp.context}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

      </main>

      {/* FOOTER & FAB */}
      <footer className="md:hidden px-6 pt-12 pb-24 bg-accent-deep/30 rounded-t-3xl border-t border-accent-light/10 mt-8">
        <FadeIn className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-off-white">{t('footer.cta_title')}</h3>
          <p className="text-accent-light/60 mb-8 text-sm">
            {t('footer.cta_text')}
          </p>
          <div className="flex justify-center gap-6 mb-10">
            <a className="w-12 h-12 rounded-xl bg-accent-deep flex items-center justify-center text-accent-light border border-accent-light/10" href="#">
              <span className="material-symbols-outlined">alternate_email</span>
            </a>
            <a className="w-12 h-12 rounded-xl bg-accent-deep flex items-center justify-center text-accent-light border border-accent-light/10" href="#">
              <span className="material-symbols-outlined">hub</span>
            </a>
            <a className="w-12 h-12 rounded-xl bg-accent-deep flex items-center justify-center text-accent-light border border-accent-light/10" href="#">
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
              <a className="text-off-white/50 hover:text-off-white transition-colors flex items-center gap-1" href="#"><span className="material-symbols-outlined text-lg">link</span> LinkedIn</a>
              <a className="text-off-white/50 hover:text-off-white transition-colors flex items-center gap-1" href="#"><span className="material-symbols-outlined text-lg">terminal</span> GitHub</a>
              <a className="text-off-white/50 hover:text-off-white transition-colors flex items-center gap-1" href="#"><span className="material-symbols-outlined text-lg">mail</span> Email</a>
            </div>
            <div className="text-off-white/40 text-sm">
              {t('footer.copyright_desktop')}
            </div>
          </div>
        </div>
      </footer>

      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <button className="size-16 rounded-full bg-accent-light text-background-dark shadow-2xl shadow-accent-light/20 flex items-center justify-center">
          <span className="material-symbols-outlined text-3xl">chat_bubble</span>
        </button>
      </div>
    </div>
  )
}

export default App
