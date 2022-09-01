function About({ status, idComponent }) {
  console.log(status.animate === "true");
  return (
    <div
      className="reveal flex justify-center p-5 h-[600px] sm:p-0 "
      id={idComponent}
    >
      <div className="flex w-4/5 xl:w-full md:justify-center">
        <div
          className={`flex flex-col justify-center w-2/4 duration-500 md:w-[80%] ${
            status.animate === "true" && "animate-translateX"
          }`}
        >
          <h2 className="text-4xl font-bold text-center underline xl:text-3xl">
            About me
          </h2>

          <div className="ml-5 text-lg tracking-wide xl:text-base">
            <p className="mt-12">
              - Learn, accumulate more experience, knowledge, and practice
              skills to increase accuracy
            </p>
            <p className="mt-12">
              - Provide the most satisfactory value for the company and
              customers.
            </p>
            <p className="mt-12">
              - Always try to improve my level to become an excellent employee
              in my field.
            </p>
            <p className="mt-12">
              - Have a stable job that provides me the capability to learn new
              things, technologies, and skills to achieve any task the company
              assigns to me or I have the chance to work on
            </p>
          </div>
        </div>

        <div
          className={`flex justify-center items-center w-2/4 md:hidden ${
            status.animate === "true" && "animate-translateXReverse"
          } `}
        >
          <img
            className="h-[450px] lg:h-[250px]"
            src="./assets/images/me-reverse.png"
            alt="myself"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
