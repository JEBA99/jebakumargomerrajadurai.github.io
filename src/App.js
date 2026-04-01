import React, { useState } from "react";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import ServiceProjects from "./components/ServiceProjects";
import Contact from "./components/Contact";

export default function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "contact":
        return <Contact setPage={setPage} />;
      default:
        return (
          <>
            <Hero setPage={setPage} />
            <Timeline />
            <Services />
            <ServiceProjects />
            <Skills />
            <Projects setPage={setPage} />
          </>
        );
    }
  };

  return <div>{renderPage()}</div>;
}