function Card({ url, name, description, language, img }) {
  return (
    <div className="w-[30%]">
      <a href={url}>
        <img className="w-[400px] h-[350px]" src={img} alt="logo" />
        <h3 className="text-xl font-bold text-blue-600 text-center">{name}</h3>
      </a>
      <span className="font-semibold ">{description}</span>
      <span>{language}</span>
    </div>
  );
}

export default Card;
