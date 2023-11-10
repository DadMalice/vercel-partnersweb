import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Alert from '../6.Contact/Alerts';

export const ContactUs = () => {
    const form = useRef();
    const [isAlertVisible, setIsAlertVisible] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_02psnek', 'template_wejc6fc', form.current, '_ibLEOO_fJCl2wPtg')
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
                setIsAlertVisible(true);
                setTimeout(() => {
                    window.location.reload();
                }, 5000);
            })
            .catch((error) => {
                console.log(error.text);
            });
    }

    return (
        <div>
            {isAlertVisible && <Alert />}
            <form ref={form} onSubmit={sendEmail}>
                <div className='relative mb-6'>
                    <label>Name</label>
                    <input type="text" name="user_name" className='peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none' />
                    <label>Email</label>
                    <input type="email" name="user_email" className='peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none' />
                    <label>Message</label>
                    <textarea name="message" className='peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none mb-3' />
                    <button type="submit" className='mb-6 w-full rounded bg-green-800 text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal lg:mb-0'>
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
};
