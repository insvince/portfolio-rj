const Item = ({ title, url }) => {
    return (
        <li className="mx-3 p-2 ease-out hover:scale-110 hover:text-black duration-500">
            <a href={url}>{title}</a>
        </li>
    );
};

function Header({ status }) {
    return (
        <div
            className={`sticky top-0 flex justify-center h-[100px] mb-10 duration-1000 z-20 xl:h-[60px] md:hidden ${
                status.animate === 'true' && 'bg-white text-black h-[60px]'
            }`}>
            <div className="flex justify-between items-center w-[80%] font-bold text-lg">
                <span className="duration-500 cursor-pointer lg:hidden">
                    <a href="/" rel="noreferrer">
                        Vince
                    </a>
                </span>

                <ul className="flex list-none lg:flex-1 lg:justify-center">
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
