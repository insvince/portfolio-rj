import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import ContactUs from "./FormMail";

function Contact() {
  return (
    <div className="flex justify-center h-[700px] p-12  " id="contact">
      <div className="w-3/4 ">
        <h2 className="text-4xl font-bold underline text-center mb-12">
          Contact
        </h2>
        <div className="flex justify-between items-start">
          <div className="w-2/5">
            <h2 className=" text-2xl font-bold ">Get in touch</h2>
            <div className="mt-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
              quasi autem repellendus consequuntur rerum, commodi, quod odio
              alias, iure architecto consectetur corporis modi! Quibusdam
              laboriosam sit voluptatum asperiores fuga exercitationem?
            </div>
            <div className="mt-5 flex flex-col justify-between h-[220px]">
              <div>
                <FontAwesomeIcon icon={faPhone} />
                <span className="font-semibold text-lg ml-5">0354449276</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faEnvelope} />

                <span className="font-semibold text-lg ml-5">
                  mailto:phuochuy1328@gmail.com
                </span>
              </div>
              <div>
                <FontAwesomeIcon icon={faLocationDot} />
                <span className="font-semibold text-lg ml-5">
                  Hau Giang Street, Ward 12, Distric 6, HCMC
                </span>
              </div>
              <div className="mt-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error,
                ea voluptatem dolorem minima dolores commodi?s
              </div>
            </div>
          </div>

          <ContactUs />
        </div>
      </div>
    </div>
  );
}

export default Contact;
