import Skill from "./Skill";

function Skills({ status }) {
  return (
    <div
      className="reveal flex justify-center  p-[50px] min-h-[500px]"
      id="skills"
    >
      <div className="w-4/5 xl:w-[95%]">
        <h2 className="text-4xl underline text-center font-bold mt-12 xl:text-3xl">
          Skills
        </h2>
        <Skill
          url="./assets/images/react.png"
          name="react"
          percent="60"
          status={status.animate}
        />
        <Skill
          url="./assets/images/redux.png"
          name="redux"
          percent="40"
          status={status.animate}
        />
        <Skill
          url="./assets/images/nodejs.png"
          name="nodejs"
          percent="65"
          status={status.animate}
        />
        <Skill
          url="./assets/images/express.png"
          name="express"
          percent="50"
          status={status.animate}
        />
        <Skill
          url="./assets/images/mongodb.png"
          name="mongodb"
          percent="55"
          status={status.animate}
        />
        <Skill
          url="./assets/images/html5.png"
          name="html5"
          percent="80"
          status={status.animate}
        />
        <Skill
          url="./assets/images/css3.png"
          name="css3"
          percent="80"
          status={status.animate}
        />
        <Skill
          url="./assets/images/javascript.png"
          name="javascript"
          percent="80"
          status={status.animate}
        />
        <Skill
          url="./assets/images/php.png"
          name="php"
          percent="60"
          status={status.animate}
        />
      </div>
    </div>
  );
}

export default Skills;
