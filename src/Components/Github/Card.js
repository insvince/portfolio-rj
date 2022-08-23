function Card({ url, name, description, language, img }) {
  return (
    <div className="w-[30%] border-solid rounded-lg shadow-2xl bg-gradient-to-br to-blue-800 from-cyan-700 text-white">
      <a href={url}>
        <img
          className="w-[400px] h-[350px] rounded-t-xl"
          src={img}
          alt="logo"
        />
        <h3 className="text-2xl font-bold  text-center mt-5">{name}</h3>
        <p className=" mt-3">{description}</p>
        <div className="flex justify-between items-center mt-5 p-2">
          <p className="font-semibold">{language}</p>
          <img
            className="w-8 rounded-full"
            src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/273386801_3032258283692267_5998129513702782404_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=Wwii79yVgy4AX9KRLiH&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT_U-HSXoEglssQadW4v8n2HplkoIVY5rwp_yuROB5aLxw&oe=6304F87E"
            alt="logo"
          />
        </div>
      </a>
    </div>
  );
}

export default Card;
