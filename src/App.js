import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Github from './Components/Github';
import './App.scss';
// import Navbar from './Components/Navbar';
// import Services from './Components/Services';

function App() {
    const defaultArr = [
        { id: 'home', animate: 'true' },
        { id: 'about', animate: 'false' },
        { id: 'skills', animate: 'false' },
        { id: 'github', animate: 'false' },
        { id: 'services', animate: 'false' },
        { id: 'contact', animate: 'false' },
    ];
    const [status, setStatus] = useState(defaultArr);

    useEffect(() => {
        let reveals = document.querySelectorAll('.reveal');

        reveals.forEach(r => {
            r.setAttribute('animation', false);
            r.id === 'home' && r.setAttribute('animation', true);
        });
    }, []);

    const handleReveal = () => {
        let reveals = document.querySelectorAll('.reveal');

        for (let index = 0; index < reveals.length; index++) {
            let windowHeight = window.innerHeight;
            let revealTop = reveals[index].getBoundingClientRect().top;
            let revealPoint = 150;

            if (revealTop < windowHeight - revealPoint) {
                reveals[index].setAttribute('animation'.toString(), true);
            } else {
                reveals[index].setAttribute('animation'.toString(), false);
            }
        }
        handleCheck(reveals);
    };

    const handleCheck = reveals => {
        let arrayStatus = [];

        reveals.forEach(reveal => {
            arrayStatus = [
                ...arrayStatus,
                {
                    id: reveal.id,
                    animate: reveal.getAttribute('animation'),
                },
            ];
        });
        setStatus(arrayStatus);
    };

    return (
        <div
            className="app bg-gradient-to-br from-sky-900 to-cyan-600 text-white h-[100vh] 
            overflow-y-scroll scroll-smooth duration-500"
            id="app"
            onScroll={handleReveal}>
            <Header status={status.find(item => item.id === 'about')} />

            {/* <Navbar /> */}
            <Home
                status={status.find(item => item.id === 'home')}
                idComponent="home"
            />

            <About
                status={status.find(item => item.id === 'about')}
                idComponent="about"
            />

            <Skills
                status={status.find(item => item.id === 'skills')}
                idComponent="skills"
            />

            <Github
                status={status.find(item => item.id === 'github')}
                idComponent="github"
            />

            {/*   <Services
                status={status.find(item => item.id === 'services')}
                idComponent="services"
            /> */}

            <Contact
                status={status.find(item => item.id === 'contact')}
                idComponent="contact"
            />

            <div
                className="hidden bottom-40 right-20 border p-5 rounded-full h-16 w-16 
            justify-center items-center cursor-pointer">
                <FontAwesomeIcon icon={faArrowUp} />
            </div>
        </div>
    );
}

export default App;
