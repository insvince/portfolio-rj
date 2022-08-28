import Card from "./Card";

function Github() {
  return (
    <div className="flex justify-center min-h-[750px] " id="github">
      <div className="w-3/4">
        <h2 className="text-4xl font-bold underline text-center mb-12 mt-5">
          Github
        </h2>
        <div className="flex justify-start items-center flex-wrap">
          <Card
            url="https://git-cabbage.github.io/portfolio-rj/"
            source="https://github.com/git-cabbage/portfolio-rj/"
            name="Portfolio Personal"
            language="React, TailwindCSS"
            description="Presenting personal information with the website interface is close, friendly to my employers as well as customers."
            img="./portfolio-rj/assets/images/portfolio-rj.png"
          />

          <Card
            url="https://git-cabbage.github.io/music-player-v1/"
            source="https://github.com/git-cabbage/music-player-v1/"
            name="Music Player"
            language="React, TailwindCSS, JSON"
            description="Online music player application on web browser. Includes functions such as: play music, select song, stop, next song, random song,..."
            img="./portfolio-rj/assets/images/music-player.png"
          />

          {/*  <Card
            url="https://github.com/git-cabbage/to-do-list"
            name="ToDo List"
            language="React, Tailwind"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos iste nobis suscipit. Ad odit natus dolorum suscipit, ullam qui esse alias asperiores at aliquam aut!"
            img="https://images-platform.99static.com//ziSg2wG8LI5ys6pRCBtdnTE0aJk=/87x0:1337x1250/fit-in/590x590/99designs-contests-attachments/56/56020/attachment_56020525"
          />
          <Card
            url="https://github.com/git-cabbage/to-do-list"
            name="ToDo List"
            language="React, Tailwind"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos iste nobis suscipit. Ad odit natus dolorum suscipit, ullam qui esse alias asperiores at aliquam aut!"
            img="https://images-platform.99static.com//ziSg2wG8LI5ys6pRCBtdnTE0aJk=/87x0:1337x1250/fit-in/590x590/99designs-contests-attachments/56/56020/attachment_56020525"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Github;
