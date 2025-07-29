import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import graphql from './graphql.png';
import react from './react.png';
import node from './node.png';
import express from './express.png';
import mongo from './mongo.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import frontend from './frontend.png';
import backend from './backend.png';
import devops from './devops.png';
import blog from './blog.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    react,
    node,
    express,
    mongo,
    graphql,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    frontend,
    backend,
    devops,
    blog,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
  {
    title: 'PromptHub',
    description: 'The Smart Prompt Recipe Book for AI Power Users. Goal: Full-stack web app to save, remix, and share AI prompts like code snippets.',
    bgImage: '/work-1.png',
    github: 'https://github.com/imharishpatil/Prompthub',
    live: 'https://prompthub-gamma.vercel.app/', 
  },
  {
    title: 'URL Shortner',
    description: 'Built an end-to-end web app where users can shorten URLs and manage them securely. short url generater which converts your lengthy URL in shorter urls.',
    bgImage: '/work-2.png',
    github: 'https://github.com/imharishpatil/URL-SHORTNER',
    live: 'https://url-shortner-three-silk.vercel.app/',
  },
  {
    title: 'Amazon Clone',
    description: 'This is a simple UI clone of the Amazon website. The project aims to replicate the basic structure and design of the Amazon homepage.',
    bgImage: '/work-3.png',
    github: 'https://github.com/imharishpatil/Amazon.com-Clone',
    live: 'https://imharishpatil.github.io/Amazon.com-Clone/',
  },
  {
    title: 'Currency Converter',
    description: 'A simple currency converter web app that allows users to convert between different currencies using real-time exchange rates. ',
    bgImage: '/work-4.png',
    github: 'https://github.com/imharishpatil/Currency-Converter',
    live: 'https://imharishpatil.github.io/Currency-Converter/',
  },
];

export const serviceData = [
    { icon: assets.frontend, title: 'Frontend Developer', description: 'proficient in HTML, CSS, and JavaScript, and frameworks like React, Next.js, and Tailwind CSS.', link: '' },
    { icon: assets.backend, title: 'Backend Developer', description: 'Backend technologies like Node.js, Express, MongoDB, GraphQL, Postgres, Mysql and many more.', link: '' },
    { icon: assets.devops, title: 'DevOps Engineer', description: 'Aspiring Devops with knowledge of Computern Network, OS, Linux and  Docker, CI& CD, Git Github.', link: '' },
    { icon: assets.blog, title: 'Blog Writer', description: 'Posted some blogs on Medium and other platforms.', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'C, Nodejs, React, Express,Python, php' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'BCA-Bachelor of Computer Aplications' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.react, assets.node, assets.express, assets.mongo, assets.graphql
];