import { Link } from 'react-router-dom';
import { FadeIn } from './FadeIn';

export function ProjectCard({ project, index = 0 }) {
  const isLarge = project.type === 'large';
  
  return (
    <FadeIn delay={index * 0.1} className={isLarge ? "md:col-span-2 row-span-2" : ""}>
      <Link 
        to={`/projects/${project._id || project.id}`} 
        className="group relative block h-full w-full overflow-hidden rounded-3xl glass-card border border-white/10 hover:border-primary/40 transition-all duration-500 shadow-2xl hover:shadow-primary/10"
      >
        {/* Image Container */}
        <div className={`relative overflow-hidden ${isLarge ? 'h-[400px]' : 'h-64'}`}>
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent group-hover:via-background-dark/20 transition-all duration-500"></div>
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-20">
            <span className="px-3 py-1 rounded-full bg-background-dark/60 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-widest text-primary shadow-lg">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 p-8 z-20 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex justify-between items-end">
            <div className="max-w-[80%]">
              <h3 className={`font-bold mb-2 text-off-white group-hover:text-primary transition-colors duration-300 ${isLarge ? 'text-4xl' : 'text-xl'}`}>
                {project.title}
              </h3>
              <p className={`text-off-white/70 line-clamp-2 leading-relaxed transition-opacity duration-500 ${isLarge ? 'text-lg max-w-md' : 'text-sm'}`}>
                {project.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {project.tags && project.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="px-2 py-0.5 rounded-md bg-primary/20 border border-primary/30 text-[10px] font-mono text-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Float Button */}
            <div className="bg-primary text-off-white size-12 rounded-full flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-lg shadow-primary/40">
              <span className="material-symbols-outlined font-bold">arrow_outward</span>
            </div>
          </div>
        </div>
      </Link>
    </FadeIn>
  );
}
