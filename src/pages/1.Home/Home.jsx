import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import herohands from '../../assets/hero-hands.jpg';
import { BiHeart, BiBandAid, BiSmile } from "react-icons/bi";
import ContactForm from '../../components/ContactForm';
import Hero from '../1.Home/Hero';
import FaqsAcc from '../1.Home/FaqsAccordion';
import Testimonials from '../5.Testimonials/Testimonials';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';

const Home = () => {

    const backgroundImage = `url(${herohands})`;

    const containerStyle = {
        backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "5px",

    };
    return (
        <section className='mt-20 mb-0 lg:mx-0 lg:px-0'>
            <motion.div
                className="home-section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div id='hero-section'>
                    <Hero />
                </div>

                <div id='about-section' className='grid gap-8 mx-6 lg:mx-28 lg:px-28 px-2 md:mb-5 pb-1 py-10 2xl:grid-cols-2 md:items-start md:text-left'>
                    <div className='order-last lg:mt-4 lg:order-first md:order-last xs:order-last flex items-center'>
                        <img
                            src={image1}
                            alt=''
                            className='w-full rounded-3xl h-auto md:h-auto lg:h-full'
                        />
                    </div>
                    <div className='max-w md:max-l'>
                        <h1 className='mb-10 lg:mt-10 text-center md:text-center font-sans lg:text-5xl xs:text-3xl text-2xl font-bold tracking-tight text-gray-900'>Partners Hospice Quality Care</h1>
                        <p className='text-justify mb-5 text-lg font-normal text-gray-800'>
                            <span className=''>Partners Hospice Quality Care LLC</span> is a California-licensed healthcare organization dedicated to delivering compassionate end-of-life support for individuals with terminal illnesses, as determined by their medical providers.
                        </p>
                        <p className='text-justify text-lg font-normal text-gray-800'>
                            At Partners Hospice Quality Care LLC, our unwavering commitment is to provide outstanding primary healthcare services rooted in establishing strong relationships and delivering individualized care.
                        </p>
                        <div className="flex justify-center mt-8">
                            <Link to="/about" target="_blank">
                                <button type="button" className="rounded border-2 border-green-800 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-green-700 hover:bg-opacity-50 hover:text-green-800 focus:border-black focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 transform hover:scale-105" data-te-ripple-init data-te-ripple-color="light">
                                    Learn more about us!
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>

                <div id='' className="w-11/12 mt-10 bg-green-800 rounded-xl flex mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-10 my-8">
                        <div className="p-6 rounded-lg bg-transparent text-center transform hover:scale-110 transition duration-150 ease-in-out">
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
                        <div className="p-6 rounded-lg bg-transparent text-center transform hover:scale-110 transition duration-150 ease-in-out">
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
                        <div className="p-6 rounded-lg bg-transparent text-center transform hover:scale-110 transition duration-150 ease-in-out">
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

                <div id='services-section' className='grid gap-8 mx-6 lg:mx-28 lg:px-28 px-2 md:mb-5 pb-1 py-10 2xl:grid-cols-2 md:items-start md:text-left'>
                    <div className='order-first lg:mt-4 lg:order-last md:order-first xs:order-first flex items-center'>
                        <img
                            src={image2}
                            alt=''
                            className='w-full rounded-3xl h-auto md:h-auto lg:h-full'
                        />
                    </div>
                    <div className='max-w md:max-l'>
                        <h1 className='mb-10 lg:mt-8 text-center md:text-center font-sans lg:text-5xl xs:text-3xl text-2xl font-bold tracking-tight text-gray-900'>Services We Offer</h1>
                        <p className='text-justify mb-5 text-lg font-normal font-sans text-gray-800'>
                            Partners Hospice Quality Care LLC, Inc offers a range of services to patients and their families, providing compassionate and comprehensive care. Our services include:
                        </p>
                        <ul className="list-disc ml-6 text-lg font-normal font-sans text-gray-800">
                            <li className="mb-4">
                                <strong>Hospice Care:</strong> We provide specialized care to individuals who are facing a terminal illness and have a life expectancy of six months or less.
                            </li>
                            <li className="mb-4">
                                <strong>End of Life Care:</strong> We ensure individuals who are in the last stages of their life experience comfortable and quality end-of-life care.
                            </li>
                            <li className="mb-4">
                                <strong>Palliative Care:</strong> Our team specializes in providing medical care to relieve physical pain, manage symptoms, and improve the overall quality of life for individuals with life-limiting illnesses.
                            </li>
                        </ul>

                        <div className="flex justify-center mt-6">
                            <Link to="/about" target="_blank">
                                <button type="button" className="rounded border-2 border-green-800 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-green-700 hover:bg-opacity-50 hover:text-green-800 focus:border-black focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 transform hover:scale-105" data-te-ripple-init data-te-ripple-color="light">
                                    Learn more about our services!
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>

                <div id='faqs-section' className='pt-8'>
                    <FaqsAcc />
                </div>

                <div id='testimonials-section' className='pt-4'>
                    <Testimonials />
                </div>

                <div id="contactform-section" className="relative bg-cover bg-center bg-image-url mt-14 p-5 md:p-10" style={containerStyle}>
                    <ContactForm />
                </div>
            </motion.div>
        </section >
    );
}

export default Home;
