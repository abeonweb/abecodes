const links = [
    {
        name: "Home",
        link: "/#home-hero",
        id:1
    },
    {
        name: "Portfolio",
        link: "/#work",
        id:2
    },
    // {
    //     name: "Blog",
    //     link: "blog",
    //     id:3
    // },
    {
        name: "About me",
        link: "about",
        id:4
    },
    {
        name: "Contact",
        link: "/#contact",
        id:5
    },
]

const projects = [
    {
        id: 1,
        title: "Road Rescue and Maintenance Company",
        description: "I was brought on to build a website for a new business focused on road repair. After engaging with the company CEO and other members of the company, I was able to ascertain what the vision the company had in mind. React was very good to use because of its client side rendering that reduced load time, increasing performance",
        image: "road-rescue",
        alt: "road rescue and maintenance",
        stack: ["React", "Javascript", "CSS3", "Material UI"],
        showSite: true,
        showGithub: false,
        site: "https://abeonweb.github.io/road-rescue-site",
        github: "not available", 
    },
    {
        id: 2,
        title: "Reach Productivity Extension",
        description: "A project in the Scrimba bootcamp using a figma desogn, Increasing my productivity has always been on my mind. It uses Unsplash API, the Open weather API, Crypto gecko API and plain Javascript, HTML and CSS. I decided to keep adding features to this project whenever possible. It exists as a chrome extension. The code is available on Github. The name comes from my belief that anyone can reach their full potential.",
        image: "reach",
        alt: "road rescue and maintenance",
        stack: ["HTML", "Javascript", "CSS3"],
        showSite: true,
        showGithub: true,
        site: "https://abeonweb.github.io/reach/",
        github: "https://github.com/abeonweb/reach", 
    },
    {
        id: 3,
        title: "Movie Watch List",
        description: "A Scrimba bootcamp project created from scratch off a figma design. It makes use of a The Open Movie Database for the content. Use plain vanilla JavaScript",
        image: "movie-watch-list",
        alt: "road rescue and maintenance",
        stack: ["Javascript", "CSS3","HTML"],
        showSite: true,
        showGithub: true,
        site: "https://watchlist-for-movies.netlify.app/index.html",
        github: "https://github.com/abeonweb/movie-watchlist", 
    },
    {
        id: 4,
        title: "Emoji Journal",
        description: "Created using HTML, CSS, and vanilla JavaScript. I got the idea from Scrimba Frontend Bootcamp and decided to change it completely. It was realy fun to make.",
        image: "emoji-journal",
        alt: "road rescue and maintenance",
        stack: ["HTML", "Javascript", "CSS3"],
        showSite: true,
        showGithub: true,
        site: "https://abeonweb.github.io/emoji-journal",
        github: "https://github.com/abeonweb/emoji-journal", 
    },
    {
        id: 5,
        title: "Video Player (Coming Soon)",
        description: "Going off brand alittle bit on this one. I am currently working on a video player for my android phone( sorry IOS :) ).coming soon",
        image: "coming-soon",
        alt: "road rescue and maintenance",
        stack: ["React", "Javascript", "CSS3", "Material UI"],
        showSite: false,
        showGithub: false,
        site: "https://abeonweb.github.io/road-rescue-site",
        github: "not available", 
    },
]

const skills = [
    { name: "React", image: "react" },
    { name: "JavaScript", image: "js" },
    // { name:"Java", image: "java"},
    { name: "TypeScript", image: "ts" },
    { name: "Responsive Design", image: "responsive" },
    { name: "Material UI", image: "material-ui" },
    // { name: "VS Code", image: "vscode" },
    { name: "Github", image: "github" },
    { name: "Git", image: "git" },
    { name: "Command Line", image: "command" },

]

export { projects, skills, links }