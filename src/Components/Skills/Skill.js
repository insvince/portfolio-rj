function Skill({ url, name, status }) {
    return (
        <div
            className={`w-1/5 mt-12 text-center float-left duration-300 md:w-1/4 sm:w-1/3 ${
                status === 'true' && 'animate-translateXReverse'
            }`}>
            <div className="w-full flex justify-center">
                <img className="w-9 mb-5 sm:mb-2" src={url} alt={name} />
            </div>
            <span className="text-xl font-semibold uppercase w-[150px] duration-500 xl:text-lg md:text-base sm:text-sm md:max-w-full ">
                {name}
            </span>
        </div>
    );
}

export default Skill;
