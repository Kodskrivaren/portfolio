import "./../styling/stylesheet/main.css";
import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer";
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const Project = lazy(() => import("./pages/Project"));
const AboutMe = lazy(() => import("./pages/AboutMe"));
const NoPage = lazy(() => import("./pages/NoPage"));

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
    <>
      <BrowserRouter>
        <Header language={language} setLanguage={setLanguage} />
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <Suspense>
                  <Home scrollToTop={scrollToTop} language={language} />
                </Suspense>
              }
            />
            <Route
              path="projects"
              element={
                <Suspense>
                  <Projects scrollToTop={scrollToTop} language={language} />
                </Suspense>
              }
            />
            <Route
              path="projects/project/*"
              element={
                <Suspense>
                  <Project language={language} />
                </Suspense>
              }
            />
            <Route
              path="aboutme"
              element={
                <Suspense>
                  <AboutMe language={language} />
                </Suspense>
              }
            />
            <Route
              path="*"
              element={
                <Suspense>
                  <NoPage language={language} />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
