function Card({ url, name, description, language, img, source, status }) {
  return (
    <div
      className={`w-[30%] border-solid rounded-lg shadow-2xl bg-gradient-to-br to-blue-800 from-cyan-700 text-white p-4 mt-4 mx-[18px] text-center h-[540px] ${
        status === "true" && "animate-translateYReverse"
      }`}
    >
      <div>
        <a href={url} target="_blank" rel="noreferrer">
          <img
            className="w-[350px] h-[250px] object-cover hover:scale-75 duration-500"
            src={img}
            alt="logo"
          />
          <h3 className="text-2xl font-bold  mt-5">{name}</h3>
        </a>

        <p className=" mt-3 text-left h-[130px] overflow-hidden">
          {description}
        </p>
        <p className="mt-2">
          <a
            className="font-semibold"
            href={source}
            target="_blank"
            rel="noreferrer"
          >
            Link Source
          </a>
        </p>
        <div className="flex justify-between items-center  p-2">
          <p className="font-semibold">{language}</p>
          <img
            className="w-8 rounded-full"
            src="./assets/images/me.png"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
