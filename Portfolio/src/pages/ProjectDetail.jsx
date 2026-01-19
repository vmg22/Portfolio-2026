import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/FadeIn';

export function ProjectDetail() {
  const { id } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Combine projects from both lists to find the matching one
  const mobileProjects = t('data.projects_mobile', { returnObjects: true });
  const desktopProjects = t('data.projects_desktop', { returnObjects: true });
  
  const allProjects = [
    ...(Array.isArray(mobileProjects) ? mobileProjects : []),
    ...(Array.isArray(desktopProjects) ? desktopProjects : [])
  ];

  const project = allProjects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!project) {
        // Optional: Redirect to projects if id not found
        // navigate('/projects');
    }
  }, [id, project, navigate]);

  if (!project) {
    return (
        <div className="min-h-screen flex items-center justify-center text-off-white">
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
                <Link to="/projects" className="text-primary hover:text-accent-light">Back to Projects</Link>
            </div>
        </div>
    );
  }

  return (
    <article className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden flex items-end pb-12">
        {project.image ? (
            <div className="absolute inset-0 z-0">
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent"></div>
            </div>
        ) : (
             <div className="absolute inset-0 z-0 bg-accent-deep/20">
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent"></div>
             </div>
        )}

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <FadeIn>
                <Link to="/projects" className="inline-flex items-center text-accent-light/60 hover:text-accent-light mb-6 transition-colors group">
                    <span className="material-symbols-outlined text-lg mr-1 group-hover:-translate-x-1 transition-transform">arrow_back</span>
                    {t('nav.projects')}
                </Link>
                <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold tracking-wider uppercase border border-primary/10">
                        {project.category}
                    </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-off-white mb-6 max-w-4xl">
                    {project.title}
                </h1>
                <div className="flex flex-wrap gap-4">
                    {project.repo_link && project.repo_link !== '#' && (
                        <a 
                            href={project.repo_link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-xl bg-background-light/50 hover:bg-off-white hover:text-background-dark text-off-white font-bold transition-all border border-off-white/10 flex items-center gap-2"
                        >
                            <span className="material-symbols-outlined">code</span>
                            Repository
                        </a>
                    )}
                    {project.demo_link && project.demo_link !== '#' && (
                        <a 
                            href={project.demo_link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-xl bg-primary hover:bg-primary/80 text-off-white font-bold transition-all shadow-lg shadow-primary/20 flex items-center gap-2"
                        >
                            <span className="material-symbols-outlined">rocket_launch</span>
                            Live Demo
                        </a>
                    )}
                </div>
            </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <StaggerContainer className="space-y-16">
            
            {/* Context / Description */}
            <StaggerItem>
                <h2 className="text-2xl font-bold text-off-white mb-4 border-l-4 border-primary pl-4">Overview</h2>
                <p className="text-lg text-off-white/80 leading-relaxed">
                    {project.description}
                </p>
            </StaggerItem>

            {/* The Challenge */}
            {project.challenge && (
                <StaggerItem>
                    <div className="bg-accent-deep/10 p-8 rounded-3xl border border-accent-light/5">
                        <h2 className="text-2xl font-bold text-off-white mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-red-400">warning</span>
                            The Challenge
                        </h2>
                        <p className="text-off-white/80 leading-relaxed">
                            {project.challenge}
                        </p>
                    </div>
                </StaggerItem>
            )}

            {/* The Solution */}
            {project.solution && (
                <StaggerItem>
                     <div className="bg-accent-deep/10 p-8 rounded-3xl border border-accent-light/5">
                        <h2 className="text-2xl font-bold text-off-white mb-4 flex items-center gap-2">
                             <span className="material-symbols-outlined text-green-400">check_circle</span>
                            The Solution
                        </h2>
                        <p className="text-off-white/80 leading-relaxed">
                            {project.solution}
                        </p>
                    </div>
                </StaggerItem>
            )}

            {/* Tech Stack */}
            {project.tags && project.tags.length > 0 && (
                <StaggerItem>
                    <h2 className="text-xl font-bold text-off-white mb-6">Technologies Used</h2>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                            <span key={tag} className="px-4 py-2 rounded-lg bg-background-light text-off-white/70 text-sm font-medium border border-off-white/5">
                                {tag}
                            </span>
                        ))}
                    </div>
                </StaggerItem>
            )}

        </StaggerContainer>
      </section>
    </article>
  );
}
