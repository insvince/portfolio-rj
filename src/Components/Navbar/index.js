const Item = ({ title, url }) => {
  return (
    <li className="mx-3 p-2  ease-out hover:scale-110 duration-500">
      <a href={url}>{title}</a>
    </li>
  );
};

function Header() {
  return (
    <div className="flex justify-center items-center h-full w-full bg-white text-black sm:hidden z-10">
      <div className="flex flex-col items-center justify-start font-bold text-lg">
        <span className="duration-500 cursor-pointer">
          <a href="/" rel="noreferrer">
            Cabbage
          </a>
        </span>

        <ul className="flex flex-col list-none">
          <Item url="#home" title="Home" />
          <Item url="#about" title="About" />
          <Item url="#skills" title="Skills" />
          <Item url="#github" title="Github" />
          <Item url="#services" title="Services" />
          <Item url="#contact" title="Contact" />
        </ul>
      </div>
    </div>
  );
}

export default Header;
