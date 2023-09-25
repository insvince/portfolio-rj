import Skill from './Skill';

function Skills({ status }) {
    return (
        <div
            className="reveal flex justify-center  p-[50px] min-h-[500px] sm:p-4"
            id="skills">
            <div className="w-4/5 xl:w-[95%] sm:w-full">
                <h2 className="text-4xl underline text-center font-bold mt-12 xl:text-3xl">
                    Skills
                </h2>
                <Skill
                    url="./assets/images/react.png"
                    name="react"
                    status={status.animate}
                />
                <Skill
                    url="./assets/images/nodejs.png"
                    name="nodejs"
                    status={status.animate}
                />
                <Skill
                    url="./assets/images/express.png"
                    name="express"
                    status={status.animate}
                />
                <Skill
                    url="./assets/images/mongodb.png"
                    name="mongodb"
                    status={status.animate}
                />
                <Skill
                    url="./assets/images/html5.png"
                    name="html5"
                    status={status.animate}
                />
                <Skill
                    url="./assets/images/css3.png"
                    name="css3"
                    status={status.animate}
                />
                <Skill
                    url="./assets/images/javascript.png"
                    name="javascript"
                    status={status.animate}
                />
                <Skill
                    url="./assets/images/php.png"
                    name="php"
                    status={status.animate}
                />
            </div>
        </div>
    );
}

export default Skills;
