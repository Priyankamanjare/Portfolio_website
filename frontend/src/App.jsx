import React from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="relative min-h-screen w-full md:px-40 px-12 bg-gradient-to-br from-[#160427] via-[#060109] to-[#000000] overflow-hidden">
      
      {/* Glow Elements */}
      <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-fuchsia-950 rounded-full blur-[150px] opacity-40"></div>
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-fuchsia-950 rounded-full blur-[200px] opacity-30"></div>
        <Navbar />     
        <Profile />
        <Experience/>
        <Technologies/>
        <Projects/>
        <Contact/>
      </div>
    
  );
}

export default App;
