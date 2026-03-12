import { useEffect, useState, useMemo } from 'react';
import { SEO } from '../components/SEO';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/FadeIn';
import { fetchSimpleIcons, renderSimpleIcon } from 'react-icon-cloud';

// Mapping project tech names to SimpleIcons slugs
const slugMap = {
  "React": "react",
  "React 19": "react",
  "Node.js": "nodedotjs",
  "MongoDB": "mongodb",
  "Cloudinary": "cloudinary",
  "Zustand": "react", // Fallback or finding specific if available, otherwise React logo is fine or generic
  "Tailwind": "tailwindcss",
  "Vercel": "vercel",
  "Express": "express",
  "Socket.io": "socketdotio",
  "MySQL": "mysql",
  "GitHub": "github",
  "Figma": "figma",
  "Bootstrap": "bootstrap",
  "JWT": "jsonwebtokens",
  "Git": "git",
  "Trello": "trello",
  "Google Maps API": "googlemaps",
  "Framer Motion": "framer",
  "WebSockets": "socketdotio",
  "SCRUM": "jira" // approximation for methodology
};

const getSlugCallback = (techName) => {
    const cleanName = techName.trim().replace(/\s*\(.*?\)\s*/g, ''); // Remove parentheses content
    // Direct match
    if (slugMap[cleanName]) return slugMap[cleanName];
    // Partial match keys
    const found = Object.keys(slugMap).find(key => cleanName.includes(key));
    if (found) return slugMap[found];
    return null;
};

export function ProjectDetail() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [dbProject, setDbProject] = useState(null);
  const [loading, setLoading] = useState(true);

  // Memoize projects list to prevent referential instability causing infinite loops
  const allProjects = useMemo(() => {
    const mobileProjects = t('data.projects_mobile', { returnObjects: true });
    const desktopProjects = t('data.projects_desktop', { returnObjects: true });
    
    return [
        ...(Array.isArray(mobileProjects) ? mobileProjects : []),
        ...(Array.isArray(desktopProjects) ? desktopProjects : [])
    ];
  }, [t, i18n.language]);

  useEffect(() => {
    setLoading(true);
    fetch('/api/projects')
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          const found = json.data.find(p => p._id === id || p.id === id);
          if (found) setDbProject(found);
        }
      })
      .catch(err => console.error('Error fetching project:', err))
      .finally(() => setLoading(false));
  }, [id]);

  const project = useMemo(() => {
    if (dbProject) return dbProject;
    return allProjects.find(p => p.id === id);
  }, [dbProject, allProjects, id]);

  const [icons, setIcons] = useState({});

  // Extract needed slugs
  const neededSlugs = useMemo(() => {
    if (!project || !project.stack_details) return [];
    const slugs = new Set();
    
    // From stack_details
    Object.values(project.stack_details).forEach(str => {
        str.split(',').forEach(tech => {
            const slug = getSlugCallback(tech);
            if (slug) slugs.add(slug);
        });
    });

    // From tags
    if (project.tags) {
        project.tags.forEach(tag => {
            const slug = getSlugCallback(tag);
            if (slug) slugs.add(slug);
        });
    }

    return Array.from(slugs);
  }, [project]);

  // Fetch icons
  useEffect(() => {
    if (neededSlugs.length > 0) {
        // Only fetch icons that we don't have yet
        const missingSlugs = neededSlugs.filter(slug => !icons[slug]);
        
        if (missingSlugs.length > 0) {
            fetchSimpleIcons({ slugs: missingSlugs }).then(({ simpleIcons }) => {
                setIcons(prev => ({ ...prev, ...simpleIcons }));
            });
        }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [neededSlugs.join(',')]);

  const renderTechWithIcon = (techString) => {
      const items = techString.split(',');
      return (
          <div className="flex flex-col gap-3">
              {items.map((item, idx) => {
                  const name = item.trim();
                  const slug = getSlugCallback(name);
                  const iconData = slug ? icons[slug] : null;
                  
                  return (
                      <div key={idx} className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5 hover:border-primary/30 transition-colors group">
                          {iconData ? (
                              <div className="w-8 h-8 flex items-center justify-center text-off-white group-hover:text-primary transition-colors">
                                   {renderSimpleIcon({
                                        icon: iconData,
                                        size: 24,
                                        minContrastRatio: 0,
                                        bgHex: "#000",
                                        fallbackHex: "#fff"
                                   })}
                              </div>
                          ) : (
                              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-xs font-bold text-off-white/50">
                                  {name.charAt(0)}
                              </div>
                          )}
                          <span className="text-off-white font-medium text-sm md:text-base">{name}</span>
                      </div>
                  );
              })}
          </div>
      );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
        <div className="min-h-screen flex items-center justify-center text-off-white bg-background-dark">
            <SEO title="Project Not Found" />
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
                <Link to="/projects" className="text-primary hover:text-accent-light">Back to Projects</Link>
            </div>
        </div>
    );
  }

  return (
    <article className="min-h-screen bg-background-dark">
      <SEO 
        title={project.title} 
        description={project.description} 
        image={project.image}
      />
      {/* 1. Immersive Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] w-full flex flex-col justify-end pb-20">
        {project.image ? (
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-60 scale-105 animate-slow-zoom" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-background-dark/90 via-transparent to-transparent"></div>
            </div>
        ) : (
             <div className="absolute inset-0 z-0 bg-zinc-900"></div>
        )}

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <FadeIn>
                <Link to="/projects" className="inline-flex items-center text-off-white/60 hover:text-primary mb-8 transition-colors group tracking-wide text-sm font-medium uppercase">
                    <span className="material-symbols-outlined text-lg mr-2 group-hover:-translate-x-1 transition-transform">arrow_back</span>
                    {t('nav.projects')}
                </Link>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-off-white mb-6 tracking-tight leading-none">
                    {project.title}
                </h1>
                
                <p className="text-xl md:text-2xl text-off-white/80 max-w-3xl font-light mb-10 leading-relaxed border-l-4 border-primary pl-6">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-4">
                    {project.repo_link && project.repo_link !== '#' && (
                        <a 
                            href={project.repo_link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-8 py-4 rounded-full bg-off-white text-bg-dark font-bold hover:bg-primary hover:text-off-white transition-all flex items-center gap-2 group"
                        >
                            <span className="material-symbols-outlined">code</span>
                            Repository
                            <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">arrow_outward</span>
                        </a>
                    )}
                    {project.demo_link && project.demo_link !== '#' && (
                        <a 
                            href={project.demo_link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-8 py-4 rounded-full bg-transparent border-2 border-off-white/20 text-off-white font-bold hover:bg-off-white/10 transition-all flex items-center gap-2"
                        >
                            <span className="material-symbols-outlined">rocket_launch</span>
                            Live Demo
                        </a>
                    )}
                </div>
            </FadeIn>
        </div>
      </section>

      {/* 2. Quick Stats Bar - REMOVED as per user request */}

      {/* 3. Main Content: Narrative */}
      {/* 3. Main Content: Narrative */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        {/* REPLACED StaggerContainer with standard div to fix scroll/layout issues */}
        <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Left Col: Narrative (Problem & Solution) */}
            <div className="lg:col-span-8 space-y-20">
                
                {/* Tech Stack Overlay tags */}
                <FadeIn delay={0.1}>
                    <div className="flex flex-wrap gap-3 mb-8">
                        {project.tags?.map((tag, idx) => {
                             const slug = getSlugCallback(tag);
                             const iconData = slug ? icons[slug] : null;
                             return (
                                <span key={idx} className="pl-3 pr-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 font-mono text-sm font-semibold tracking-wide flex items-center gap-2">
                                    {iconData && (
                                        <span className="w-4 h-4 text-primary fill-current">
                                            {renderSimpleIcon({ icon: iconData, size: 16 })}
                                        </span>
                                    )}
                                    {tag}
                                </span>
                             );
                        })}
                    </div>
                </FadeIn>

                {/* Impact Highlight */}
                {project.impact && (
                    <FadeIn delay={0.2}>
                         <div className="bg-gradient-to-br from-primary/20 to-transparent p-10 rounded-3xl border border-primary/20 relative overflow-hidden group hover:border-primary/40 transition-colors">
                            <span className="material-symbols-outlined text-8xl absolute -right-10 -bottom-10 text-primary/10 rotate-12 group-hover:scale-110 transition-transform">auto_graph</span>
                             <h3 className="text-primary font-bold tracking-widest uppercase mb-4 text-sm">Business Impact</h3>
                             <p className="text-2xl md:text-3xl font-light text-off-white leading-tight">
                                "{project.impact}"
                             </p>
                         </div>
                    </FadeIn>
                )}

                {/* The Challenge */}
                {project.challenge && (
                    <FadeIn delay={0.3}>
                        <div>
                            <h2 className="text-3xl font-bold text-off-white mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500/10 text-red-500">
                                    <span className="material-symbols-outlined text-xl">bug_report</span>
                                </span>
                                The Challenge
                            </h2>
                            <div className="prose prose-invert prose-lg max-w-none text-off-white/70">
                                <p>{project.challenge}</p>
                            </div>
                        </div>
                    </FadeIn>
                )}

                {/* The Solution */}
                {project.solution && (
                    <FadeIn delay={0.4}>
                        <div>
                            <h2 className="text-3xl font-bold text-off-white mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500">
                                    <span className="material-symbols-outlined text-xl">lightbulb</span>
                                </span>
                                Technical Solution
                            </h2>
                            <div className="prose prose-invert prose-lg max-w-none text-off-white/70">
                                <p>{project.solution}</p>
                            </div>
                        </div>
                    </FadeIn>
                )}
                
                {/* Modules / Features Grid */}
                {project.modules && (
                    <FadeIn delay={0.5}>
                        <h2 className="text-3xl font-bold text-off-white mb-8 border-b border-white/10 pb-4">Key Features & Modules</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {project.modules.map((module, i) => (
                                <div key={i} className="p-5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors flex items-center gap-4 group">
                                     <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">code_blocks</span>
                                     <span className="text-lg font-medium text-off-white">{module}</span>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                )}
            </div>

            {/* Right Col: Tech Stack Sidebar */}
            <div className="lg:col-span-4 space-y-12">
                 {/* Removed StaggerItem wrapper to fix sticky behavior and simplify */}
                 <FadeIn delay={0.6}>
                    <div className="bg-zinc-900/80 p-8 rounded-3xl border border-white/10 sticky top-32 backdrop-blur-md">
                        <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                            <span className="material-symbols-outlined text-primary">terminal</span>
                            <h3 className="text-xl font-bold text-off-white">Tech Stack</h3>
                        </div>
                        
                        <div className="space-y-8">
                            {project.stack_details ? (
                                <>
                                    {Object.entries(project.stack_details).map(([category, tools]) => (
                                        <div key={category}>
                                            <h4 className="text-xs uppercase tracking-widest text-off-white/40 mb-3 font-mono">{category}</h4>
                                            {/* Render Tools with Icons */}
                                            {renderTechWithIcon(tools)}
                                        </div>
                                    ))}
                                </>
                            ) : (
                                <div>
                                    <h4 className="text-sm uppercase tracking-wider text-off-white/40 mb-3">Core Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags?.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-white/5 rounded-lg text-sm text-off-white border border-white/10">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        
                        {/* Methodology Badge */}
                        {project.methodology && (
                            <div className="mt-8 pt-6 border-t border-white/10">
                                <h4 className="text-xs uppercase tracking-widest text-off-white/40 mb-2 font-mono">Methodology</h4>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                                    <span className="material-symbols-outlined text-base">sync_alt</span>
                                    {project.methodology}
                                </div>
                            </div>
                        )}
                    </div>
                 </FadeIn>
            </div>

        </div>
      </section>

      {/* 4. Business Value / Why Custom? Section */}
       <section className="py-24 bg-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
                <FadeIn>
                    <h2 className="text-3xl md:text-4xl font-bold text-off-white mb-6">
                        {t('project_detail.why_custom.title')}
                    </h2>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                             <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-primary">trending_up</span>
                             </div>
                             <div>
                                 <h3 className="text-xl font-bold text-off-white mb-2">{t('project_detail.why_custom.scalability_title')}</h3>
                                 <p className="text-off-white/60">{t('project_detail.why_custom.scalability_desc')}</p>
                             </div>
                        </div>
                        <div className="flex gap-4">
                             <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-emerald-500">lock</span>
                             </div>
                             <div>
                                 <h3 className="text-xl font-bold text-off-white mb-2">{t('project_detail.why_custom.ownership_title')}</h3>
                                 <p className="text-off-white/60">{t('project_detail.why_custom.ownership_desc')}</p>
                             </div>
                        </div>
                        <div className="flex gap-4">
                             <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-purple-500">hub</span>
                             </div>
                             <div>
                                 <h3 className="text-xl font-bold text-off-white mb-2">{t('project_detail.why_custom.integration_title')}</h3>
                                 <p className="text-off-white/60">{t('project_detail.why_custom.integration_desc')}</p>
                             </div>
                        </div>
                    </div>
                </FadeIn>
                
                <FadeIn delay={0.2} className="relative">
                    <div className="p-8 rounded-3xl bg-background-dark/50 border border-white/10 backdrop-blur-sm">
                        <div className="text-center mb-8">
                            <span className="material-symbols-outlined text-5xl text-off-white/20 mb-4">psychology</span>
                            <p className="text-xl text-off-white font-light italic">
                                "{t('project_detail.why_custom.quote_part1')} <span className="text-primary font-bold">{t('project_detail.why_custom.quote_part2')}</span>{t('project_detail.why_custom.quote_part3')}"
                            </p>
                        </div>
                         <div className="flex items-center justify-center gap-4 border-t border-white/5 pt-6">
                             <div className="w-12 h-12 rounded-full bg-accent-light overflow-hidden">
                                 {/* Placeholder for avatar if available, or icon */}
                                 <img src="https://github.com/vmg22.png" alt="Matias" className="w-full h-full object-cover" />
                             </div>
                             <div className="text-left">
                                 <div className="text-off-white font-bold text-sm">Matias</div>
                                 <div className="text-primary text-xs font-mono tracking-wider uppercase">Full Stack Developer</div>
                             </div>
                         </div>
                    </div>
                </FadeIn>
            </div>
      </section>

      {/* 4. Business CTA Section */}
      <section className="py-24 border-t border-white/5 bg-gradient-to-b from-background-dark to-primary/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <FadeIn>
                <div className="inline-block p-4 rounded-full bg-primary/10 mb-6">
                    <span className="material-symbols-outlined text-4xl text-primary">rocket_launch</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-off-white mb-6">
                    {t('project_detail.cta.title')}
                </h2>
                <p className="text-xl text-off-white/60 mb-10 max-w-2xl mx-auto">
                    {t('project_detail.cta.description')}
                </p>
                <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-off-white font-bold rounded-full hover:bg-accent-light hover:text-background-dark transition-all transform hover:scale-105 shadow-lg shadow-primary/25"
                >
                    {t('project_detail.cta.button')}
                    <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
            </FadeIn>
        </div>
      </section>

    </article>
  );
}
