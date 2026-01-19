export interface Project {
    title: string;
    category: string;
    description: string;
    image: string;
    tags: string[];
    link?: string;
    type?: 'large' | 'small'; // Helper for grid layout
}

export interface Service {
    icon: string;
    title: string;
    description: string;
}

export interface Experience {
    year: string;
    role: string;
    context: string;
    type: 'academic' | 'professional';
}

export const SOCIAL_LINKS = {
    github: "https://github.com/vmg22", // Defaulted to user's known username from git remote if possible, or placeholder
    linkedin: "https://www.linkedin.com/in/matias-garnica22",
    instagram: "https://www.instagram.com/developer.tuc/",
    email: "mailto:devtuc25@gmail.com",
    secondary_email: "mailto:Victor.GarnicaCampero@alu.frt.utn.edu.ar"
};

export const TECH_STACK = [
    "React.js",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "TypeScript",
    "Tailwind CSS",
    "Docker",
    "AWS"
];

export const SERVICES: Service[] = [
    {
        icon: "cloud",
        title: "Desarrollo SaaS",
        description: "Desarrollo integral de aplicaciones web por suscripción con seguridad multi-inquilino robusta."
    },
    {
        icon: "dashboard",
        title: "Paneles Personalizados",
        description: "Herramientas de visualización de datos de alto rendimiento que transforman datos complejos."
    },
    {
        icon: "hub",
        title: "Sistemas Empresariales",
        description: "Sistemas internos complejos para gestión de cadena de suministro y ERP."
    }
];

export const PROJECTS_MOBILE: Project[] = [
    {
        title: "InventoryOS Pro",
        category: "Producto SaaS",
        description: "Sistema de gestión de inventarios en tiempo real para almacenes distribuidos con reabastecimiento predictivo.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCy3BfQwefXosCFaBFHQBDX5_IAY_bKL_ktF4ARzwkJTevL-fUvq-MZB7ljYqQJqhx9lke61getMVyxKZH5L_9-EYdI-aQWonUGXrwZw-i920PeCmrz88m9E9wZpp8yeHQYWTfVFBdnDMArpVSbHZVpVm0QAXaHaAv3SY_AmrQ2rBXTwvB3ZD_lQOQwbHRMZuNNp7AfLb-M68RmDkhH9MK0FPMIY3-P74igHhIg51wP-FeKEucV8XztirVcFjIAjuBRLJWwu-1Q0oY",
        tags: ["Next.js", "Prisma"]
    },
    {
        title: "Nexus CRM",
        category: "Herramienta Interna",
        description: "Suite de gestión de relaciones personalizada diseñada específicamente para equipos de logística universitaria.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnYPatPtTpuKGlWa5x-dqdyBO12CTc_mx9Dat689Rnr_SYQuzTQQGADf8xZhAm83ywW1xpXnlqAIXwOiglcRE-eOxeLwcNVliX1BGQQAI8rM4W6TTKBsUjpNCMME7mFhd-Lu7MNxJPMRQBleQj-WqDwTD5H3hFtIN7qE1IqNVolUAqukrjQpx0Ajm55DNfqGg9sGM0WXsms3VBFqOhq4F_0iwWqcIfg1TR7alYdCti_h9xtMGH_YA7XyLd704kzVDxNYljFwwGKBs",
        tags: ["TypeScript", "Redux"]
    }
];

export const PROJECTS_DESKTOP: Project[] = [
    {
        title: "EventShare",
        category: "SaaS Full-Stack",
        description: "Plataforma integral para organización de eventos corporativos, con colaboración en tiempo real y ticketing automatizado.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCb1JKCVF0dVo3CKCrEWGkmJrP7cqZe84IPy74Lc6JfikJncmHFzwLO5rFyVj3ooDbe_8-UdWfEp9OW7vtdGK3JFZ1qLYrpVjWXvdd6BwjlTwkq0xYzDw6DwzVxGnFcGiEXnQpq4vZ44n8yHJaW7UE4gzp_CBXYzAxBAfeFSuE8VpXK3dk2hCWJoxCE959y_zcHY-8_Kx-nF7bP4wABQV96dctyQ4akUurmLAqfoPWiddMw6q0w92Q91dQ5bXtV9E2NjPiBQt0fZU8",
        tags: [],
        type: 'large'
    },
    {
        title: "Gestión Escolar",
        category: "Sistema de Gestión",
        description: "Arquitectura de datos compleja para el seguimiento del progreso estudiantil.",
        image: "", // Placeholder or verify if image exists in original? It had a custom div graphic.
        tags: [],
        type: 'small'
    },
    {
        title: "Agro-Trazabilidad",
        category: "Tecnología Industrial",
        description: "Seguimiento de cadena de suministro inspirado en blockchain.",
        image: "", // Placeholder or verify if image exists? It had custom pills.
        tags: ["Node.js", "PostgreSQL"],
        type: 'small'
    }
];

export const EXPERIENCE: Experience[] = [
    {
        year: "2021 — Presente",
        role: "Ingeniería de Software",
        context: "Ciencias de la Computación",
        type: "academic"
    },
    {
        year: "Verano 2023",
        role: "Desarrollador Web Junior",
        context: "Freelance y Pasantías",
        type: "professional"
    }
];
