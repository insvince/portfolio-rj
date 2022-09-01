function Skill({ url, name, percent, status }) {
  return (
    <div
      className={`flex justify-start items-center mt-12  ${
        status === "true" && "animate-translateXReverse"
      }`}
    >
      <img className="w-9 mr-5 sm:mr-2" src={url} alt={name} />
      <span className="text-xl font-semibold uppercase mr-5 w-[150px] duration-500 xl:text-lg md:text-base sm:w-[150px] sm:text-sm ">
        {name}
      </span>
      <div className="flex items-center h-2 rounded-md border-solid border-2 border-indigo-600 w-full mr-5 overflow-hidden sm:mr-2 ">
        <div
          className={`percent h-2 bg-gradient-to-l from-blue-600 to-indigo-400 border-none rounded-md  ${
            status === "true" && "animate-progess "
          }`}
          style={{ width: percent + "%" }}
        />
      </div>

      <span className="text-xl font-bold duration-500 md:text-lg sm:text-base">
        {percent ? percent : "50"}%
      </span>
    </div>
  );
}

export default Skill;
