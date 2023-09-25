function Skill({ url, name, status }) {
    return (
        <div
            className={` mt-12  ${
                status === 'true' && 'animate-translateXReverse'
            }`}>
            <img className="w-9 mr-5 sm:mr-2" src={url} alt={name} />
            <span className="text-xl font-semibold uppercase mr-5 w-[150px] duration-500 xl:text-lg md:text-base sm:w-[150px] sm:text-sm ">
                {name}
            </span>
        </div>
    );
}

export default Skill;
