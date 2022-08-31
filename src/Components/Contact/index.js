import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import ContactUs from "./FormMail";

function Contact({ status, idComponent }) {
  return (
    <div className=" reveal flex justify-center h-[700px] p-12" id="contact">
      <div className="w-3/4 ">
        <h2 className="text-4xl font-bold underline text-center mb-12">
          Contact
        </h2>
        <div className="flex justify-between items-start">
          <div
            className={`w-2/5  ${
              status.animate === "true" && "animate-translateX"
            }`}
          >
            <h2 className=" text-2xl font-bold ">Get in touch</h2>
            <div className="mt-5">
              Please fill in the information and I'll reply to your message as
              soon as possible, wellcome back to my website.
            </div>
            <div className="mt-5 flex flex-col justify-between h-[220px]">
              <div>
                <FontAwesomeIcon icon={faPhone} />
                <span className="font-semibold text-lg ml-5">
                  <a href="tel:+84354449276" rel="noreferrer">
                    0354449276
                  </a>
                </span>
              </div>
              <div>
                <FontAwesomeIcon icon={faEnvelope} />

                <span className="font-semibold text-lg ml-5">
                  <a href="mailto:phuochuy1328@gmail.com" rel="noreferrer">
                    phuochuy1328@gmail.com
                  </a>
                </span>
              </div>
              <div>
                <FontAwesomeIcon icon={faLocationDot} />
                <span className="font-semibold text-lg ml-5">
                  Hau Giang Street, Ward 12, Distric 6, HCMC
                </span>
              </div>
              <div className="mt-5 font-semibold">
                Thanks you for visit my product. Call or message
                <FontAwesomeIcon icon={faArrowRight} /> me.
              </div>
            </div>
          </div>

          <ContactUs status={status.animate} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
