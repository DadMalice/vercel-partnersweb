import React from 'react';
import { motion } from 'framer-motion';
import herohands from '../../assets/hero-hands.jpg';
import { BiHeart, BiBandAid, BiSmile } from "react-icons/bi";
import ContactForm from '../../components/ContactForm';

const Home = () => {
    return (
        <section className='mt-20 mb-10 lg:mx-0 lg:px-0'>
            <motion.div
                className="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className="relative flex flex-col-reverse pt-16 lg:pt-0 lg:flex-col lg:pb-10">
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

                <div className='grid gap-8 mx-3 px-2 mb-5 pb-1 py-10 xl:grid-cols-2 lg:mx-20 xs:mx-10 xs:px-0 md:items-start md:text-left bg-gree'>
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

                <div className="container mt-10 mx-auto md:mx-auto px-0">
                    <section className="mb-10">
                        <h2 className="mb-10 text-center text-5xl md:text-6xl font-bold text-green-800">Our Services</h2>

                        <div className="mb-10 flex flex-wrap bg-green-800 bg-opacity-100 rounded-lg">
                            <div className="mb-6 w-full shrink-0 grow-0 basis-auto 2xl:mb-0 2xl:w-6/12 2xl:pr-6">
                                <div className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20">
                                    <img src="https://img.freepik.com/free-photo/doctor-helping-senior-patient_23-2148962321.jpg?w=1380&t=st=1697338291~exp=1697338891~hmac=1a055a8ebd7bdd26fd76f970a09b64b6207186d7255566f1152061e5766dd14b" className="w-full" alt="Louvre" />
                                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                    </div>
                                </div>
                            </div>

                            <div className="w-full px-8 shrink-0 grow-0 basis-auto 2xl:w-6/12 2xl:pl-6">
                                <h3 className="mt-0 2xl:mt-10 mb-8 text-4xl text-white font-bold text-center 2xl:text-left">For Patients</h3>
                                <p className="mb-4 text-white text-justify 2xl:text-left">
                                    <span className='font-bold text-white'>Hospice medical director</span> works with patient's referring physician for the medical direction of patients' care.
                                </p>
                                <p className="mb-4 text-white text-justify 2xl:text-left">
                                    <span className='font-bold text-white'>Home care visits</span> by registered nurses and licensed practical nurses to monitor patient's conditions and to provide appropriate care and maintain
                                </p>
                                <p className="mb-4 text-white text-justify 2xl:text-left">
                                    <span className='font-bold text-white'>Medical Social Worker</span> offers counseling for family members and provide resources for a variety of community services.
                                </p>
                                <p className="mb-4 text-white text-justify 2xl:text-left">
                                    <span className='font-bold text-white'>Home care visits</span> by registered nurses and licensed practical nurses to monitor patient's conditions and to provide appropriate care and maintain
                                </p>
                                <p className="mb-4 text-white text-justify 2xl:text-left">
                                    <span className='font-bold text-white'>Home health hospice aide and homemaker services</span> attending to the patients' personal needs.
                                </p>
                                <p className="mb-4 text-white text-justify 2xl:text-left">
                                    <span className='font-bold text-white'>Bereavement Counseling</span> to help patients' and their love ones with grief and loss.
                                </p>
                            </div>
                        </div>

                        <div className="mb-10 flex flex-wrap lg:flex-row-reverse bg-green-800 bg-opacity-100 rounded-lg">
                            <div className="mb-6 w-full shrink-0 grow-0 basis-auto 2xl:mb-0 2xl:w-6/12 2xl:pr-0">
                                <div className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20">
                                    <img src="https://img.freepik.com/free-photo/people-looking-picture-albums_23-2149444441.jpg?w=1380&t=st=1697337371~exp=1697337971~hmac=012e0fd63a32e2616613a2025ba75291d01668234be8ef4e0bfc0cb9bf998648" className="w-full" alt="Louvre" />
                                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                    </div>
                                </div>
                            </div>

                            <div className="w-full px-8 shrink-0 grow-0 basis-auto 2xl:w-6/12 2xl:pl-6">
                                <h3 className="mt-0 2xl:mt-10 mb-8 text-4xl text-white font-bold text-center 2xl:text-right">For Families</h3>
                                <p className="mb-4 text-white text-justify 2xl:text-right">
                                    <span className='font-bold text-white'>Provide counseling</span> in emotional and spiritual.
                                </p>
                                <p className="mb-4 text-white text-justify 2xl:text-right">
                                    <span className='font-bold text-white'>Respite care education</span> for maintaining a high standard of care and support for both families and the patient they assist.
                                </p>
                                <p className="mb-4 text-white text-justify 2xl:text-right">
                                    <span className='font-bold text-white'>Bereavement support</span> to offer compassion, comfort, and practical guidance to those who are mourning a loss, helping them navigate their grief and gradually find ways to heal and rebuild their lives.
                                </p>
                                <div className="mx-5 mb-5 pt-4 pb-4 2xl:mt-10 2xl:pt-10 text-center 2xl:text-center">
                                    <button
                                        type="button"
                                        className="rounded border-2 px-[100px] pt-[14px] pb-[14px] text-sm font-medium uppercase leading-normal transition duration-150 ease-in-out transform scale-100 hover:scale-110 focus:border-black focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-20 hover:bg-green-600 text-white hover:border-neutral-100">
                                        Request an Appointment
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
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
                <div
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
