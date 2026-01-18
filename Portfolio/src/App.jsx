function App() {
  return (
    <div className="min-h-screen bg-background-dark text-off-white selection:bg-primary/30 antialiased overflow-x-hidden">
      {/* NAVIGATION (RESPONSIVE) */}
      <nav className="fixed top-0 w-full z-50 glass-nav">
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
          <div className="hidden md:flex items-center gap-8">
            <a className="text-sm font-medium text-off-white/80 hover:text-accent-light transition-colors" href="#proyectos">Proyectos</a>
            <a className="text-sm font-medium text-off-white/80 hover:text-accent-light transition-colors" href="#servicios">Servicios</a>
            <a className="text-sm font-medium text-off-white/80 hover:text-accent-light transition-colors" href="#stack">Tecnologías</a>
            <button className="bg-primary hover:bg-primary/80 text-off-white px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20">
              Contactar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-accent-light/10 text-accent-light border border-accent-light/20">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="w-full">
        
        {/* MOBILE HERO */}
        <section className="md:hidden pt-24 px-6 pb-12 flex flex-col items-center text-center max-w-md mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-light/10 border border-accent-light/20 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-light opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-light"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-accent-light">Disponible para Proyectos</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight mb-4 text-off-white">
            Transformando <span className="text-accent-light">Lógica</span> en Experiencias Web
          </h1>
          <p className="text-accent-light/70 text-base max-w-[280px] mb-8 leading-relaxed">
            Desarrollador Universitario especializado en SaaS y herramientas internas para equipos de alto crecimiento.
          </p>
          <div className="flex flex-col w-full gap-3 px-4">
            <button className="w-full bg-accent-light text-background-dark font-bold py-4 rounded-xl shadow-lg shadow-accent-light/10 flex items-center justify-center gap-2">
              <span>Necesito una solución</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            <button className="w-full bg-accent-deep/50 text-off-white font-bold py-4 rounded-xl border border-accent-light/20">
              Ver perfil
            </button>
          </div>
        </section>

        {/* DESKTOP HERO */}
        <section className="hidden md:block relative pt-32 pb-20 overflow-hidden hero-pattern">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-deep/40 border border-primary/30 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-light opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-light"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-accent-light">Disponible para nuevos proyectos</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-8 text-off-white">
                Construyo aplicaciones web que resuelven problemas de <span className="text-primary">negocio reales</span>.
              </h1>
              <p className="text-xl text-off-white/60 mb-10 leading-relaxed max-w-2xl">
                Desarrollador de software universitario especializado en arquitectura SaaS de alto impacto, paneles de control personalizados y sistemas empresariales.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary text-off-white px-8 py-4 rounded-xl font-bold text-lg hover:translate-y-[-2px] transition-transform shadow-xl shadow-primary/25">
                  Ver Proyectos
                </button>
                <button className="bg-accent-deep/50 text-off-white border border-primary/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent-deep transition-colors">
                  Descargar CV
                </button>
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>
        </section>

        {/* MOBILE: TECH STACK SCROLL */}
        <section className="md:hidden py-4 max-w-md mx-auto">
          <h2 className="px-6 text-xs font-bold uppercase tracking-widest text-accent-light/50 mb-4">Tecnologías Principales</h2>
          <div className="flex gap-3 px-6 overflow-x-auto custom-scrollbar pb-2">
            {["React", "Next.js", "TypeScript", "PostgreSQL", "AWS"].map((tech) => (
              <div key={tech} className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-accent-deep border border-accent-light/10 px-4">
                <span className="text-accent-light font-bold">{tech}</span>
              </div>
            ))}
          </div>
        </section>

        {/* DESKTOP: PARA EMPRESAS (SERVICES TEASER) */}
        <section className="hidden md:block py-20 bg-accent-deep/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="p-8 rounded-2xl glass-card hover:bg-accent-deep/30 transition-all group">
                <div className="size-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-accent-light">trending_up</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-off-white">Para Empresas</h3>
                <p className="text-off-white/60 mb-6 leading-relaxed">
                  ¿Necesita una herramienta personalizada para optimizar operaciones? Desarrollo plataformas SaaS robustas y sistemas internos enfocados en el ROI.
                </p>
                <ul className="space-y-3 mb-8">
                  {["Arquitectura SaaS Escalable", "CRM y Dashboards Personalizados", "Integraciones de API"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-off-white/80">
                      <span className="material-symbols-outlined text-primary text-lg">check_circle</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Card 2 */}
              <div className="p-8 rounded-2xl glass-card hover:bg-accent-deep/30 transition-all group">
                <div className="size-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-accent-light">code</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-off-white">Para Reclutadores</h3>
                <p className="text-off-white/60 mb-6 leading-relaxed">
                  ¿Busca un desarrollador que entienda el código limpio? Priorizo la competencia técnica y la escalabilidad.
                </p>
                <ul className="space-y-3 mb-8">
                  {["Dominio de Stack Full-Stack Moderno", "Arquitectura Limpia", "Metodologías Ágiles"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-off-white/80">
                      <span className="material-symbols-outlined text-primary text-lg">check_circle</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* DESKTOP: SERVICIOS DETAILED */}
        <section className="hidden md:block py-24" id="servicios">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-off-white">Servicios Especializados</h2>
              <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: "cloud", title: "Desarrollo SaaS", desc: "Desarrollo integral de aplicaciones web por suscripción con seguridad multi-inquilino robusta." },
                { icon: "dashboard", title: "Paneles Personalizados", desc: "Herramientas de visualización de datos de alto rendimiento que transforman datos complejos." },
                { icon: "hub", title: "Sistemas Empresariales", desc: "Sistemas internos complejos para gestión de cadena de suministro y ERP." }
              ].map((service) => (
                <div key={service.title} className="text-center p-8">
                  <div className="size-16 mx-auto mb-6 rounded-2xl bg-accent-deep/40 etched-border flex items-center justify-center">
                    <span className="material-symbols-outlined text-accent-light text-3xl">{service.icon}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-off-white">{service.title}</h4>
                  <p className="text-off-white/60 text-sm leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MOBILE PROJECTS (Vertical List) */}
        <section className="md:hidden px-6 py-8 space-y-6 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold tracking-tight text-off-white">Proyectos Destacados</h2>
            <div className="h-[1px] flex-grow mx-4 bg-accent-light/10"></div>
          </div>
          
          <div className="project-card-mobile rounded-xl overflow-hidden flex flex-col group">
            <div className="relative h-48 bg-background-dark overflow-hidden">
              <img alt="Interfaz de Dashboard" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCy3BfQwefXosCFaBFHQBDX5_IAY_bKL_ktF4ARzwkJTevL-fUvq-MZB7ljYqQJqhx9lke61getMVyxKZH5L_9-EYdI-aQWonUGXrwZw-i920PeCmrz88m9E9wZpp8yeHQYWTfVFBdnDMArpVSbHZVpVm0QAXaHaAv3SY_AmrQ2rBXTwvB3ZD_lQOQwbHRMZuNNp7AfLb-M68RmDkhH9MK0FPMIY3-P74igHhIg51wP-FeKEucV8XztirVcFjIAjuBRLJWwu-1Q0oY"/>
              <div className="absolute top-3 left-3 px-2 py-1 rounded bg-accent-light text-[10px] font-bold text-background-dark uppercase tracking-tighter">
                Producto SaaS
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2 text-off-white">InventoryOS Pro</h3>
              <p className="text-sm text-accent-light/60 leading-relaxed mb-4">
                Sistema de gestión de inventarios en tiempo real para almacenes distribuidos con reabastecimiento predictivo.
              </p>
              <div className="flex gap-2">
                <span className="text-[10px] font-mono text-accent-light bg-accent-light/10 px-2 py-1 rounded">Next.js</span>
                <span className="text-[10px] font-mono text-accent-light bg-accent-light/10 px-2 py-1 rounded">Prisma</span>
              </div>
            </div>
          </div>

          <div className="project-card-mobile rounded-xl overflow-hidden flex flex-col group">
            <div className="relative h-48 bg-background-dark overflow-hidden">
              <img alt="Interfaz de CRM" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnYPatPtTpuKGlWa5x-dqdyBO12CTc_mx9Dat689Rnr_SYQuzTQQGADf8xZhAm83ywW1xpXnlqAIXwOiglcRE-eOxeLwcNVliX1BGQQAI8rM4W6TTKBsUjpNCMME7mFhd-Lu7MNxJPMRQBleQj-WqDwTD5H3hFtIN7qE1IqNVolUAqukrjQpx0Ajm55DNfqGg9sGM0WXsms3VBFqOhq4F_0iwWqcIfg1TR7alYdCti_h9xtMGH_YA7XyLd704kzVDxNYljFwwGKBs"/>
              <div className="absolute top-3 left-3 px-2 py-1 rounded bg-accent-light text-[10px] font-bold text-background-dark uppercase tracking-tighter">
                Herramienta Interna
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2 text-off-white">Nexus CRM</h3>
              <p className="text-sm text-accent-light/60 leading-relaxed mb-4">
                Suite de gestión de relaciones personalizada diseñada específicamente para equipos de logística universitaria.
              </p>
              <div className="flex gap-2">
                <span className="text-[10px] font-mono text-accent-light bg-accent-light/10 px-2 py-1 rounded">TypeScript</span>
                <span className="text-[10px] font-mono text-accent-light bg-accent-light/10 px-2 py-1 rounded">Redux</span>
              </div>
            </div>
          </div>
        </section>

        {/* DESKTOP PROJECTS (Grid) */}
        <section className="hidden md:block py-24 bg-accent-deep/20" id="proyectos">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-off-white">Proyectos Destacados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Featured Large Project */}
              <div className="md:col-span-2 row-span-2 group relative overflow-hidden rounded-3xl glass-card">
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent z-10"></div>
                <div className="h-[400px] w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCb1JKCVF0dVo3CKCrEWGkmJrP7cqZe84IPy74Lc6JfikJncmHFzwLO5rFyVj3ooDbe_8-UdWfEp9OW7vtdGK3JFZ1qLYrpVjWXvdd6BwjlTwkq0xYzDw6DwzVxGnFcGiEXnQpq4vZ44n8yHJaW7UE4gzp_CBXYzAxBAfeFSuE8VpXK3dk2hCWJoxCE959y_zcHY-8_Kx-nF7bP4wABQV96dctyQ4akUurmLAqfoPWiddMw6q0w92Q91dQ5bXtV9E2NjPiBQt0fZU8')"}}>
                </div>
                <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-accent-light text-xs font-bold uppercase tracking-widest mb-2 block">SaaS Full-Stack</span>
                      <h3 className="text-3xl font-bold mb-3 text-off-white">EventShare</h3>
                      <p className="text-off-white/70 max-w-md">Plataforma integral para organización de eventos corporativos, con colaboración en tiempo real y ticketing automatizado.</p>
                    </div>
                    <button className="bg-off-white text-background-dark size-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined">arrow_outward</span>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Small Project 1 */}
              <div className="group relative overflow-hidden rounded-3xl glass-card">
                <div className="p-8 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-accent-light text-xs font-bold uppercase mb-2 block">Sistema de Gestión</span>
                    <h3 className="text-xl font-bold mb-3 text-off-white">Gestión Escolar</h3>
                    <p className="text-off-white/60 text-sm">Arquitectura de datos compleja para el seguimiento del progreso estudiantil.</p>
                  </div>
                  <div className="mt-6 w-full h-32 bg-background-dark rounded-xl border border-primary/20 overflow-hidden">
                    <div className="p-4 flex flex-col gap-2">
                      <div className="h-2 w-2/3 bg-accent-deep/60 rounded-full"></div>
                      <div className="h-2 w-1/2 bg-accent-deep/60 rounded-full"></div>
                      <div className="h-8 w-full bg-primary/20 rounded mt-2 border border-primary/30"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Small Project 2 */}
              <div className="group relative overflow-hidden rounded-3xl glass-card">
                <div className="p-8 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-accent-light text-xs font-bold uppercase mb-2 block">Tecnología Industrial</span>
                    <h3 className="text-xl font-bold mb-3 text-off-white">Agro-Trazabilidad</h3>
                    <p className="text-off-white/60 text-sm">Seguimiento de cadena de suministro inspirado en blockchain.</p>
                  </div>
                  <div className="mt-6 flex gap-2">
                    <span className="px-2 py-1 bg-accent-deep/40 border border-primary/20 text-[10px] text-accent-light rounded">Node.js</span>
                    <span className="px-2 py-1 bg-accent-deep/40 border border-primary/20 text-[10px] text-accent-light rounded">PostgreSQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DESKTOP STACK GRID */}
        <section className="hidden md:block py-24" id="stack">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-md text-center md:text-left">
                <h2 className="text-3xl font-bold mb-4 text-off-white">Stack Tecnológico</h2>
                <p className="text-off-white/60">Utilizo herramientas modernas y probadas para asegurar que las aplicaciones sean rápidas, seguras y mantenibles.</p>
              </div>
              <div className="flex flex-wrap justify-center md:justify-end gap-3 max-w-xl">
                {["React.js", "Next.js", "Node.js", "PostgreSQL", "TypeScript", "Tailwind CSS", "Docker", "AWS"].map((tech) => (
                  <div key={tech} className="px-6 py-3 glass-card rounded-xl hover:border-accent-light transition-colors cursor-default group">
                    <span className="text-off-white/70 group-hover:text-accent-light font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MOBILE EXPERIENCE (Timeline) */}
        <section className="md:hidden px-6 py-8 max-w-md mx-auto">
          <h2 className="text-xs font-bold uppercase tracking-widest text-accent-light/50 mb-6">Experiencia y Educación</h2>
          <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-accent-light/10">
            <div className="relative pl-10">
              <div className="absolute left-0 top-1 size-6 rounded-full bg-background-dark border-4 border-accent-light z-10"></div>
              <div className="flex flex-col">
                <span className="text-sm text-accent-light font-bold mb-1">2021 — Presente</span>
                <h4 className="font-bold text-off-white">Ingeniería de Software</h4>
                <p className="text-xs text-accent-light/60 italic">Ciencias de la Computación</p>
              </div>
            </div>
            <div className="relative pl-10">
              <div className="absolute left-0 top-1 size-6 rounded-full bg-background-dark border-4 border-accent-deep z-10"></div>
              <div className="flex flex-col">
                <span className="text-sm text-accent-light/50 font-bold mb-1">Verano 2023</span>
                <h4 className="font-bold text-off-white">Desarrollador Web Junior</h4>
                <p className="text-xs text-accent-light/60 italic">Freelance y Pasantías</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER (Combined/Switched) */}
      {/* Mobile Footer */}
      <footer className="md:hidden px-6 pt-12 pb-24 bg-accent-deep/30 rounded-t-3xl border-t border-accent-light/10 mt-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-off-white">¿Listo para automatizar tu lógica?</h3>
          <p className="text-accent-light/60 mb-8 text-sm">
            Actualmente aceptando nuevos proyectos freelance y oportunidades de pasantías para 2024.
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
            © 2024 Portafolio del Desarrollador — Construido con Lógica
          </p>
        </div>
      </footer>

      {/* Desktop Footer */}
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
              <p className="text-off-white/40 text-sm">Construyendo software para la próxima generación de negocios.</p>
            </div>
            <div className="flex items-center gap-8">
              <a className="text-off-white/50 hover:text-off-white transition-colors flex items-center gap-1" href="#"><span className="material-symbols-outlined text-lg">link</span> LinkedIn</a>
              <a className="text-off-white/50 hover:text-off-white transition-colors flex items-center gap-1" href="#"><span className="material-symbols-outlined text-lg">terminal</span> GitHub</a>
              <a className="text-off-white/50 hover:text-off-white transition-colors flex items-center gap-1" href="#"><span className="material-symbols-outlined text-lg">mail</span> Email</a>
            </div>
            <div className="text-off-white/40 text-sm">
              © 2024 Construido con precisión.
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Floating Action Button */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <button className="size-16 rounded-full bg-accent-light text-background-dark shadow-2xl shadow-accent-light/20 flex items-center justify-center">
          <span className="material-symbols-outlined text-3xl">chat_bubble</span>
        </button>
      </div>
    </div>
  )
}

export default App
