import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Section() {
  return (
    <div className="flex justify-center relative h-[650px]" id="home">
      <div className="flex justify-center items-center w-4/5 p-10">
        <ul className="w-1/10 text-3xl mx-4">
          <li className="my-5 cursor-pointer">
            <FontAwesomeIcon icon={faGithub} />
          </li>

          <li className="my-5 cursor-pointer">
            <FontAwesomeIcon icon={faLinkedin} />
          </li>

          <li className="my-5 cursor-pointer">
            <FontAwesomeIcon icon={faTwitter} />
          </li>
        </ul>
        <div className="flex justify-around items-center w-9/10">
          <div>
            <img
              className="h-[300px] rounded-full"
              src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/273386801_3032258283692267_5998129513702782404_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=Wwii79yVgy4AX9KRLiH&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT_U-HSXoEglssQadW4v8n2HplkoIVY5rwp_yuROB5aLxw&oe=6304F87E"
              alt="myself"
            />
          </div>
          <div className="w-2/5">
            <h1 className="typing text-4xl font-bold mb-5 h-[80px] "></h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
            reiciendis quasi vero eos earum exercitationem recusandae nemo
            ducimus ipsa, deleniti et, eaque alias quis sapiente vel laudantium
            non praesentium omnis quo numquam, atque tempora est! Rerum
            aspernatur animi ex illo debitis in, est modi voluptates inventore
            reiciendis, sequi culpa cupiditate nostrum illum dolor voluptatem
            quibusdam unde corrupti voluptatum ipsam qui ut esse perspiciatis.
            Delectus adipisci voluptatum impedit, excepturi itaque rem ab
            voluptates nam. Repellendus molestiae quod voluptas voluptates
            commodi ab rerum veritatis facilis architecto quis? Ipsum recusandae
            quae atque.
          </div>
        </div>
      </div>
      <div className="absolute bottom-0  text-2xl">
        <span>Scroll Down</span>
        <FontAwesomeIcon className="ml-4 animate-bounce" icon={faArrowDown} />
      </div>
    </div>
  );
}

export default Section;
