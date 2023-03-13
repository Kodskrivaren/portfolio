import "./../styling/stylesheet/main.css";
import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import AboutMe from "./pages/AboutMe";
import NoPage from "./pages/NoPage";

function App() {
  const [language, setLanguage] = useState("english");
  const mounted = useRef(false);

  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  useEffect(() => {
    if (mounted.current === false) {
      mounted.current = true;
      if (window.localStorage["language"] !== undefined) {
        setLanguage(window.localStorage["language"]);
      }
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header language={language} setLanguage={setLanguage} />
        <Routes>
          <Route path="/portfolio/">
            <Route
              index
              element={<Home scrollToTop={scrollToTop} language={language} />}
            />
            <Route
              path="projects"
              element={
                <Projects scrollToTop={scrollToTop} language={language} />
              }
            />
            <Route
              path="projects/project/*"
              element={<Project language={language} />}
            />
            <Route path="aboutme" element={<AboutMe language={language} />} />
            <Route path="*" element={<NoPage language={language} />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
