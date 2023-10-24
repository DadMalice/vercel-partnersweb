import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import herohands from '../../assets/hero-hands.jpg';
import { BiHeart, BiBandAid, BiSmile } from "react-icons/bi";
import ContactForm from '../../components/ContactForm';
import Services from '../3.Services/Services';

const Home = () => {
    return (
        <section className='mt-20 mb-0 lg:mx-0 lg:px-0'>
            <motion.div
                className="home-section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div id="home-section1" className="relative flex flex-col-reverse pt-16 lg:pt-0 lg:flex-col lg:pb-10">
                    <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-2xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                        <svg
                            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                            viewBox="0 0 100 100"
                            fill="currentColor"
                            preserveAspectRatio="none slice"
                        >
                            <path d="M50 0H100L50 100H0L50 0Z" />
                        </svg>
                        <img
                            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                            src={herohands}
                            alt="Partners Quality Care"
                        />
                    </div>

                    <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                Your Partners in Comfort
                            </h2>
                            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg text-justify">
                                Welcome to Partners Hospice Quality Care, where your comfort is our mission. With us, you're not just a patient; you're family. Discover care, dedication, and comfort all in one place.
                            </p>
                            <div className="flex items-center">
                                <button type="button" className="rounded border-2 border-green-800 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-green-700 hover:bg-opacity-50 hover:text-green-800 focus:border-black focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200" data-te-ripple-init data-te-ripple-color="light">
                                    Get started
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                <div id='about-section' className='grid gap-8 mx-3 px-2 mb-5 pb-1 py-10 xl:grid-cols-2 lg:mx-20 xs:mx-10 xs:px-0 md:items-start md:text-left bg-gree'>
                    <div className='max-w md:max-l'>
                        <h1 className='mb-10 text-center md:text-center font-sans lg:text-6xl xs:text-5xl text-4xl font-bold tracking-tight text-gray-900'>Partners Hospice Quality Care</h1>
                        <p className='text-justify mb-5 text-gray-700'>
                            <span className=''>Partners Hospice Quality Care LLC</span> is a California-licensed healthcare organization dedicated to delivering compassionate end-of-life support for individuals with terminal illnesses, as determined by their medical providers.
                        </p>
                        <p className='text-justify text-gray-700'>
                            At Partners Hospice Quality Care LLC, our unwavering commitment is to provide outstanding primary healthcare services rooted in establishing strong relationships and delivering individualized care. Our primary aim is to thoroughly understand your specific medical history, lifestyle, and personal objectives.
                        </p>

                        <h2 className='mt-10 mb-2 text-start md:text-start font-sans text-xl font-bold tracking-tight text-green-800'>Why Choose Hospice Care</h2>
                        <p className='text-justify mb-5 text-gray-700'>
                            When someone you love is facing a life threatening illness, Hospice Care is considered for quality, compassionate care at the end of life. Support is extended to patients' love ones, as well. Hospice Care provides a supportive environment that focuses on enhancing the quality of life for patients. It offers a personalized and holistic approach to care, tailoring services to the unique needs and wishes of each individual. Additionally, Hospice Care promotes open communication and shared decision-making, ensuring that patients and their families have a say in their care plan. This approach not only addresses the physical and medical needs of patients but also their emotional and psychological well-being. Choosing Hospice Care means prioritizing comfort, dignity, and the autonomy of your loved ones during a challenging time.
                        </p>
                    </div>
                    <div className='order-last lg:order-last md:order-last xs:order-last flex items-center'>
                        <img
                            src="https://img.freepik.com/free-photo/medium-shot-nurse-checking-man_23-2148940067.jpg?w=1380&t=st=1697165693~exp=1697166293~hmac=6db42008ba5765b0a12b1d3924519aa3d87dce4d40fe6b20cc276faf40de7a0d"
                            alt=''
                            className='w-full rounded-3xl h-auto md:h-auto lg:h-full'
                        />
                    </div>
                </div>

                <div className="w-full mt-10 bg-green-800">
                    <div className="flex justify-center items-center">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-10 my-8">
                            <div className="p-6 rounded-lg bg-transparent text-center">
                                <BiBandAid className="w-20 h-20 text-green-100 m-auto" />
                                <a href="#">
                                    <h5 className="mt-4 mb-4 text-2xl font-semibold tracking-tight text-white">
                                        Compassion
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-white">
                                    We genuinely care about our patients, their families, and the supportive environment we create. Our commitment to compassion defines our approach to healthcare.
                                </p>
                            </div>
                            <div className="p-6 rounded-lg bg-transparent text-center">
                                <BiSmile className="w-20 h-20 text-green-100 m-auto" />
                                <a href="#">
                                    <h5 className="mt-4 mb-4 text-2xl font-semibold tracking-tight text-white">
                                        Dedication
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-white">
                                    Dedication is our driving force at Partners Quality Care. Our team's dedication is the foundation of our patient-centered approach, ensuring that you receive the highest quality care.
                                </p>
                            </div>
                            <div className="p-6 rounded-lg bg-transparent text-center">
                                <BiHeart className="w-20 h-20 text-green-100 m-auto" />
                                <a href="#">
                                    <h5 className="mt-4 mb-4 text-2xl font-semibold tracking-tight text-white">
                                        Comprehensive Support
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-white">
                                    We ensure that every individual under our care receives the holistic support they require, addressing both their emotional and physical well-being.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id='services-section'>
                    <Services />
                </div>

                <div
                    id="contactform-section"
                    className="relative bg-cover bg-center bg-image-url p-5 md:p-10"
                    style={{ backgroundImage: "url('https://img.freepik.com/free-photo/female-patients-talking-hospital_23-2148981276.jpg?w=1380&t=st=1697348965~exp=1697349565~hmac=b1669bdd3ea539ce57fc744ecea0627739d5064ce8ba5a27b85946b000f7be49')" }}
                >
                    <ContactForm />
                </div>
            </motion.div>
        </section >
    );
}

export default Home;
