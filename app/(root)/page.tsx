import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import irfanImg from "@/public/irfan-profile.jpg";
import SkillsCard from "@/components/skills-card";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { featuredSkills } from "@/config/skills";
import { Icons } from "@/components/icons";
import { pagesConfig } from "@/config/pages";
import { featuredExperiences } from "@/config/experience";
import ProjectCard from "@/components/project-card";
import { featuredContributions } from "@/config/contributions";
import ContributionCard from "@/components/contribution-card";

export const metadata: Metadata = {
    title: "Irfan Ansari",
    description: "My Portfolio Website",
};

export default async function IndexPage() {
    return (
        <>
            <section className="space-y-6 pb-8 pt-6 mb-0 md:pb-12 md:py-20 lg:py-32 h-screen flex items-center">
                <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center -mt-20">
                   
                    <Image
                        src={irfanImg}
                        height={90}
                        width={90}
                        sizes="100vw"
                        className="bg-primary rounded-lg mt-44 md:mt-8 lg:mt-14 mb-0 h-auto md:mb-2 w-[60%] max-w-[16rem] border-8 border-primary dark:border-white dark:bg-white"
                        alt="irfan-ansari-img"
                    />
                    {/* </div> */}
                    <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
                        Irfan Ansari
                    </h1>
                    <h3 className="font-heading text-base sm:text-xl md:text-xl lg:text-2xl">
                        Crafting Solutions through the Art of Code
                    </h3>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    I am a coding enthusiast, crafting intricate software solutions with the stroke of my keyboard.
                     Using the language of programming, I bring ideas to life, building elegant solutions that push the limits of technology.
                    </p>
                    <div className="flex flex-col  mt-10 items-center justify-center sm:flex-row sm:space-x-4 gap-3">

                    <Link
                            href={"https://www.linkedin.com/in/irfan-ansari-921b9825a"}
                            target="_blank"
                            className={cn(buttonVariants({ size: "lg" }))}
                        >
                            <Icons.linkedin className="w-4 h-4 mr-2" /> LinkedIn
                        </Link>

                        <Link
                            href={"https://github.com/irfan-iiitr"}
                            target="_blank"
                            className={cn(buttonVariants({ size: "lg" }))}
                        >
                            <Icons.gitHub className="w-4 h-4 mr-2" /> GitHub
                        </Link>

                       
                    </div>
                </div>
            </section>




          {/* Skills Section */}

            <section
                id="skills"
                className="container space-y-6 bg-slate-50 dark:bg-transparent py-10"
            >
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        {pagesConfig.skills.title}
                    </h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        {pagesConfig.skills.description}
                    </p>
                </div>
                <SkillsCard skills={featuredSkills} />
                <Link href="/skills" className="flex justify-center">
                    <Button variant={"outline"} className="rounded-xl">
                        <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
                    </Button>
                </Link>
                {/* <div className="mx-auto text-center md:max-w-[58rem]">
                    <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        See all the relevant skills.
                    </p>
                </div> */}
            </section>
            <section
                id="experience"
                className="container space-y-6 dark:bg-transparent py-10 my-14"
            >
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        {pagesConfig.experience.title}
                    </h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        {pagesConfig.experience.description}
                    </p>
                </div>
                <div className="mx-auto grid justify-center gap-4  md:w-full lg:grid-cols-3">
                    {featuredExperiences.map((exp) => (
                        <ProjectCard key={exp.id} project={exp} />
                    ))}
                </div>
                <Link legacyBehavior href="/experience">
                    <a className="flex justify-center">
                        <Button variant={"outline"} className="rounded-xl">
                            <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
                        </Button>
                    </a>
                </Link>
                {/* <div className="mx-auto text-center md:max-w-[58rem]">
                    <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        See all the relevant experiences.
                    </p>
                </div> */}
            </section>
            <section
                id="contributions"
                className="container space-y-6 bg-slate-50 dark:bg-transparent py-10 my-14"
            >
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        {pagesConfig.contributions.title}
                    </h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        {pagesConfig.contributions.description}
                    </p>
                </div>
                <div className="mx-auto justify-center gap-4  md:w-full lg:grid-cols-3">
                    <ContributionCard contributions={featuredContributions} />
                </div>
                <Link href="/contributions" className="flex justify-center">
                    <Button variant={"outline"} className="rounded-xl">
                        <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
                    </Button>
                </Link>
                {/* <div className="mx-auto text-center md:max-w-[58rem]">
                    <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        See all the relevant skills.
                    </p>
                </div> */}
            </section>
        </>
    );
}
