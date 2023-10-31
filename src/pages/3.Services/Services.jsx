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
        <div className="block w-full md:w-1/2 lg:w-1/3 p-4 my-4 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
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

const Services = () => {
    return (
        <motion.div
            className="services"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className='mt-24'>
                <header className="m-0 p-10 relative" style={headStyle}>
                    <div className="flex-col gap-1 w-full">
                        <p className="pt-2 text-4xl font-bold text-dark sm:text-5xl text-center text-white">Our Services</p>
                        <p className="pt-4 text-lg text-center text-white">
                            Partners Hospice Quality Care delivers symptom management, pain control, and a range of support services to patients and families in the comfort of their own homes.
                        </p>
                    </div>
                </header>
            </div>
            <div className='max-w md:max-l m-8 md:mx-28 md:px-28'>
                <p className='text-justify mb-5 text-lg md:text-2xl font-bold font-sans text-black'>
                    <span className="text-green-800">Partners Hospice Quality Care</span> offers a range of services to patients and their families, providing compassionate and comprehensive care. Our services include:
                </p>
                <ul className="list-disc ml-6 text-lg md:text-2xl md:mx-10 font-normal font-sans text-gray-800">
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
            <div className="flex justify-center items-center">
                <div className="container">
                    <div className="flex flex-wrap mx-4">
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
    );
};

export default Services;
