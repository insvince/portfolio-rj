import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <div className="flex justify-center h-[100px] mb-10">
      <div className="flex justify-between items-center w-[80%] font-bold text-lg">
        <span>Cabbage</span>

        <ul className="flex list-none">
          <li className="mx-3 p-2 hover:text-yellow-400 ease-in duration-300">
            <a href="#home">Home</a>
          </li>

          <li className="mx-3 p-2 hover:text-yellow-400 ease-in duration-300">
            <a href="#about">About</a>
          </li>

          <li className="mx-3 p-2 hover:text-yellow-400 ease-in duration-300">
            <a href="#skill">Skill</a>
          </li>

          <li className="mx-3 p-2 hover:text-yellow-400 ease-in duration-300">
            <a href="#portfolio">Portfolio</a>
          </li>

          <li className="mx-3 p-2 hover:text-yellow-400 ease-in duration-300">
            <a href="#background">Background</a>
          </li>

          <li className="mx-3 p-2 hover:text-yellow-400 ease-in duration-300">
            <a href="#services">Services</a>
          </li>

          <li className="mx-3 p-2 hover:text-yellow-400 ease-in duration-300 cursor-pointer">
            <FontAwesomeIcon icon={faMoon} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
