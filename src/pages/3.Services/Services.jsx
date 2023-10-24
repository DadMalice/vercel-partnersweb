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
        <section className="pt-20 pb-12 flex justify-center items-center">
            <div className="container">
                <div className="flex flex-wrap mx-4">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-12 max-w-[510px] text-center">
                            <span className="block mb-2 text-lg font-semibold text-primary">
                                Our Services
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                                What We Offer
                            </h2>
                            <p className="text-base text-body-color">
                                There are many variations of passages of Lorem Ipsum available
                                but the majority have suffered alteration in some form
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
                        title="Refreshing Design"
                        details="We dejoy working with discerning clients, people for whom quality, service, integrity & aesthetics."
                    />
                    <ServiceCard
                        title="Refreshing Design"
                        details="We dejoy working with discerning clients, people for whom quality, service, integrity & aesthetics."
                    />
                    <ServiceCard
                        title="Refreshing Design"
                        details="We dejoy working with discerning clients, people for whom quality, service, integrity & aesthetics."
                    />
                </div>
            </div>
        </section>
    );
};

export default Services;
