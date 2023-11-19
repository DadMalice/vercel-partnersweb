import React from "react";
import { motion } from 'framer-motion';
import s1 from '../../assets/s1.jpg';
import s2 from '../../assets/s2.jpg';
import s3 from '../../assets/s3.jpg';
import s4 from '../../assets/s4.jpg';
import s5 from '../../assets/s5.jpg';
import s6 from '../../assets/s6.jpg';

const ServiceCard = ({ title, details, image }) => {
    return (
        <div className="block m-0 w-full md:w-1/2 lg:w-1/3 p-4 my-1 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <div className="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
                <img className="rounded-t-lg w-full" src={image} alt="" />
            </div>
            <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                    {title}
                </h5>
                <p className="mb-4 text-base text-neutral-600">
                    {details}
                </p>
            </div>
        </div>
    );
};

const headStyle = {
    background: "radial-gradient(circle, rgba(34,197,94,1) 0%, rgba(22,101,52,1) 100%)",
    color: 'white',
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
            delay: 1,
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

const Services = () => {
    return (
        <motion.div
            className="services"
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
                <div className="animated-gradient-background-header mt-24">
                    <header className="m-0 p-10 relative">
                        <div className="flex-col gap-1 w-full">
                            <p className="pt-2 text-4xl font-bold text-dark sm:text-5xl text-center text-white">Our Services</p>
                            <p className="pt-4 text-lg text-center text-white">
                                Partners Hospice Quality Care delivers symptom management, pain control, and a range of support services to patients and families in the comfort of their own homes.
                            </p>
                        </div>
                    </header>
                </div>
            </motion.div>

            <motion.div
                variants={fadeInAnimationsVariantA}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, }}
            >
                <div className='max-w md:max-l m-8 xl:mx-28 xl:px-28'>
                    <p className='text-justify mb-2 font-sans text-lg font-normal text-gray-800'>
                        <span className="text-green-800 font-semibold">Partners Hospice Quality Care</span> offers a range of services to patients and their families, providing compassionate and comprehensive care.
                    </p>
                    <p className="font-sans mb-2 text-lg font-bold text-gray-800">Our services include:</p>
                    <ul className="list-disc ml-6 text-lg md:mx-10 font-normal font-sans text-gray-800">
                        <li className="mb-4">
                            <strong className="text-green-800">Hospice Care:</strong> We provide specialized care to individuals who are facing a terminal illness and have a life expectancy of six months or less.
                        </li>
                        <li className="mb-4">
                            <strong className="text-green-800">End of Life Care:</strong> We ensure individuals who are in the last stages of their life experience comfortable and quality end-of-life care.
                        </li>
                        <li className="mb-4">
                            <strong className="text-green-800">Palliative Care:</strong> Our team specializes in providing medical care to relieve physical pain, manage symptoms, and improve the overall quality of life for individuals with life-limiting illnesses.
                        </li>
                    </ul>
                </div>
            </motion.div>

            <motion.div
                variants={fadeInAnimationsVariantB}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, }}
            >
                <div className="flex justify-center items-center">
                    <div className="container">
                        <div className="flex flex-wrap m-1">
                            <ServiceCard
                                image={s1}
                                title="Hospice Medical Director"
                                details="Works with patient's referring physician for the medical direction of patients' care."
                            />
                            <ServiceCard
                                image={s2}
                                title="Home Care Visits"
                                details="By registered nurses and licensed practical nurses to monitor patient's conditions and to provide appropriate care."
                            />
                            <ServiceCard
                                image={s3}
                                title="Medical Social Worker"
                                details="Offers counseling for family members and provide resources for a variety of community services."
                            />
                            <ServiceCard
                                image={s4}
                                title="Home health hospice aide"
                                details="Attending to the patients' personal needs and homemaker services."
                            />
                            <ServiceCard
                                image={s5}
                                title="Respite care education"
                                details="For maintaining a high standard of care and support for both families and the patient they assist."
                            />
                            <ServiceCard
                                image={s6}
                                title="Bereavement Counseling"
                                details="A support provided to individuals who are grieving the loss of a loved one, typically after death."
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Services;
