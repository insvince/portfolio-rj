import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = ({ status }) => {
  const form = useRef();

  const resultText = (text) => {
    document.querySelector(".result").textContent = text;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2928399",
        "template_7j95yd9",
        form.current,
        "-a9QY_SRgjNtDAEmV"
      )
      .then(
        (result) => {
          resultText(`Send ${result.text}`);

          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      className="flex justify-center items-center w-3/5"
      ref={form}
      onSubmit={sendEmail}
    >
      <div
        className={`flex flex-col justify-center items-start w-4/5 ${
          status === "true" && "animate-translateXReverse"
        }`}
      >
        <div className=" mt-5  font-semibold text-left w-full">
          <input
            className="text-black w-full p-3 pl-3  rounded-lg "
            type="text"
            name="user_name"
            placeholder="Full Name"
          />
        </div>

        <div className=" mt-5  font-semibold text-left w-full">
          <input
            className="text-black w-full p-3 pl-3  rounded-lg "
            type="email"
            name="user_email"
            placeholder="Email"
          />
        </div>

        <div className=" mt-5  font-semibold text-left w-full">
          <textarea
            className="p-3 pt-3 pl-3 text-black w-full h-[150px] rounded-lg"
            name="message"
            placeholder="Message"
          />
        </div>
        <div className="text-right w-full relative">
          <input
            className=" rounded-lg bg-blue-700 mt-12 w-[150px] h-12 font-bold  shadow-2xl cursor-pointer"
            type="submit"
            value="Send"
          />
          <div className="result absolute bottom-0 w-[150px] h-12 text-center flex items-center justify-center font-bold text-lime-400 text-xl"></div>
        </div>
      </div>
    </form>
  );
};

export default ContactUs;
