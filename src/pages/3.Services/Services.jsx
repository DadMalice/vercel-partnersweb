
const Services = () => {
    return (
        <motion.div
            id='services-section'
            className="services"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
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
        </motion.div>
    )
}

export default Services