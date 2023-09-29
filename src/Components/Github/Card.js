function Card({ url, name, description, language, img, source, status }) {
    return (
        <div
            className={`w-[30%] border-solid rounded-lg shadow-2xl bg-gradient-to-br to-blue-800 from-cyan-700 text-white p-4 mt-4 mx-[18px] text-center h-[540px] duration-500 
            xl:w-[29%] xl:ml-6 
            lg:h-[470px] lg:w-[33%] lg: md:w-[45%] 
            sm:w-[70%] sm:h-[500px] sm:mb-8 ${
                status === 'true' && 'animate-translateYReverse'
            }`}>
            <div>
                <a href={url} target="_blank" rel="noreferrer">
                    <img
                        className="w-[350px] h-[250px] object-cover hover:scale-95 duration-500 m-auto 
                        lg:w-[280px]  lg:h-[220px] md:w-[360px]"
                        src={img}
                        alt="logo"
                    />
                    <h3 className="text-2xl font-bold  mt-5 lg:text-xl md:text-xl">
                        {name}
                    </h3>
                </a>

                <p
                    className=" mt-3 text-left h-[130px] overflow-hidden 
                lg:h-[110px] lg:mt-0">
                    {description}
                </p>
                <p className="mt-2 xl:mt-0">
                    <a
                        className="font-semibold"
                        href={source}
                        target="_blank"
                        rel="noreferrer">
                        Link Source
                    </a>
                </p>
                <div className="flex justify-between items-center p-2 sm:mt-4">
                    <p className="font-semibold">{language}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
