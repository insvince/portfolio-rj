import Card from "./Card";

function Github() {
  return (
    <div className="flex justify-center h-[750px] " id="github">
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
            img="https://github.com/git-cabbage/to-do-list"
          />
          <Card
            url="https://github.com/git-cabbage/to-do-list"
            name="ToDo List"
            language="React, HTML5 & CSS3"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos iste nobis suscipit. Ad odit natus dolorum suscipit, ullam qui esse alias asperiores at aliquam aut!"
            img="https://images-platform.99static.com//ziSg2wG8LI5ys6pRCBtdnTE0aJk=/87x0:1337x1250/fit-in/590x590/99designs-contests-attachments/56/56020/attachment_56020525"
          />
          <Card
            url="https://github.com/git-cabbage/to-do-list"
            name="ToDo List"
            language="React, HTML5 & CSS3"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos iste nobis suscipit. Ad odit natus dolorum suscipit, ullam qui esse alias asperiores at aliquam aut!"
            img="https://images-platform.99static.com//ziSg2wG8LI5ys6pRCBtdnTE0aJk=/87x0:1337x1250/fit-in/590x590/99designs-contests-attachments/56/56020/attachment_56020525"
          />
        </div>
      </div>
    </div>
  );
}

export default Github;
