export interface contributionsInterface {
    repo: string;
    contibutionDescription: string;
    repoOwner: string;
    link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
    {
        repo: "hgv2",
        contibutionDescription:
            "Creating endpoints for project submission and verification, allowing users to get assignments by LevelID.",
        repoOwner: "housefgeeks",
        link: "https://github.com/houseofgeeks/hgv2/pull/83",
    },
    {
        repo: "OpenGram",
        contibutionDescription:
            "Enhanced copy link button UI to provide clear visual feedback upon clicking, addressing user confusion ",
        repoOwner: "Nishit Baria",
        link: "https://github.com/Nishitbaria/OpenGrame/pull/66#event-12799739750",
    },
    {
        repo: "Comic-Cult",
        contibutionDescription:
            "Added feature-request.yml, a professional template facilitating structured submission of feature requests with relevant context and solutions.",
        repoOwner: "Girish Bari",
        link: "https://github.com/Girishbari/comic-cult/pull/10#event-12778946982",
    },
    {
        repo: "CSMS-Backend",
        contibutionDescription:
            "Implemented Match Stats functionality and integrated Prediction Routes, leveraging TensorFlow.js for predictive analytics, enhancing application efficiency and scalability.",
        repoOwner: "Mohitgit22",
        link: "https://github.com/Mohitgit22/CSMS-Backend/pull/4",
    },
    
];

export const featuredContributions: contributionsInterface[] =
    contributionsUnsorted.slice(0, 3);
