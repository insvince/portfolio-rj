function Skill({ url, name, status }) {
    return (
        <div
            className={`w-[150px] mt-12 text-center float-left  ${
                status === 'true' && 'animate-translateXReverse'
            }`}>
            <div className="w-full flex justify-center">
                <img className="w-9 mb-5 sm:mr-2" src={url} alt={name} />
            </div>
            <span className="text-xl font-semibold uppercase mr-5 w-[150px] duration-500 xl:text-lg md:text-base sm:w-[150px] sm:text-sm ">
                {name}
            </span>
        </div>
    );
}

export default Skill;
