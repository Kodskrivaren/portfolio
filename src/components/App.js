import "./../styling/stylesheet/main.css";
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="App">
      <Header setPage={setPage} />
      {page === "home" && <Home />}
      {page === "projects" && <Projects />}
      {page === "aboutMe" && <AboutMe />}
      <Footer />
    </div>
  );
}

export default App;
