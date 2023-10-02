import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastMessage } from '../ToastMessage';

const ContactUs = ({ status }) => {
    const form = useRef();

    const [listToast, setListToast] = useState([]);
    let toastProperties = null;

    const showToast = type => {
        type === 200
            ? (toastProperties = {
                  id: listToast.length + 1,
                  title: 'Success',
                  border: 'border-lime-500',
                  color: 'text-lime-500',
                  description: 'Oke, Your email has been sent.',
              })
            : (toastProperties = {
                  id: listToast.length + 1,
                  title: 'Error',
                  border: 'border-red-500',
                  color: 'text-red-500',
                  description: 'Sorry, Your mail or form problem.',
              });
        setListToast([...listToast, toastProperties]);
    };

    const sendEmail = e => {
        e.preventDefault();

        if (listToast.length > 4) {
            return e.preventDefault();
        }

        emailjs
            .sendForm(
                'service_d8lrwug',
                'template_u6ezqbb',
                form.current,
                '-a9QY_SRgjNtDAEmV',
            )
            .then(
                result => {
                    showToast(result.status);
                },
                error => {
                    showToast(error.status);
                },
            );
    };

    return (
        <form
            className="flex justify-center items-center w-3/5 md:w-[100%] md:mb-12 overflow-hidden"
            ref={form}
            onSubmit={sendEmail}>
            <div
                className={`flex flex-col justify-center items-start w-4/5 ${
                    status === 'true' && 'animate-translateXReverse'
                }`}>
                <div className="mt-5 font-semibold text-left w-full">
                    <input
                        ref={form}
                        className="text-black w-full p-3 pl-3  rounded-lg "
                        type="text"
                        name="user_name"
                        placeholder="Full Name"
                        required
                    />
                </div>

                <div className="mt-5 font-semibold text-left w-full">
                    <input
                        ref={form}
                        className="text-black w-full p-3 pl-3  rounded-lg "
                        type="email"
                        name="user_email"
                        placeholder="Email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        required
                    />
                </div>

                <div className="mt-5 font-semibold text-left w-full">
                    <textarea
                        ref={form}
                        className="p-3 pt-3 pl-3 text-black w-full h-[150px] rounded-lg"
                        name="message"
                        placeholder="Message"
                        required
                    />
                </div>

                <div className="text-right w-full">
                    <input
                        className="rounded-lg bg-blue-700 mt-12 w-[150px] h-12 font-bold  shadow-2xl cursor-pointer"
                        type="submit"
                        value="Send"
                    />
                </div>
            </div>

            <ToastMessage listToast={listToast} setListToast={setListToast} />
        </form>
    );
};

export default ContactUs;
