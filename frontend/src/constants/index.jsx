import project1 from "../assets/projects/Music_player.png";
import Flavorly from "../assets/projects/Flavorly.png";
import project3 from "../assets/projects/weather.png";
import project4 from "../assets/projects/ui_ux.png";
import Recipe from "../assets/projects/Recipe.png"
import { FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaFigma } from "react-icons/fa";
import { FaJs } from "react-icons/fa";

export const HERO_CONTENT = `I’m a driven BE-IT student with a passion for UI/UX design and full-stack development. My journey so far includes hands-on experience with building interactive user interfaces and scalable web applications.

Currently, I’m sharpening my skills in Node.js, MySQL, and React, while diving deep into data structures and algorithms (DSA) in C++ to solidify my programming foundation.

I love working on innovative projects that challenge me to combine creativity with technical skills. Whether it's creating sleek, user-friendly designs or building robust backend systems, I’m always eager to learn and grow.`;

export const ABOUT_TEXT = `I’m a passionate third-year BE-IT student with a strong interest in UI/UX design and full-stack development. I’ve worked on various real-world projects, including designing user-friendly interfaces during my UI/UX internship at CodSoft and building responsive websites and applications during my internship at Prodigy Infotech.

I’m currently learning data structures and algorithms (DSA) in C++ and diving into backend development with technologies like Node.js and MySQL, while also refining my frontend skills in React and JavaScript.

I’ve participated in hackathons like Smart India Hackathon and Flipkart Grid, where I worked on innovative projects like an Alumni App to solve real-world problems. I value teamwork, innovation, and delivering impactful solutions.`;

export const EXPERIENCES = [
  {
    year: "June 2025 - August 2025",
    role: "SQL Intern",
    company: "Celebal Technologies",
    description: `Gained hands-on experience in database normalization, indexing, and writing stored procedures and triggers.`,
    technologies: ["SSMS", "SQL"],
  },
  {
    year: "2025",
    role: " AI: Transformative Learning with TechSaksham",
    company: "TechSaksham",
    description: `Built a healthcare-focused chatbot by integrating a Hugging Face pre-trained language model using Python.`,
    technologies: ["Huggingface", "Python"],
  },
  {
    year: "Jan 2025",
    role: "Web Developer Intern",
    company: "Prodigy Infotech",
    description: `Developed and maintained web applications using JavaScript, React.js`,
    technologies: ["React.js", "Javascript", "Tailwind CSS"],
  },
  {
    year: "2023",
    role: "UI/UX Intern",
    company: "Codsoft",
    description: `Designed and developed user interfaces for web applications using Figma`,
    technologies: ["Figma"],
  },
];

export const PROJECTS = [
  {
    name: "Flavorly",
    image: Flavorly,
    description: `Flavorly is a modern, responsive food ordering platform designed to provide users with a smooth and intuitive experience for browsing restaurants and placing orders online. The platform focuses on clean UI, fast navigation, and real-time order updates to enhance the overall food ordering experience.`,
    technologies: ["React", "Tailwind CSS", "Appwrite"],
    features: [
      "Show categories (Starters, Main Course, Desserts, Drinks) with images and prices.",
      "Add to cart + fake checkout system",
      "Minimalist and responsive UI"
    ],
    repository: "https://github.com/Priyankamanjare/Food_ordering_app",
    liveDemo: "https://food-ordering-app-nu-fawn.vercel.app/",
    span:"col-span-3"
  },
   
  // {
  //   name: "Weather App",
  //   image: project3,
  //   description: `A responsive and user-friendly weather application that provides real-time weather updates for any location worldwide. It fetches accurate weather data using an API and displays key details like temperature, humidity, wind speed, and forecasts. The app includes a clean UI with dynamic backgrounds that change based on the current weather conditions.`,
  //   technologies: ["React", "TailWindCSS", "OpenWeather API"],
  //   features: [
  //     "Search functionality by city or zip code",
  //     "Temperature conversion (Celsius/Fahrenheit)",
  //     "Background changes based on weather conditions",
  //     "User-friendly and fully responsive design"
  //   ],
  //   repository: "https://github.com/Priyankamanjare/Weather-app",
  //   liveDemo: "https://weather-app-flax-mu-68.vercel.app/",
  //   span:"col-span-3"
  // },
   
  {
    name: "Recipe Finder",
    image: Recipe,
    description: `Recipe Finder helps you discover delicious recipes by simply searching with ingredients. Browse detailed instructions, ingredients, and images — making cooking easy and fun.`,
    technologies: ["React", "TailWindCSS", "TheMealDB API"],
    features: [
      "Search Recipes by Name – Enter any dish name and instantly get matching recipes.",
      "Detailed Recipe View – Click on a recipe to see full instructions, ingredients, and measures.",
       ],
    repository: "https://github.com/Priyankamanjare/RecipeFinder",
    liveDemo: "https://recipe-finder-pi-gold.vercel.app/",
    span:"col-span-3"
  },
  {
    name: "Music Player",
    image: project1,
    description: `A dynamic and interactive music player web application with a sleek user interface. Users can play, pause, skip tracks, and control the volume.`,
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Playlist management",
      "Customizable themes",
      "Real-time audio visualization",
      "Responsive design for desktop and mobile"
    ],
    repository: "https://github.com/Priyankamanjare/Music-player",
    // liveDemo: "https://username.github.io/music-player",
    span:"col-span-2"
  },
 
  {
    name: "UI/UX Landing Page for Project Building Company",
    image: project4,
    description: `A visually appealing and professional landing page designed for a project-building company, showcasing their services and portfolio.`,
    technologies: ["Figma", "HTML", "CSS"],
    features: [
      "Responsive layout",
      "Call-to-action buttons for service inquiries",
      "Testimonial slider",
      "Interactive service cards"
    ],
    // repository: "https://github.com/username/project-landing-page",
    // liveDemo: "https://username.github.io/project-landing-page",
    span:"col-span-2"
  }
];


export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};

export const SKILLS = [
  { name: "React", icon: <FaReact className="text-2xl md:text-4xl  text-cyan-400" /> },
  { name: "Node.js", icon: <DiNodejs className="text-2xl md:text-4xl text-lime-400" /> },
  { name: "C++", icon: <TbBrandCpp className="text-2xl md:text-4xl  text-slate-50" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-2xl md:text-4xl  text-green-600" /> },
  { name: "MySQL", icon: <SiMysql className="text-2xl md:text-4xl  text-cyan-300 " /> },
  { name: "Github", icon: <FaGithub className="text-2xl md:text-4xl  text-slate-300 " /> },
  { name: "HTML", icon: <FaHtml5 className="text-2xl md:text-2xl  text-orange-300 " /> },
  { name: "TailwindCSS", icon: <RiTailwindCssFill className="text-2xl md:text-4xl  text-teal-300 " /> },
  { name: "Figma", icon: <FaFigma className="text-2xl md:text-4xl  text-slate-300 " /> },
  { name: "JS", icon: <FaJs className="text-2xl md:text-4xl  text-yellow-300 " /> },

]

export const achievements = [
  {
    id: 1,
    title: "C++ Certification",
    description:
      "Learned C++ fundamentals, OOP concepts, and basic problem-solving.",
    type: "Certification",
    icon: "🏅",
    year: "2025",
  },
  {
    id: 2,
    title: "SQL Certificate",
    description:
      "Gained practical skills in SQL queries, database design, and data management.",
    type: "Certification",
    icon: "📊",
    year: "2025",
  },
  {
    id: 3,
    title: "JS, CSS, HTML",
    description:
      "Learned core web development skills: HTML structure, CSS styling, and interactive JS features.",
    type: "Certification",
    icon: "🌐",
    year: "2025",
  },
  {
    id: 4,
    title: "SIH Participation",
    description:
      "Contributed to building innovative solutions in a team setting during the SIH event.",
    type: "Competition",
    icon: "💻",
    year: "2024",
  },
  {
    id: 5,
    title: "Figma",
    description:
      "Learned UI/UX design principles and created interactive prototypes using Figma.",
    type: "Certification",
    icon: "🎨",
    year: "2023",
  },
  {
    id: 6,
    title: "Copyright – LabEquip",
    description:
      "Developed the concept for LabEquip: an app that scans lab equipment and provides instant information about each item.",
    type: "Copyright",
    icon: "🧪",
    year: "2023",
  },
];


