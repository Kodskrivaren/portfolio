import "./../styling/stylesheet/main.css";
import React, { useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import AboutMe from "./pages/AboutMe";

function App() {
  const [page, setPage] = useState("home");
  const [project, setProject] = useState({});

  function setProjectPage(info) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    setProject(info);
    setPage("project");
  }

  return (
    <div className="App">
      <Header setPage={setPage} currentPage={page} />
      {page === "home" && <Home setProjectPage={setProjectPage} />}
      {page === "projects" && <Projects setProjectPage={setProjectPage} />}
      {page === "project" && <Project info={project} />}
      {page === "aboutMe" && <AboutMe />}
      <Footer />
    </div>
  );
}

export default App;
