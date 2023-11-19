import React from 'react'
import { motion } from 'framer-motion';
import { BiPhoneCall } from "react-icons/bi";
import { BiMapAlt } from "react-icons/bi";
import { BiEnvelope } from "react-icons/bi";
import { BiTime } from "react-icons/bi";
import { ContactUs } from '../6.Contact/EmailJS';

const fadeInAnimationsVariantE = {
    initial: {
        opacity: 0,
        y: -100,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
        },
    },
}

const fadeInAnimationsVariantC = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: 1,
            ease: [0, 0.71, 0.2, 1.01]
        },
    },
}

const Contact = () => {
    return (
        <motion.div
            className="contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                variants={fadeInAnimationsVariantE}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, }}
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
                    <motion.div
                        variants={fadeInAnimationsVariantC}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, }}
                    >
                        <div class="mt-24 flex justify-center items-center">
                            <div class="container px-6 md:px-12">
                                <div
                                    class="block rounded-lg bg-white px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
                                    <div class="flex flex-wrap">
                                        <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                                            <ContactUs />
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
                    </motion.div>
                </div>
            </motion.div>
        </motion.div >
    )
}

export default Contact