import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./index.css";

const App: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Home />
      <Services />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default App;