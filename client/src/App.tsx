import React from "react";
import Navbar from "./components/Navbar.tsx"  ;
import Home from "./components/Home.tsx";
import Services from "./components/Services.tsx";
import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";
import Contact from "./components/Contact.tsx";
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