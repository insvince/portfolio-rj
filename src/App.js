import Header from "./Components/Header";
import Section from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Github from "./Components/Github";
import "./App.scss";

function App() {
  return (
    <div
      className="min-h-[300vh] bg-gradient-to-br from-sky-900 to-gray-900 
     text-white scroll-smooth "
    >
      <Header />
      <Section />
      <About />
      <Skills />
      <Github />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
