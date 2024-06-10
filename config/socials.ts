import { Icons } from "@/components/icons";

interface SocialInterface {
    name: string;
    username: string;
    icon: any;
    link: string;
}

export const SocialLinks: SocialInterface[] = [
    {
        name: "Github",
        username: "@irfan-iiitr",
        icon: Icons.gitHub,
        link: "https://github.com/irfan-iiitr",
    },
    {
        name: "LinkedIn",
        username: "Irfan Ansari",
        icon: Icons.linkedin,
        link: "https://www.linkedin.com/in/irfan-ansari-921b9825a",
    },
    {
        name: "Twitter",
        username: "@Irfan_K9",
        icon: Icons.twitter,
        link: "https://twitter.com/Irfan_K9",
    },
    {
        name: "Gmail",
        username: "irfan",
        icon: Icons.gmail,
        link: "mailto:imtheansarirfan@gmail.com",
    },
];
