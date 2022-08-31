import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Github from "./Components/Github";
import "./App.scss";

function App() {
  const defaultArr = [
    { id: "home", animate: "true" },
    { id: "about", animate: "false" },
    { id: "skills", animate: "false" },
    { id: "github", animate: "false" },
    { id: "services", animate: "false" },
    { id: "contact", animate: "false" },
  ];
  const [status, setStatus] = useState(defaultArr);

  useEffect(() => {
    let reveals = document.querySelectorAll(".reveal");

    reveals.forEach((r) => {
      r.setAttribute("animation", false);
      r.id === "home" && r.setAttribute("animation", true);
    });
  }, []);

  const handleReveal = () => {
    let reveals = document.querySelectorAll(".reveal");

    for (let index = 0; index < reveals.length; index++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals[index].getBoundingClientRect().top;
      let revealPoint = 150;

      if (revealTop < windowHeight - revealPoint) {
        reveals[index].setAttribute("animation".toString(), true);
      } else {
        reveals[index].setAttribute("animation".toString(), false);
      }
    }
    handleCheck(reveals);
  };

  const handleCheck = (reveals) => {
    let arrayStatus = [];

    reveals.forEach((reveal) => {
      arrayStatus = [
        ...arrayStatus,
        {
          id: reveal.id,
          animate: reveal.getAttribute("animation"),
        },
      ];
    });
    setStatus(arrayStatus);
  };

  return (
    <div
      className="bg-gradient-to-br to-sky-900 from-sky-800 text-white h-[100vh] overflow-y-scroll scroll-smooth "
      onScroll={handleReveal}
    >
      <Header />
      <Home
        status={status.find((item) => item.id === "home")}
        idComponent="home"
      />
      <About
        status={status.find((item) => item.id === "about")}
        idComponent="about"
      />
      <Skills
        status={status.find((item) => item.id === "skills")}
        idComponent="skills"
      />
      <Github
        status={status.find((item) => item.id === "github")}
        idComponent="github"
      />
      <Services
        status={status.find((item) => item.id === "services")}
        idComponent="services"
      />
      <Contact
        status={status.find((item) => item.id === "contact")}
        idComponent="contact"
      />

      <div className="hidden bottom-40 right-20 border p-5 rounded-full h-16 w-16 justify-center items-center cursor-pointer">
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
    </div>
  );
}

export default App;
