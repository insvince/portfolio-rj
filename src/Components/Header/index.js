import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Item = ({ title, url }) => {
  return (
    <li className="mx-3 p-2 hover:text-blue-500 ease-in duration-300">
      <a href={url}>{title}</a>
    </li>
  );
};

function Header() {
  return (
    <div className="flex justify-center h-[100px] mb-10">
      <div className="flex justify-between items-center w-[80%] font-bold text-lg">
        <span className="hover:text-blue-500 cursor-pointer">
          <a href="#">Cabbage</a>
        </span>

        <ul className="flex list-none">
          <Item url="#home" title="Home" />
          <Item url="#about" title="About" />
          <Item url="#skills" title="Skills" />
          <Item url="#github" title="Github" />
          <Item url="#services" title="Services" />
          <Item url="#contact" title="Contact" />

          <li className="mx-3 p-2 cursor-pointer">
            {<FontAwesomeIcon icon={faMoon} /> || (
              <FontAwesomeIcon icon={faSun} />
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
