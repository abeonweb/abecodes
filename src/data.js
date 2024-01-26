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
        id: 0,
        title: "Perfect Scrub Cleaning",
        description: "A new startup cleaning company based in Toronto, Canada. The owners wanted a site that showcased the services and facilities that they service. I decided on NextJS so as enable SEO with Static Site Generation. The site is optimized for fast renderering as well.",
        image: "perfect-scrub",
        alt: "Perfect Scrub Cleaning Services",
        stack: ["React", "NextJS", "Javascript", "Tailwind CSS"],
        showSite: true,
        showGithub: false,
        site: "https://www.perfectscrubcleaning.com",
        github: "not available", 
    },
    {
        
        id: 1,
        title: "Marine Express Logsistics",
        description: `The site was designed to the specifications of the business owner while keeping in mind the best practices.
        Next.js framework was used to increase performance using server-side rendering`,
        image: "menl",
        alt: "Marine Express Logistic company",
        stack: ["React", "Javascript", "Material UI"],
        showSite: true,
        showGithub: false,
        site: "https://www.marineexpresslogistics.com/",
        github: "not available", 
    },
    {
        id: 2,
        title: "Road Rescue and Maintenance Company",
        description: "I was brought on to build a website for a new business focused on road repair. After engaging with the company CEO and other members of the company, I was able to ascertain what the vision the company had in mind. React was very good to use because of its client side rendering that reduced load time, increasing performance",
        image: "road-rescue",
        alt: "road rescue and maintenance",
        stack: ["React", "Javascript", "Material UI"],
        showSite: true,
        showGithub: false,
        site: "https://road-rescue-git-main-abeonweb.vercel.app",
        github: "not available", 
    },
    {
        id: 3,
        title: "VisaPassNG",
        description: "A website dedicated to helping Nigerians in their pasport and visa application processes. It makes information easily accessible to the end user as well as helping in the tracking of passport delivers back to their owners",
        image: "visapassng",
        alt: "visapass NG homepage",
        stack: ["Javascript", "Tailwind CSS"],
        showSite: true,
        showGithub: false,
        site: "https://visapassng.netlify.app/",
        github: "", 
    },
    {
        id: 4,
        title: "Folake and Oluwole Wedding",
        description: "The couple wanted a custom website for their special day. I was able to use React and some packages to bring it to life",
        image: "fowedding",
        alt: "",
        stack: ["React", "Javascript", "CSS3"],
        showSite: true,
        showGithub: false,
        site: "https://folakeandoluwole.com",
        github: "", 
    },
    // {
    //     id: 5,
    //     title: "Quizzical Game",
    //     description: "Created using a figma design from the Scrimba bootcamp course. It accesses an API to load qustions to be answered. I enjoyed figuring this out on my own.",
    //     image: "quizzical",
    //     alt: "",
    //     stack: ["React", "Javascript", "CSS3"],
    //     showSite: true,
    //     showGithub: true,
    //     site: "https://abeonweb.github.io/quizzical-game",
    //     github: "", 
    // },
    // {
    //     id: 6,
    //     title: "Emoji Journal",
    //     description: "Created using HTML, CSS, and vanilla JavaScript. I got the idea from Scrimba Frontend Bootcamp and decided to change it completely by adding new features. It was realy fun to make.",
    //     image: "emoji-journal",
    //     alt: "road rescue and maintenance",
    //     stack: ["Javascript", "CSS3"],
    //     showSite: true,
    //     showGithub: true,
    //     site: "https://abeonweb.github.io/emoji-journal",
    //     github: "https://github.com/abeonweb/emoji-journal", 
    // },
    // {
    //     id: 7,
    //     title: "Reach Productivity Extension",
    //     description: "A project in the Scrimba bootcamp using a figma design, Increasing my productivity has always been on my mind. It uses Unsplash API, the Open weather API, Crypto gecko API and plain Javascript, HTML and CSS. I decided to keep adding features to this project whenever possible. It exists as a chrome extension. The code is available on Github. The name comes from my belief that anyone can reach their full potential.",
    //     image: "reach",
    //     alt: "productivity app designed as a chrome extension",
    //     stack: ["Javascript", "CSS3"],
    //     showSite: true,
    //     showGithub: true,
    //     site: "https://abeonweb.github.io/reach/",
    //     github: "https://github.com/abeonweb/reach", 
    // },
]

const skills = [
    { name: "React", image: "react" },
    { name: "Node", image: "node" },
    { name: "JavaScript", image: "js" },
    // { name:"Java", image: "java"},
    // { name: "TypeScript", image: "ts" },
    { name: "Responsive Design", image: "responsive" },
    { name: "Material UI", image: "material-ui" },
    // { name: "VS Code", image: "vscode" },
    { name: "Github", image: "github" },
    { name: "Git", image: "git" },
    // { name: "Command Line", image: "command" },
    { name: "Figma", image: "figma" },

]

export { projects, skills, links }