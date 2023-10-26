import React, { useState } from "react";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        tel: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here
        console.log("Form submitted with data:", formData);
    };

    return (
        <div className="relative flex items-top justify-center bg-green-800 bg-opacity-90 sm:items-center sm:pt-0 sm:mx-20 sm:my-10 rounded-xl">
            <div className="max-w-6xl mx-auto sm:py-6 sm:px-6 lg:px-8">
                <div className="mt-2 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-6 mr- sm:rounded-lg">
                            <h1 className="text-4xl sm:text-5xl text-white font-bold tracking-tight text-center">
                                Looking for assistance?
                            </h1>
                            <p className="text-normal text-lg sm:text-2xl font-medium text-white mt-3 text-center">
                                We will be in touch in no time.
                            </p>

                            <div className="flex items-center mt-8 text-white">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-white"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <div className="ml-4 text-lg tracking-wide font-semibold w-auto">
                                    317 W. La Habra Blvd. Suite 200 La Habra, CA 90631
                                </div>
                            </div>

                            <div className="flex items-center mt-4 text-white">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-white"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l
                    1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <div className="ml-4 text-lg tracking-wide font-semibold w-40">
                                    (562) 245-7580
                                </div>
                            </div>

                            <div className="flex items-center mt-2 text-white">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-white"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <div className="ml-4 text-lg tracking-wide font-semibold w-40">
                                    partnersqlc@gmail.com
                                </div>
                            </div>
                        </div>

                        <form className="p-6 flex flex-col justify-center" onSubmit={handleSubmit}>
                            <div className="flex flex-col">
                                <label htmlFor="name" className="hidden">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 dark:border-gray-700 text-black 
                                    font-semibold focus:border-indigo-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label htmlFor="email" className="hidden">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 dark:border-gray-700 text-black 
                                    font-semibold focus:border-indigo-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label htmlFor="tel" className="hidden">
                                    Number
                                </label>
                                <input
                                    type="tel"
                                    name="tel"
                                    id="tel"
                                    placeholder="Telephone Number"
                                    value={formData.tel}
                                    onChange={handleChange}
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 dark:border-gray-700 text-black 
                                    font-semibold focus:border-indigo-500 focus:outline-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-1/2 mx-auto text-center rounded-xl border-2 mt-8 border-green-800 bg-white px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:border-neutral-100 hover:text-green-800 focus:border-black focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 transform hover:scale-105" data-te-ripple-init data-te-ripple-color="light">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;