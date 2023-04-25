
import gitIcon from "../assets/github.svg"
import linkdinIcon from "../assets/linkdin.svg"
import twitterIcon from "../assets/twitter.svg"
import globe from "../assets/Globe.svg"
import ClipboardList from "../assets/ClipboardList.svg"

import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import react from "../assets/react.svg"
import tailwind from "../assets/tailwind.svg"
import html5 from "../assets/html5.svg"
import sass from "../assets/sass.svg"
import uncle from "../assets/uncle.svg"
import book from "../assets/book.svg"
import thumb from "../assets/thumb.svg"



const name = "Naufaldi"

const navLinks = [
    {
        id: "Home",
        url: "/"
    },
    {
        id: "Mentorship",
        url: "/mentorship"
    },
    {
        id: "Portfolio",
        url: "/portfolio"
    },
    {
        id: "Snippet",
        url: "/snippet"
    },
    {
        id : "Blog",
        url: "/blog"
    }
]

const footerLinks = [
    {
        id: "Docs",
        url: "/"
    },
    {
        id: "Book Notes",
        url: "/"
    },
    {
        id: "Polywork",
        url: "/portfolio"
    },
    {
        id: "Starter Template",
        url: "/"
    },
    {
        id : "Statistics",
        url: "/"
    }
]

const footerIcons = [
    {
        name: "github",
        icon: gitIcon,
        link: ""
    },
    {
        name : "linkdin",
        icon: linkdinIcon,
        link: ""
    },
    {
        name : "twitter",
        icon: twitterIcon,
        link: ""
    },
]


const mainHeading = "Hi Im Naufaldi, a special human with some ability to love learning and working on teamwork. "

const biography = "Getting Buff +1 for learning, Buff +2 for documentation and more buff on managing team. Exicited on React, UX Research and Agile." 

const whatIdo = "Build and maintain websites, frontend dev also have a mentorship called MOFON. My motto is Beauty and function in equal measure as priority."


const jobCards = [
    {
        title: "Web Development",
        para: "You will receive a customized plan for your fitness journey, and lots of support.",
        icon: globe
    },
    {
        title: "UX Research",
        para: "You will receive a customized plan for your fitness journey, and lots of support.",
        icon: ClipboardList
    }
]

const projs = [
    {
        img: project1,
        title: "Bolder Landingpage",
        subject: "Web Development",
        para: "Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision."
    },
    {
        img: project2,
        title: "Kerja Mantul Education Management",
        subject: "Web Development",
        para: "Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision."
    },
]


const codeSnippets = [
    {
        title: "Nextjs Starter",
        description: "A dead simple for nextjs project.",
        languages: [tailwind, react ],
        stars: 8
    },
    {
        title: "Frontend Starter Kit",
        description: "A dead simple for html 5 boilerplate project. Included setup for minify css, html minify, SEO setting.",
        languages: [tailwind, sass, html5 ],
        stars: 12

    },
    {
        title: "Nextjs Starter 2.0",
        description: "A dead simple for nextjs project with firebase setup.",
        languages: [tailwind, react ],
        stars: 89

    },
    {
        title: "Mobile Web Starter Kit",
        description: "A dead simple for html 5 boilerplate project. Included setup for minify css, html minify, SEO setting.",
        languages: [tailwind, sass, html5 ],
        stars: 22

    },
    {
        title: "Nextjs Starter 2.0",
        description: "A dead simple for nextjs project with firebase setup.",
        languages: [tailwind, react ],
        stars: 89

    },
    {
        title: "Mobile Web Starter Kit",
        description: "A dead simple for html 5 boilerplate project. Included setup for minify css, html minify, SEO setting.",
        languages: [tailwind, sass, html5 ],
        stars: 22


    },
]


const mentorshipWeeks = [
    {
        title: "First Week",
        para: "Discusses the basics of the website such as attribute tags and elements."
    },
    {
        title: "Second week",
        para: "Discusses website development - basic SDLC."
    },
    {
        title: "Third week",
        para: "Discusses about layung concepts such as flexbox and grid."
    },
]

const mentorContent = [
    {
        img: uncle,
        title: "Mentorship 1 : 1",
        para: "Video Call 1 : 1 with mentors to discuss, ask questions and consult about frontend mentorship or other matters"
    },
    {
        img: thumb,
        title: "Direction",
        para: "Video Call 1 : 1 with mentors to discuss, ask questions and consult about frontend mentorship or other matters"
    },
    {
        img: book,
        title: "Syllabus",
        para: "Practical, fundamental syllabus that can be implemented based on case studies"
    },
]

export {
    name,
    navLinks,
    footerLinks,
    footerIcons,
    mainHeading,
    biography,
    whatIdo,
    jobCards,
    projs,
    codeSnippets,
    mentorshipWeeks,
    mentorContent
}