const Item = ({ title, url }) => {
  return (
    <li className="mx-3 p-2  ease-out  ">
      <a href={url}>{title}</a>
    </li>
  );
};

function Navbar() {
  return (
    <div className="hidden justify-center h-[300px] mb-10 md:hidden">
      <div className="flex flex-col items-center w-[80%] font-bold text-lg">
        <span className="  cursor-pointer">
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

export default Navbar;
