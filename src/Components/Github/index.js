import Card from "./Card";

function Github() {
  return (
    <div className="flex justify-center h-[750px] p-12" id="github">
      <div className="w-3/4">
        <h2 className="text-4xl font-bold underline text-center mb-12 mt-5">
          Github
        </h2>
        <div className="flex justify-between items-center ">
          <Card
            url="https://github.com/git-cabbage/to-do-list"
            name="ToDo List"
            language="React, HTML5 & CSS3"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos iste nobis suscipit. Ad odit natus dolorum suscipit, ullam qui esse alias asperiores at aliquam aut!"
            img="https://railsware.com/blog/wp-content/uploads/2019/07/Why-we-use-ReactJS-for-our-projects-Icon.png"
          />
          <Card
            url="https://github.com/git-cabbage/to-do-list"
            name="ToDo List"
            language="React, HTML5 & CSS3"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos iste nobis suscipit. Ad odit natus dolorum suscipit, ullam qui esse alias asperiores at aliquam aut!"
            img="https://railsware.com/blog/wp-content/uploads/2019/07/Why-we-use-ReactJS-for-our-projects-Icon.png"
          />
          <Card
            url="https://github.com/git-cabbage/to-do-list"
            name="ToDo List"
            language="React, HTML5 & CSS3"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos iste nobis suscipit. Ad odit natus dolorum suscipit, ullam qui esse alias asperiores at aliquam aut!"
            img="https://railsware.com/blog/wp-content/uploads/2019/07/Why-we-use-ReactJS-for-our-projects-Icon.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Github;
