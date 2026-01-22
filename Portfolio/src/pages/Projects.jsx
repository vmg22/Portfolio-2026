import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FadeIn } from '../components/FadeIn';

import { SEO } from '../components/SEO';

export function Projects() {
  const { t } = useTranslation();
  
  const projectsMobileData = t('data.projects_mobile', { returnObjects: true });
  const projectsMobile = Array.isArray(projectsMobileData) ? projectsMobileData : [];

  const projectsDesktopData = t('data.projects_desktop', { returnObjects: true });
  const projectsDesktop = Array.isArray(projectsDesktopData) ? projectsDesktopData : [];

  return (
    <>
      <SEO 
        title={t('sections.projects_title')} 
        description="Explora mis proyectos y casos de estudio como desarrollador Full Stack."
      />
        {/* MOBILE PROJECTS (Vertical List) */}
        <section className="md:hidden px-6 py-8 space-y-6 max-w-md mx-auto pt-20">
          <FadeIn>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-bold tracking-tight text-off-white">{t('sections.projects_title')}</h2>
              <div className="h-[1px] flex-grow mx-4 bg-accent-light/10"></div>
            </div>
          </FadeIn>
          
          {projectsMobile.map((project, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <Link to={`/projects/${project.id}`} className="project-card-mobile rounded-xl overflow-hidden flex flex-col group cursor-pointer">
                <div className="relative h-48 bg-background-dark overflow-hidden">
                  <img alt={`Interfaz de ${project.title}`} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src={project.image}/>
                  <div className="absolute top-3 left-3 px-2 py-1 rounded bg-accent-light text-[10px] font-bold text-background-dark uppercase tracking-tighter">
                    {project.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2 text-off-white group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-accent-light/60 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex gap-2">
                   {project.tags && project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-mono text-accent-light bg-accent-light/10 px-2 py-1 rounded">{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </section>

        {/* DESKTOP PROJECTS (Grid) */}
        <section className="hidden md:block py-24 bg-accent-deep/20 min-h-screen" id="proyectos">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-12 text-off-white">{t('sections.projects_title')}</h2>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Featured Large Project (Index 0) */}
              <FadeIn className="md:col-span-2 row-span-2 group relative overflow-hidden rounded-3xl glass-card">
                <Link to={`/projects/${projectsDesktop[0].id}`} className="block h-full w-full cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent z-10"></div>
                    <div className="h-[400px] w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{backgroundImage: `url('${projectsDesktop[0].image}')`}}>
                    </div>
                    <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                    <div className="flex justify-between items-end">
                        <div>
                        <span className="text-accent-light text-xs font-bold uppercase tracking-widest mb-2 block">{projectsDesktop[0].category}</span>
                        <h3 className="text-3xl font-bold mb-3 text-off-white group-hover:text-primary transition-colors">{projectsDesktop[0].title}</h3>
                        <p className="text-off-white/70 max-w-md">{projectsDesktop[0].description}</p>
                        </div>
                        <button className="bg-off-white text-background-dark size-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined">arrow_outward</span>
                        </button>
                    </div>
                    </div>
                </Link>
              </FadeIn>
              
              {/* Small Projects (Index 1 & 2) */}
              {projectsDesktop.slice(1).map((project, idx) => (
                <FadeIn key={idx} delay={(idx + 1) * 0.1}>
                  <Link to={`/projects/${project.id}`} className="group relative overflow-hidden rounded-3xl glass-card h-full block cursor-pointer">
                    <div className="p-8 h-full flex flex-col justify-between">
                      <div>
                        <span className="text-accent-light text-xs font-bold uppercase mb-2 block">{project.category}</span>
                        <h3 className="text-xl font-bold mb-3 text-off-white group-hover:text-primary transition-colors">{project.title}</h3>
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
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
    </>
  );
}
