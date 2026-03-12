export interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    image: string;
    tags: string[];
    link?: string;
    type?: 'large' | 'small';
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
}

export const SOCIAL_LINKS = {
    github: "https://github.com/vmg22",
    linkedin: "https://www.linkedin.com/in/matias-garnica22",
    instagram: "https://www.instagram.com/developer.tuc/",
    email: "mailto:devtuc25@gmail.com",
    secondary_email: "mailto:Victor.GarnicaCampero@alu.frt.utn.edu.ar"
};

export const TECH_STACK = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express",
    "Python",
    "MySQL",
    "Git",
    "GitHub"
];
