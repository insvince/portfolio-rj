import Card from './Card';

function Github({ status, idComponent }) {
    return (
        <div
            className="reveal flex justify-center min-h-[750px] pt-[100px]"
            id={idComponent}>
            <div className=" duration-500 w-[90%] xl:w-full ">
                <h2 className="text-4xl font-bold underline text-center mb-12 mt-5 xl:text-3xl">
                    Github
                </h2>
                <div className="flex justify-start items-center flex-wrap lg:justify-center md:flex-col mb-[200px]">
                    <Card
                        url="https://github.com/insvince/bunny_book_store"
                        source="https://github.com/insvince/bunny_book_store"
                        name="Buny Book Store"
                        language="PHP, Javascript, MySQL"
                        description="This is the graduation product of our group during their studies at college specializing in information technology."
                        img="./assets/images/bunny_book.png"
                        status={status.animate}
                    />
                    <Card
                        url="https://portfolio-rj.vercel.app/"
                        source="https://github.com/insvince/portfolio-rj/"
                        name="Portfolio Personal"
                        language="React, TailwindCSS"
                        description="Presenting personal information with the website interface is close, friendly to my employers as well as customers."
                        img="./assets/images/portfolio-rj.png"
                        status={status.animate}
                    />

                    <Card
                        url="https://music-app-rj.vercel.app/"
                        source="https://github.com/insvince/music-player-v1"
                        name="Music Player"
                        language="React, TailwindCSS, JSON"
                        description="Online music player application on web browser. Includes functions such as: play music, select song, stop, next song, random song,..."
                        img="./assets/images/music-player.png"
                        status={status.animate}
                    />
                    <Card
                        url="https://watch-vanilla.vercel.app/"
                        source="https://github.com/insvince/watch-template"
                        name="Watch Shop"
                        language="Javascript, HTML5 & CSS3"
                        description="Template Watch Shop, only landing page demo"
                        img="./assets/images/watch-template.png"
                        status={status.animate}
                    />
                    <Card
                        name="Coming Soon"
                        description="Coming Soon"
                        img="./assets/images/soon.jpg"
                        status={status.animate}
                    />
                    {/*  <Card
                        url="https://crud-api-azure.vercel.app"
                        source="https://github.com/insvince/crud_api"
                        name="RestfulAPI App"
                        language="Javascript, Nodejs, Express, MongoDB"
                        description="Custom collection, record author & book include feature medthod: create, update, remove, ...data"
                        img="./assets/images/crud_api.png"
                        status={status.animate}
                    /> */}
                </div>
            </div>
        </div>
    );
}

export default Github;
