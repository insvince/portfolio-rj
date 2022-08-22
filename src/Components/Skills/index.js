import Skill from "./Skill";

function Skills() {
  return (
    <div className="flex justify-center  p-[50px] min-h-[500px]" id="skills">
      <div className="w-4/5">
        <h2 className="text-4xl underline text-center font-bold mt-12">
          Skills
        </h2>
        <Skill url="./assets/images/react.png" name="react" percent="60" />
        <Skill url="./assets/images/redux.png" name="redux" percent="40" />
        <Skill url="./assets/images/nodejs.png" name="nodejs" percent="65" />
        <Skill url="./assets/images/express.png" name="express" percent="50" />
        <Skill url="./assets/images/mongodb.png" name="mongodb" percent="55" />
        <Skill url="./assets/images/html5.png" name="html5" percent="80" />
        <Skill url="./assets/images/css3.png" name="css3" percent="80" />
        <Skill
          url="./assets/images/javascript.png"
          name="javascript"
          percent="80"
        />
        <Skill url="./assets/images/php.png" name="php" percent="60" />
      </div>
    </div>
  );
}

export default Skills;
