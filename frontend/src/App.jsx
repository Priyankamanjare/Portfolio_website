import React from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-neutral-900 overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 min-h-screen">
      <div className="fixed top-0 -z-10 h-full w-full"></div>
      
      <div className="container mx-auto px-8">
        <Navbar />     
        <Profile />
        
        <Experience/>
        <Technologies/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
