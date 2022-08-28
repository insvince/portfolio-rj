import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import Header from "./Components/Header";
import Section from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Github from "./Components/Github";
import "./App.scss";
import { useEffect } from "react";

function App() {
  const handleScroll = () => {
    window.addEventListener("scroll", () => {
      //   console.log(e);
      console.log("qweqwe");
    });
  };

  return (
    <div
      className="min-h-[300vh] bg-gradient-to-br to-sky-900 from-sky-800 
     text-white"
      //   onWheel={handleScroll}
      onScroll={handleScroll}
    >
      <Header />
      <Section />
      <About />
      <Skills />
      <Github />
      <Services />
      <Contact />
      <div className="hidden bottom-40 right-20 border p-5 rounded-full h-16 w-16 justify-center items-center cursor-pointer">
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
    </div>
  );
}

export default App;
