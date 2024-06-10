import { Icons } from "@/components/icons";

export interface skillsInterface {
    name: string;
    description: string;
    rating: number;
    icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
    {
        name: "Next.js",
        description:
            "Effortlessly build dynamic apps with routing, layouts, loading UI, and API routes.",
        rating: 5,
        icon: Icons.nextjs,
    },
    {
        name: "React",
        description:
            "Craft interactive user interfaces using components, state, props, and virtual DOM.",
        rating: 5,
        icon: Icons.react,
    },
    {
        name: "GraphQL",
        description:
            "Fetch data precisely with a powerful query language for APIs and runtime execution.",
        rating: 4,
        icon: Icons.graphql,
    },
    {
        name: "express.js",
        description:
            "Build web applications and APIs quickly using a fast, unopinionated Node.js framework.",
        rating: 5,
        icon: Icons.express,
    },
    {
        name: "Node.js",
        description:
            "Run JavaScript on the server side, enabling dynamic and responsive applications.",
        rating: 5,
        icon: Icons.nodejs,
    },
    {
        name: "MongoDB",
        description:
            "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.",
        rating: 5,
        icon: Icons.mongodb,
    },
    {
        name: "Typescript",
        description:
            "Enhance JavaScript with static types, making code more understandable and reliable.",
        rating: 5,
        icon: Icons.typescript,
    },
    {
        name: "Javascript",
        description:
            "Create interactive and dynamic web experiences with the versatile scripting language.",
        rating: 5,
        icon: Icons.javascript,
    },
    {
        name: "HTML 5",
        description:
            "Structure web content beautifully with the latest version of HyperText Markup Language.",
        rating: 4,
        icon: Icons.html5,
    },
    {
        name: "CSS 3",
        description:
            "Style web pages creatively with the latest iteration of Cascading Style Sheets.",
        rating: 4,
        icon: Icons.css3,
    },
    {
        name: "Redux",
        description:
            "Manage app state effectively using a predictable and centralized state container.",
        rating: 4,
        icon: Icons.redux,
    },
    {
        name: "Socket.io",
        description:
            "Enable real-time, bidirectional communication between clients and servers effortlessly.",
        rating: 3,
        icon: Icons.socketio,
    },
    {
        name: "Tailwind CSS",
        description:
            "Design beautiful, modern websites faster with a utility-first CSS framework.",
        rating: 5,
        icon: Icons.tailwindcss,
    },
    {
        name: "AWS",
        description:
            "Utilize Amazon Web Services to build and deploy scalable, reliable, and secure applications.",
        rating: 3,
        icon: Icons.amazonaws,
    },
    {
        name: "Bootstrap",
        description:
            "Quickly create responsive and appealing web designs using a popular CSS framework.",
        rating: 3,
        icon: Icons.bootstrap,
    },
    {
        name: "MySQL",
        description:
            "Manage and organize relational databases efficiently for data-driven applications.",
        rating: 3,
        icon: Icons.mysql,
    },
    {
        name: "Netlify",
        description:
            "Manage and organize relational databases efficiently for data-driven applications.",
        rating: 4,
        icon: Icons.netlify,
    },
    {
        name: "C++",
        description:
            "A powerful, high-performance language used for system software, game development, and complex computations.",
        rating: 5,
        icon: Icons.cplusplus, 
    },
    {
        name: "Chakra UI",
        description:
            "A simple, modular and accessible component library that gives you the building blocks you need to build your React applications.",
        rating: 4,
        icon: Icons.chakraui, 
    },
    {
        name: "Firebase",
        description:
            "A comprehensive mobile development platform that helps you build, improve, and grow your app.",
        rating: 3,
        icon: Icons.firebase, 
    },
    {
        name: "Docker",
        description:
            "A platform that uses OS-level virtualization to deliver software in packages called containers.",
        rating: 3,
        icon: Icons.docker, 
    },
    {
        name: "Git",
        description:
            "A distributed version control system that lets you manage and keep track of your source code history.",
        rating: 4,
        icon: Icons.git,
    },

];

export const skills = skillsUnsorted
    .slice()
    .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
