import { Metadata } from "next";
import dynamic from 'next/dynamic';

const PageHeader = dynamic(() => import("@/components/page-header"), {
  loading: () => <p>Loading...</p>,
});

const SkillsCard = dynamic(() => import("@/components/skills-card"), {
  loading: () => <p>Loading...</p>,
});

import { pagesConfig } from "@/config/pages";
import { skills } from "@/config/skills";

export const metadata: Metadata = {
    title: "Skills",
    description: "Examples of cards built using the components.",
};

export default function SkillsPage() {
    return (
        <>
            <PageHeader
                title={pagesConfig.skills.title}
                description={pagesConfig.skills.description}
            />
            <SkillsCard skills={skills} />
        </>
    );
}