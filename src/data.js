const links = [
    {
        name: "Home",
        link: "/#home-hero",
        id: 1
    },
    {
        name: "Portfolio",
        link: "/#work",
        id: 2
    },
    {
        name: "Blog",
        link: "blog",
        id: 3
    },
    {
        name: "About me",
        link: "about",
        id: 4
    },
    {
        name: "Contact",
        link: "/#contact",
        id: 5
    },
]

const projects = [
    {
        id: 0,
        title: "Perfect Scrub Cleaning",
        description: "Full-stack B2B cleaning services platform with an integrated contractor management system. Built with Next.js for server-side rendering and SEO optimization, featuring role-based dashboards for workers, subcontractors, and admins. Job booking & subcontractor approval system. Two-factor authentication & password reset workflows. Fully containerized with Docker.",
        image: "perfect-scrub",
        alt: "Perfect Scrub Cleaning Services",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma ORM", "NextAuth", "Resend", "React Hook Form", "Zod", "Docker"],
        showSite: true,
        showGithub: false,
        site: "https://www.perfectscrubcleaning.com",
        github: "not available",
    },
    {

        id: 1,
        title: "PeppaSync.ai",
        description: `PeppaSync.ai is an AI-driven growth platform built for scaling e-commerce brands to uncover hidden revenue and protect profit. The product connects marketplace and DTC data, then uses AI to surface missed opportunities, pricing issues, and under-promoted high-margin products in real time.

I built the frontend interface that makes complex data easy to understand and act on. Focused on performance, clarity, and seamless UX to help teams make smarter, revenue-driven decisions. The backend and data infrastructure were handled by the core team.`,
        image: "peppasync",
        alt: "PeppaSync.ai — The Strategic AI Growth Engine for E-commerce",
        stack: ["Next.js", "Tailwind CSS", "React Query",],
        showSite: true,
        showGithub: false,
        site: "https://peppasync.ai/",
        github: "not available",
    },
    {
        id: 2,
        title: "Combs & Clippers",
        description: `Combs & Clippers is a smart barber-focused platform that helps professionals manage their schedule, grow their client base, and maximize income—all from one easy-to-use app. It lets barbers book appointments 24/7, communicate with clients, accept mobile payments, track earnings, and showcase their work to attract new business.

I built the frontend interface with a clean, responsive design that makes complex booking and business-management tools feel simple and intuitive. Focused on performance, usability, and polished UI interactions so barbers can manage their business effortlessly.`,
        image: "combsandclippers",
        alt: "Combs & Clippers",
        stack: ["Next.js", "Redux", "Tailwind CSS"],
        showSite: true,
        showGithub: false,
        site: "https://combsandclippers.com/",
        github: "not available",
    },
    {
        id: 3,
        title: "VisaPassNG",
        description: "A website dedicated to helping Nigerians navigate passport and visa application processes. Provides easily accessible information and helps users track passport delivery status. Built with a focus on user-friendly navigation and clear information architecture.",
        image: "visapassng",
        alt: "visapass NG homepage",
        stack: ["HTML", "Javascript", "Tailwind CSS"],
        showSite: true,
        showGithub: false,
        site: "https://visapassng.netlify.app/",
        github: "",
    },
    {
        id: 4,
        title: "Rakota Trader",
        description: "A comprehensive web platform designed to educate users about forex trading while providing access to professional trading signals. The platform features an intuitive learning management system with structured educational resources, a community-driven signals subscription system, and a qualification flow to match users with appropriate trading strategies. I built the responsive frontend interface and user experience, while the backend infrastructure and trading logic were handled by the core development team.",
        image: "rakota",
        alt: "Rakota Trader - Learn forex trading with professional trading signals",
        stack: ["Next.js", "TypeScript", "Tailwind CSS",],
        showSite: true,
        showGithub: false,
        site: "https://rakotatrader.com",
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

const skillCategories = [
    {
        category: "Frontend",
        skills: [
            { name: "React", proficiency: "Expert" },
            { name: "TypeScript", proficiency: "Advanced" },
            { name: "Next.js", proficiency: "Advanced" },
            { name: "Tailwind CSS", proficiency: "Advanced" },
            { name: "Responsive Design", proficiency: "Expert" },
            { name: "JavaScript", proficiency: "Expert" },
            { name: "Redux", proficiency: "Expert" },
            { name: "React Query", proficiency: "Expert" },
            { name: "RESTful APIs", proficiency: "Expert" },
            { name: "Jest & Vitest", proficiency: "Expert" },
        ]
    },
    {
        category: "Backend & Databases",
        skills: [
            { name: "Node.js", proficiency: "Advanced" },
            { name: "PostgreSQL", proficiency: "Advanced" },
            { name: "MongoDB", proficiency: "Advanced" },
            { name: "Prisma ORM", proficiency: "Advanced" },
            { name: "SQL", proficiency: "Advanced" },
            { name: "Express.js", proficiency: "Advanced" },
            { name: "NextAuth", proficiency: "Expert" },
            { name: "OAuth & JWT", proficiency: "Advanced" },
            { name: "Role-Based Access Control (RBAC)", proficiency: "Advanced" },
            { name: "Zod (for validation)", proficiency: "Expert" },
            { name: "React Hook Forms", proficiency: "Expert" },
            { name: "Resend", proficiency: "Expert" },
        ]
    },
    {
        category: "Tools & DevOps",
        skills: [
            { name: "Git", proficiency: "Expert" },
            { name: "GitHub", proficiency: "Expert" },
            { name: "Docker", proficiency: "Intermediate" },
            { name: "Postman", proficiency: "Expert" },
            { name: "Figma", proficiency: "Intermediate" },
        ]
    },
]

export { projects, skillCategories, links }