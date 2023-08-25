import { Settings, CropRotate, ViewInAr, PieChart, Code, BarChart, CloudOutlined, FavoriteBorder, Public, PersonOutlined, PhoneIphone, EmailOutlined, Facebook, Twitter, Instagram } from "@mui/icons-material";

export const navlink = [
  {
    id: 1,
    url: "/",
    text: "Home",
  },
  {
    id: 2,
    url: "/about",
    text: "About",
  },
  {
    id: 3,
    url: "/services",
    text: "Services",
  },
  {
    id: 4,
    url: "/portfolio",
    text: "Portfolio",
  },
  {
    id: 5,
    url: "/contact",
    text: "Contact",
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


import d1 from "../../assets/port/demo.png";
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

export const social = [
  {
    id: 1,
    icon: <Facebook />,
  },
  {
    id: 2,
    icon: <Twitter />,
  },
  {
    id: 3,
    icon: <Instagram />,
  },
];







export const card = [
  {
    id: 1,
    image: '/assets/react.png',
    h: 'Dynamic Web Pages',
    
  },
  {
    id: 2,
    image: '/assets/js.png' ,
    h: 'Interactive Experiences' ,
  },
  {
    id: 3,
    image: '/assets/html.png' ,
    h: 'Structured Foundations' ,
  },
  {
    id: 4,
    image: '/assets/css.png',
    h: 'Stylish & Responsive Designs'
    
  },
  {
    id: 5,
    image:  '/assets/boot.png',
    h: 'Rapid & Responsive Development',
   
  },
  {
    id: 6,
    image: '/assets/git.png',
    h: 'Collaborative & Version-Controlled',
    
  }
]