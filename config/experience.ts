  import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
    title: string;
    imgArr: string[];
    description?: string;
}

interface DescriptionDetailsInterface {
    paragraphs: string[];
    bullets: string[];
}

export interface ExperienceInterface {
    id: string;
    type: ValidExpType;
    companyName: string;
    category: string[];
    shortDescription: string;
    websiteLink?: string;
    githubLink?: string;
    techStack: string[];
    startDate: Date;
    endDate: Date;
    companyLogoImg: any;
    descriptionDetails: DescriptionDetailsInterface;
    pagesInfoArr: PagesInfoInterface[];
}

export const Experiences: ExperienceInterface[] = [
    {
        id: "News-Feed",
        companyName: "News Feed",
        type: "Personal Project",
        category: ["Web Dev", "Full Stack","API"],
        shortDescription:
            "Developed a web project capable of retrieving and exhibiting top and trending news across diverse categories.",
        githubLink: "https://github.com/irfan-iiitr/news",
        techStack: [
            "React",
            "Express",
            "Node.js",
        ],
        startDate: new Date("2023-06-01"),
        endDate: new Date("2023-07-01"),
        companyLogoImg: "/experience/news/logo.jpg",
        pagesInfoArr: [
            {
                title: "Landing Page",
                description: "test description",
                imgArr: [
                    "/experience/news/1.png",
                    "/experience/news/2.png",
                    "/experience/news/3.png",
                    "/experience/news/4.png",

                ],
            },

        ],
        descriptionDetails: {
            paragraphs: [
                "News Feed is a web project that fetches and displays top and trending news across various categories. It has features such as infinite scrolling, alerts, popups, and loaders. Utilizes the News API for recent news."
            ],
            bullets: [
                "Established an Authentication System to procure user data. ",
                "Developed functionalities including continuous scrolling, notifications, modal dialogs, and loading indicators",
                " Utilized the News API to retrieve up-to-date news articles.",
            ],
        },
    }, 
    {
        id: "the-super-quotes",
        companyName: "Raabta",
        type: "Personal Project",
        category: ["Web Dev", "Full Stack"],
        shortDescription:
            "A New-Gen Social Media Platform for the Youth, where users can connect, share, and engage with like-minded individuals.",
        websiteLink:
            "https://social-media-iamuql9pd-irfaniiitrs-projects.vercel.app/",
            githubLink: "https://github.com/irfan-iiitr/Raabta--Social-Media",
        techStack: ["ReactJS", "Node.js", "FireBase", "ChakraUI","Zustand"],
        startDate: new Date("2021-07-01"),
        endDate: new Date("2022-07-01"),
        companyLogoImg: "/experience/raabta/logos.png",
        pagesInfoArr: [
            {
                title: "Home page",
                description: "test description",
                imgArr: ["/experience/raabta/home.png"],
            },
            {
                title: "Initial Feed",
                description: "test description",
                imgArr: [
                    "/experience/raabta/initial_feed.png",
                ],
            },
            {
                title: "Feed after following",
                description: "test description",
                imgArr: ["/experience/raabta/feed2.png"],
            },
            {
                title: "Post",
                description: "test description",
                imgArr: [
                    "/experience/raabta/createpost.png",
                    "/experience/raabta/post.png",
                    "/experience/raabta/post1.png",
                ],
            },
            {
                title: "Profile",
                description: "test description",
                imgArr: ["/experience/raabta/profile.png","/experience/raabta/edit.png"],

            },
            {
                title: "Search Users",
                description: "test description",
                imgArr: ["/experience/raabta/search.png"],

            },
        ],
        descriptionDetails: {
            paragraphs: [
                `Venturing into the world of creativity at The Super Quotes was an exhilarating journey. As a passionate developer, I led the charge in crafting a compelling application from inception to completion, using the dynamic duo of JavaScript and React Native.`,
                `The heart of my achievement lay in the seamless integration of APIs, threading a tapestry of data flow that propelled the application's functionality to new heights.`,
                `With the wizardry of Redux, I choreographed a symphony of state management and performance optimization, orchestrating a ballet of responsiveness that wowed users with every interaction.`,
                `A crescendo awaited as I unveiled the culmination of my work on the grand stage of the Google Play Store. The app's debut marked an epoch, opening doors to an expansive audience eager to embrace the charm of The Super Quotes.`,
            ],
            bullets: [
                " Developed a Platform that helps users craft a unique online persona with personalized profiles.",
                " Curated feed with stunning photos and videos that captivate the audience.",
                " Implemented rich quality features which gives the user the experience of a high quality service.",
                " Implemented live mutation deletion of comments ,posts.",
            ],
        },
    },
    {
        id: "movie-recommender",
        companyName: "Movie Recommender",
        type: "Personal Project",
        category: ["ML", "Recommendation System", "Database"],
        shortDescription:
            "Building a movie recommender app backend using MongoDB Atlas Search and local embeddings.",
        githubLink: "https://github.com/irfan-iiitr/mongodb-ai-vector-search",
        websiteLink:"https://local-embeddings-atlas-vector-search.streamlit.app/",
        techStack: [
            "Streamlit",
            "MongoDB Atlas",
            "Local Embeddings",
            "Hugging Face",
            "Python",
        ],
        startDate: new Date("2024-05-02"),
        endDate: new Date("2022-05-14"),
        companyLogoImg: "/experience/vector/banner-img.png",
        pagesInfoArr: [
            {
                title: "Home Screen",
                description: "test description",
                imgArr: ["/experience/vector/home.png"],
            },
            {
                title: "BAAI/bge-small-en-v1.5",
                description: "test description",
                imgArr: ["/experience/vector/small.png"],
            },
            {
                title: "sentence-transformers/all-mpnet-base-v2",
                description: "test description",
                imgArr: ["/experience/vector/medium.png"],
            },
            {
                title: "sentence-transformers/all-MiniLM-L6-v2n",
                description: "test description",
                imgArr: ["/experience/vector/large.png"],
            },
        ],
        descriptionDetails: {
            paragraphs: [
                `This project aims to provide users with personalized movie recommendations by leveraging state-of-the-art NLP models for text embeddings and a MongoDB database for efficient storage and retrieval of movie data.`,
                `In the context of this movie recommender project, Atlas Vector Search is used to perform efficient searches on the high-dimensional vectors generated by the NLP models. `,
                `These vectors represent the semantic meaning of the movie data, and Atlas Vector Search allows us to quickly find movies with similar vectors (i.e., similar semantic meanings) to the user's input.`,
                `It utilizes pre-trained Hugging Face models such as 'BAAI/bge-small-en-v1.5' and 'sentence-transformers/all-mpnet-base-v2' for generating text embeddings.`,
                `Implements logging using Python's built-in logging module for better debugging and monitoring.`,
            ],
            bullets: [
                " Developed a movie recommender app backend leveraging MongoDB Atlas Search and 3 different local embeddings.",
                " Implemented efficient searches using MongoDB Atlas Vector Search, enhancing user experience",
                " Utilized Streamlit for intuitive user interaction, enabling personalized movie recommendations based on user input.",
            ],
        },
    },
]; 

export const featuredExperiences = Experiences.slice(0, 3);