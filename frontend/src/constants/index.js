import project1 from "../assets/projects/Music_player.png";
import project2 from "../assets/projects/stopwatch.png";
import project3 from "../assets/projects/weather.png";
import project4 from "../assets/projects/ui_ux.png";

export const HERO_CONTENT = `I’m a driven BE-IT student with a passion for UI/UX design and full-stack development. My journey so far includes hands-on experience with building interactive user interfaces and scalable web applications.

Currently, I’m sharpening my skills in Node.js, MySQL, and React, while diving deep into data structures and algorithms (DSA) in C++ to solidify my programming foundation.

I love working on innovative projects that challenge me to combine creativity with technical skills. Whether it's creating sleek, user-friendly designs or building robust backend systems, I’m always eager to learn and grow.`;

export const ABOUT_TEXT = `I’m a passionate third-year BE-IT student with a strong interest in UI/UX design and full-stack development. I’ve worked on various real-world projects, including designing user-friendly interfaces during my UI/UX internship at CodSoft and building responsive websites and applications during my internship at Prodigy Infotech.

I’m currently learning data structures and algorithms (DSA) in C++ and diving into backend development with technologies like Node.js and MySQL, while also refining my frontend skills in React and JavaScript.

I’ve participated in hackathons like Smart India Hackathon and Flipkart Grid, where I worked on innovative projects like an Alumni App to solve real-world problems. I value teamwork, innovation, and delivering impactful solutions.`;

export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "SQL Intern",
    company: "Celebal Technologies",
    description: `Gained hands-on experience in database normalization, indexing, and writing stored procedures and triggers.`,
    technologies: ["SSMS", "SQL"],
  },
  {
    year: "2025",
    role: "Web Developer Intern",
    company: "Prodigy Infotech",
    description: `Developed and maintained web applications using JavaScript, React.js`,
    technologies: ["React.js", "Javascript", "Tailwind CSS"],
  },
  {
    year: "2025",
    role: " AI: Transformative Learning with TechSaksham",
    company: "TechSaksham",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Huggingface", "Python"],
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
    repository: "https://github.com/username/music-player",
    liveDemo: "https://username.github.io/music-player"
  },
  {
    name: "Stopwatch",
    image: project2,
    description: `A simple yet efficient stopwatch application built for tracking time with precision. Includes start, pause, reset, and lap functionalities.`,
    technologies: ["React", "Tailwind CSS"],
    features: [
      "Lap timer with timestamps",
      "Keyboard shortcuts for control",
      "Minimalist and responsive UI"
    ],
    repository: "https://github.com/username/stopwatch-app",
    liveDemo: "https://username.github.io/stopwatch-app"
  },
  {
    name: "Weather App",
    image: project3,
    description: `A weather forecasting application that provides current weather data and a 7-day forecast for any location worldwide.`,
    technologies: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    features: [
      "Search functionality by city or zip code",
      "Temperature conversion (Celsius/Fahrenheit)",
      "Background changes based on weather conditions",
      "User-friendly and fully responsive design"
    ],
    repository: "https://github.com/username/weather-app",
    liveDemo: "https://username.github.io/weather-app"
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
    repository: "https://github.com/username/project-landing-page",
    liveDemo: "https://username.github.io/project-landing-page"
  }
];


export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
