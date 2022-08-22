function About() {
  return (
    <div className="flex justify-center p-5  h-[600px]" id="about">
      <div className="flex justify-center w-4/5">
        <div className="flex flex-col justify-center w-2/4 ">
          <h2 className="text-4xl font-bold text-center underline">About me</h2>

          <div className="ml-5 text-lg tracking-wide ">
            <p className="mt-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, quis
              ut optio inventore possimus odio!
            </p>
            <p className="mt-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, quis
              ut optio inventore possimus odio!
            </p>
            <p className="mt-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, quis
              ut optio inventore possimus odio!
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center w-2/4">
          <img
            className="h-[450px] rounded-tr-3xl rounded-bl-3xl"
            src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/273386801_3032258283692267_5998129513702782404_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=Wwii79yVgy4AX9KRLiH&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT_U-HSXoEglssQadW4v8n2HplkoIVY5rwp_yuROB5aLxw&oe=6304F87E"
            alt="myself"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
