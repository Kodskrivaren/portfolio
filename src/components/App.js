import "./../styling/stylesheet/main.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import AboutMe from "./pages/AboutMe";
import NoPage from "./pages/NoPage";

function App() {
  const [project, setProject] = useState({});

  function setProjectPage(info) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    setProject(info);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/">
            <Route index element={<Home setProjectPage={setProjectPage} />} />
            <Route
              path="projects"
              element={<Projects setProjectPage={setProjectPage} />}
            />
            <Route
              path="projects/project"
              element={<Project info={project} />}
            />
            <Route path="aboutme" element={<AboutMe />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
