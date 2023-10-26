import React from "react";

const ServiceCard = ({ title, details, icon }) => {
    return (
        <div className="w-full md:w-1/2 lg:w-1/3 p-4 my-4">
            <div className="flex items-center bg-white rounded-lg shadow-lg p-4">
                <div className="rounded-full bg-primary">{icon}</div>
                <div>
                    <h3 className="text-xl font-semibold text-dark">{title}</h3>
                    <p className="text-body-color mt-2">{details}</p>
                </div>
            </div>
        </div>
    );
};

const Services = () => {
    return (
        <section className="pt-40 pb-12 flex justify-center items-center">
            <div className="container">
                <div className="flex flex-wrap mx-4">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-12 max-w-[510px] text-center">
                            <h2 className="mb-4 text-4xl font-bold text-dark sm:text-5xl text-green-800">
                                Our Services
                            </h2>
                            <p className="text-body-color">
                                Partners Hospice Quality Care delivers symptom management, pain control, and a range of support services to patients and families in the comfort of their own homes.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap mx-4">
                    <ServiceCard
                        title="Hospice Medical Director"
                        details="Works with patient's referring physician for the medical direction of patients' care."
                    />
                    <ServiceCard
                        title="Home Care Visits"
                        details="By registered nurses and licensed practical nurses to monitor patient's conditions and to provide appropriate care."
                    />
                    <ServiceCard
                        title="Medical Social Worker"
                        details="Offers counseling for family members and provide resources for a variety of community services."
                    />
                    <ServiceCard
                        title="Home health hospice aide"
                        details="Attending to the patients' personal needs and homemaker services."
                    />
                    <ServiceCard
                        title="Bereavement Counseling"
                        details="We dejoy working with discerning clients, people for whom quality, service, integrity & aesthetics."
                    />
                    <ServiceCard
                        title="Respite care education"
                        details="For maintaining a high standard of care and support for both families and the patient they assist."
                    />
                </div>
            </div>
        </section>
    );
};

export default Services;
