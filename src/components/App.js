import "./../styling/stylesheet/main.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import AboutMe from "./pages/AboutMe";
import NoPage from "./pages/NoPage";

function App() {
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/portfolio/">
            <Route index element={<Home scrollToTop={scrollToTop} />} />
            <Route
              path="projects"
              element={<Projects scrollToTop={scrollToTop} />}
            />
            <Route path="projects/project/*" element={<Project />} />
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
