import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  return (
    <div className="reveal flex justify-center relative h-[550px]" id="home">
      <div className="flex justify-evenly items-center w-4/5">
        <ul className="w-1/10 text-3xl mx-4  animate-translateX">
          <li className="my-5 cursor-pointer hover:scale-110 duration-500 hover:-translate-x-4">
            <a
              href="https://github.com/git-cabbage"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>

          <li className="my-5 cursor-pointer hover:scale-110 duration-500 hover:-translate-x-4">
            <a
              href="https://www.facebook.com/fb.cabbage"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>

          <li className="my-5 cursor-pointer hover:scale-110 duration-500 hover:-translate-x-4">
            <a href="/" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li className="my-5 cursor-pointer hover:scale-110 duration-500 hover:-translate-x-4">
            <a href="/" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
        <div className="flex justify-around items-center flex-1 ">
          <div className="w-2/5 flex justify-center overflow-hidden">
            <img
              className="h-[300px] hover:scale-110 duration-500 animate-swimming animate-flash"
              src="./assets/images/me2.png"
              alt="myself"
            />
          </div>
          <div className="w-3/5 flex flex-col justify-center items-center  animate-translateXReverse">
            <h1
              className="typing text-4xl font-bold mb-5 h-[80px] w-[460px]"
              aria-hidden="true"
            />
            <p className="mt-5 w-[460px] text-lg">
              - I like to learn new technologies and love the Javascript
              language.
            </p>
            <p className="mt-5 w-[460px] text-lg">
              - Quickly adapt to new environments, not afraid of difficulties,
              and like to find ways to solve problems.
            </p>
            <p className="mt-5 w-[460px] text-lg">
              - Desire to gain experience working in a professional environment.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0  text-2xl">
        <span>Scroll Down</span>
        <FontAwesomeIcon className="ml-4 animate-bounce" icon={faArrowDown} />
      </div>
    </div>
  );
}

export default Home;
