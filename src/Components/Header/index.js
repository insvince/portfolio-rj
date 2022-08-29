const Item = ({ title, url }) => {
  return (
    <li className="mx-3 p-2  ease-out hover:scale-125 hover:translate-y-4 duration-500">
      <a href={url}>{title}</a>
    </li>
  );
};

function Header() {
  return (
    <div className="flex justify-center h-[100px] mb-10">
      <div className="flex justify-between items-center w-[80%] font-bold text-lg">
        <span className="hover:scale-125 hover:translate-y-4 duration-500 cursor-pointer">
          <a href="" className="">
            Cabbage
          </a>
        </span>

        <ul className="flex list-none">
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
