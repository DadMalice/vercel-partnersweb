import React from 'react'
import { motion } from 'framer-motion';
import { BiPhoneCall } from "react-icons/bi";
import { BiMapAlt } from "react-icons/bi";
import { BiEnvelope } from "react-icons/bi";
import { BiTime } from "react-icons/bi";

const Contact = () => {
    return (
        <motion.div
            className="contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="animated-gradient-background-header mt-24 pb-24">
                <header className="m-0 p-10 relative">
                    <div className="flex-col gap-1 w-full">
                        <p className="pt-2 text-4xl font-bold text-dark sm:text-5xl text-center text-white">Contact Us</p>
                        <p className="pt-4 text-lg text-center text-white">
                            Whether you have questions, feedback, or want to collaborate, we're here to assist.
                        </p>
                    </div>
                </header>
                <div class="mt-24 flex justify-center items-center">
                    <div class="container px-6 md:px-12">
                        <div
                            class="block rounded-lg bg-white px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
                            <div class="flex flex-wrap">
                                <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                                    <form>
                                        <div class="relative mb-6" data-te-input-wrapper-init>
                                            <input type="text"
                                                class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                                                id="exampleInput90" />
                                            <label
                                                class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.7rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                                                for="exampleInput90">Name
                                            </label>
                                        </div>
                                        <div class="relative mb-6" data-te-input-wrapper-init>
                                            <input type="email"
                                                class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                                                id="exampleInput91" />
                                            <label
                                                class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.7rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                                                for="exampleInput91">Email address
                                            </label>
                                        </div>
                                        <div class="relative mb-6" data-te-input-wrapper-init>
                                            <textarea
                                                class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                                                id="exampleFormControlTextarea1" rows="3"></textarea>
                                            <label for="exampleFormControlTextarea1"
                                                class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.7rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none ">Message</label>
                                        </div>
                                        <div class="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                                            <input
                                                class="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent "
                                                type="checkbox" value="" id="exampleCheck96" checked />
                                            <label class="inline-block pl-[0.15rem] hover:cursor-pointer" for="exampleCheck96">
                                                Send me a copy of this message
                                            </label>
                                        </div>
                                        <button type="button"
                                            class="mb-6 w-full rounded bg-green-800 text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal   lg:mb-0">
                                            Send
                                        </button>
                                    </form>
                                </div>
                                <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                                    <div class="flex flex-wrap">
                                        <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                                            <div class="flex items-start">
                                                <div class="shrink-0">
                                                    <div class="inline-block rounded-md  p-4 text-primary">
                                                        <div class="inline-block rounded-md text-primary">
                                                            <BiPhoneCall size={40} color="green" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="grow">
                                                    <p class="mb-2 font-bold ">
                                                        Telephone
                                                    </p>
                                                    <p class="text-sm text-neutral-500">
                                                        (562) 245-7580
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                                            <div class="flex items-start">
                                                <div class="shrink-0">
                                                    <div class="inline-block rounded-md  p-4 text-primary">
                                                        <BiEnvelope size={40} color="green" />
                                                    </div>
                                                </div>
                                                <div class="grow">
                                                    <p class="mb-2 font-bold ">Email</p>
                                                    <p class="text-neutral-500 text-sm"> partnershospicequalitycare@gmail.com
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                                            <div class="align-start flex">
                                                <div class="shrink-0">
                                                    <div class="inline-block rounded-md  p-4 text-primary">
                                                        <BiMapAlt size={40} color="green" />
                                                    </div>
                                                </div>
                                                <div class="grow">
                                                    <p class="mb-2 font-bold ">
                                                        Address
                                                    </p>
                                                    <p class="text-sm text-neutral-500">
                                                        317 W. La Habra Blvd.
                                                    </p>
                                                    <p class="text-sm text-neutral-500">
                                                        Suite 200 La Habra,
                                                    </p>
                                                    <p class="text-sm text-neutral-500">
                                                        CA 90631
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                                            <div class="align-start flex">
                                                <div class="shrink-0">
                                                    <div class="inline-block rounded-md  p-4 text-primary">
                                                        <BiTime size={40} color="green" />
                                                    </div>
                                                </div>
                                                <div class="grow">
                                                    <p class="mb-2 font-bold ">
                                                        Office Hours
                                                    </p>
                                                    <p class="text-sm text-neutral-500">
                                                        Monday to Friday
                                                    </p>
                                                    <p class="text-sm text-neutral-500">
                                                        9:00 AM - 5:00 PM
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div >
    )
}

export default Contact