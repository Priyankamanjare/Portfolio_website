import React from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievement from "./components/Achievement";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="relative min-h-screen w-full md:px-10 px-4 bg-black overflow-hidden ">
        <Navbar />     
        <Profile />
        <Technologies/>
        <Experience/>
  <Projects/>
  <Achievement/>
  <Contact/>
        <Footer/>
      </div>
    
  );
}

export default App;
