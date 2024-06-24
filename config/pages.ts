import { ValidPages } from "./constants";

type PagesConfig = {
    [key in ValidPages]: {
        title: string;
        description: string;
    };
};

export const pagesConfig: PagesConfig = {
    skills: {
        title: "Skills",
        description: "Explore the key skills that define my professional identity.",
    },
    experience: {
        title: "Projects",
        description: "Discover highlights from my career journey and impactful projects.",
    },
    contact: {
        title: "Contact",
        description: "Let's connect and explore potential collaborations.",
    },
    contributions: {
        title: "Contributions",
        description: "Browse through my open-source contributions and community involvement.",
    },
};
