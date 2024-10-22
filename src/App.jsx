import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Nav";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";

const App = () => {
  return (
    <div className="bg-bgColor text-primaryLightColor  px-8">
      <div className="max-w-7xl w-full mx-auto ">
        <Navbar />
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
      </div>
    </div>
  );
};

export default App;
