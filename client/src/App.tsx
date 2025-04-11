import React  from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./index.css";

const HomePage = () => (
  <>
    <Home />
    {/* <Services />
    <About />
    <Projects />
    <Contact /> */}
  </>
);

// Individual page components for each section
const ServicesPage = () => <Services />;
const AboutPage = () => <About />;
const ProjectsPage = () => <Projects />;
const ContactPage = () => <Contact />;

const App: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </main>
  )  
};

export default App;