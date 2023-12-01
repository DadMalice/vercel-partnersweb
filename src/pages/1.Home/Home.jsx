import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import herohands from '../../assets/hero-hands.jpg';
import { BiHeart, BiBandAid, BiSmile } from "react-icons/bi";
import ContactForm from '../../components/ContactForm';
import Hero from '../1.Home/Hero';
import FaqsAcc from '../1.Home/FaqsAccordion';
import Testimonials from '../5.Testimonials/Testimonials';
import hero1 from '../../assets/hero1.jpg';
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

    const fadeInAnimationsVariantA = {
        initial: {
            opacity: 0,
            x: 100,
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01]
            },
        },
    }

    const fadeInAnimationsVariantB = {
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

    const fadeInAnimationsVariantC = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 1,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            },
        },
    }

    const fadeInAnimationsVariantD = {
        initial: {
            opacity: 0,
            x: -100,
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                delay: 1,
                ease: [0, 0.71, 0.2, 1.01]
            },
        },
    }

    return (
        <section className='mt-20 mb-0 lg:mx-0 lg:px-0'>
            <motion.div
                className="home-section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.5,
                    delay: 0.3,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    variants={fadeInAnimationsVariantC}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, }}
                    style={{ zIndex: -1 }}
                >
                    <div id='hero-section' style={{ zIndex: -1 }}>
                        <Hero />
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeInAnimationsVariantB}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, }}
                    style={{ zIndex: 1 }}
                >
                    <div id='about-section' style={{ zIndex: 1 }} className='grid gap-8 mx-6 lg:mx-28 lg:px-28 px-2 -mt-20 md:mb-5 pb-10 py-10 2xl:grid-cols-2 md:items-start md:text-left bg-white shadow-xl rounded-xl'>
                        <div className='order-last lg:mt-4 lg:order-first md:order-last xs:order-last flex items-center'>
                            <img
                                src={hero1}
                                alt=''
                                className='w-full rounded-3xl h-auto md:h-auto lg:h-full'
                            />
                        </div>
                        <div className='max-w md:max-l'>
                            <h1 className='mb-10 mx-2 lg:mt-10 text-center md:text-center font-sans lg:text-5xl xs:text-4xl text-4xl font-bold tracking-tight text-gray-900'>Partners Hospice Quality Care</h1>
                            <p className='text-justify mx-5 mb-5 text-lg font-normal text-gray-800'>
                                <span className=''>Partners Hospice Quality Care LLC</span> is a California-licensed healthcare organization dedicated to delivering compassionate end-of-life support for individuals with terminal illnesses, as determined by their medical providers.
                            </p>
                            <p className='text-justify mx-4 text-lg font-normal text-gray-800'>
                                At Partners Hospice Quality Care LLC, our unwavering commitment is to provide outstanding primary healthcare services rooted in establishing strong relationships and delivering individualized care.
                            </p>
                            <div className="flex justify-center mt-8">
                                <Link to="/about">
                                    <button class="text-sm font-medium uppercase leading-normal border-2 border-green-800 px-[46px] pt-[14px] pb-[12px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-black">
                                        Learn more about us!
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeInAnimationsVariantA}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, }}
                >
                    <div className="w-11/12 mt-10 bg-green-800 rounded-xl flex mx-auto">
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
                </motion.div>

                <motion.div
                    variants={fadeInAnimationsVariantD}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, }}
                >
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
                                <Link to="/services">
                                    <button class="text-sm font-medium uppercase leading-normal border-2 border-green-800 px-[46px] pt-[14px] pb-[12px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-black">
                                        Learn more about our services!
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeInAnimationsVariantC}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, }}
                >
                    <div id='testimonials-section' className='mt-4'>
                        <Testimonials />
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeInAnimationsVariantC}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, }}
                >
                    <div id='faqs-section' className='mt-2'>
                        <FaqsAcc />
                    </div>
                </motion.div>

                <div id="contactform-section" className="relative bg-cover bg-center bg-image-url mt-14 p-5 md:p-10" style={containerStyle}>
                    <ContactForm />
                </div>
            </motion.div>
        </section >
    );
}

export default Home;
