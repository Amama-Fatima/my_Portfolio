import { Settings, CropRotate, ViewInAr, PieChart, Code, BarChart, CloudOutlined, FavoriteBorder, Public, PersonOutlined, EmailOutlined, } from "@mui/icons-material";

export const navlink = [
  {
    id: 1,
    url: "/",
    text: "Homeie",
  },
  {
    id: 2,
    url: "/about",
    text: "Aboutie",
  },
  {
    id: 3,
    url: "/services",
    text: "Service",
  },
  {
    id: 4,
    url: "/portfolio",
    text: "Portfolioe",
  },
  {
    id: 5,
    url: "/contact",
    text: "Contact Me",
  },
];

export const home = [
  {
    id: 1,
    text: "Hi! I'm",
    name: " Amama Fatima",
    post: " A FRONT-END WEB DEVELOPER",
    
  },
];

export const about = [
  {
    id: 1,
    desc: "Hello! My name is Amama. I'm a dedicated front-end developer with a passion for creating engaging web experiences.",
    desc1: "Proficient in HTML, CSS, JavaScript, React, and Bootstrap. Currently enhancing skills in Node.js and MongoDB.",
    desc2: "I am currently working as a freelancer in front-end web development. I am also working on my own projects to enhance my skills."
    // cover: "./images/try.png",
  },
];

export const services = [
  {
    id: 1,
    icon: <Settings />,
    title: "Creative Design",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 2,
    icon: <CropRotate />,
    title: "Clean Code",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 3,
    icon: <ViewInAr />,
    title: "Responsive Design",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 4,
    icon: <PieChart />,
    title: "Material UI",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 5,
    icon: <Code />,
    title: "Advanced Animations",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 6,
    icon: <BarChart />,
    title: "Awesome Support",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
];

export const project = [
  {
    id: 1,
    icon: <CloudOutlined />,
    num: "89",
    title: "LOREM ISPUM",
  },
  {
    id: 2,
    icon: <FavoriteBorder />,
    num: "231",
    title: "LOREM ISPUM",
  },
  {
    id: 3,
    icon: <Public />,
    num: "108",
    title: "LOREM ISPUM",
  },
  {
    id: 4,
    icon: <PersonOutlined />,
    num: "1446",
    title: "LOREM ISPUM",
  },
];


import d1 from '../../assets/port/demo.png';
import d2 from "../../assets/port/d2.jpg";
import d3 from "../../assets/port/d3.jpg";
import d4 from "../../assets/port/d4.jpg";
import d5 from "../../assets/port/d5.jpg";
import d6 from "../../assets/port/d6.jpg";


export const portfolio = [
  {
    id: 1,
    cover: d1,
    name: "Click for Demo",
    category: "marketing",

  },
  {
    id: 2,
    cover: d2,
    name: "Click for Demo",
    category: "design",
  
  },
  {
    id: 3,
    cover: d3,
    name: "Click for Demo",
    category: "development",
   
  },
  {
    id: 4,
    cover: d4,
    name: "Click for Demo",
    category: "marketing",
   
  },
  {
    id: 5,
    cover: d5,
    name: "Click for Demo",
    category: "design",
   
  },
  {
    id: 6,
    cover: d6,
    name: "Click for Demo",
    category: "development",
   
  },
];

export const contact = [
  
  {
    id: 1,
    icon: <EmailOutlined />,
    text1: "amamafatima58@gmail.com",
  }
];

import {SiFiverr, SiUpwork} from 'react-icons/si'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

export const social = [
  {
    id: 1,
    icon: <SiFiverr />,
    url: "https://www.fiverr.com/s/wEXWxB",
  },
  {
    id: 2,
    icon: <SiUpwork />,
    url: 'https://www.upwork.com/freelancers/~011e90e06f0ac699cf'
  },
  {
    id: 3,
    icon: <AiFillGithub />,
    url: 'https://github.com/Amama-Fatima'
  },
  {
    id: 4,
    icon: <AiFillLinkedin />,
    url: 'google.com'
  }
];




export function getAssetPath(path) {
  return `${import.meta.env.BASE_URL}${path}`;
}


import react from '../../assets/port/react.png';
import js from "../../assets/port/js.png";
import html from "../../assets/port/html.png";
import css from "../../assets/port/css.png";
import boot from "../../assets/port/boot.png";
import git from "../../assets/port/git.png";



export const card = [
  {
    id: 1,
    image: react,
   h: 'Dynamic Web Pages',
    
  },
  {
    id: 2,
    image: js ,
    h: 'Interactive Experiences' ,
  },
  {
    id: 3,
    image: html ,
    h: 'Structured Foundations' ,
  },
  {
    id: 4,
    image: css,
    h: 'Stylish & Responsive Designs'
    
  },
  {
    id: 5,
    image:  boot,
    h: 'Rapid & Responsive Development',
   
  },
  {
    id: 6,
    image: git,
    h: 'Collaborative & Version-Controlled',
    
  }
]