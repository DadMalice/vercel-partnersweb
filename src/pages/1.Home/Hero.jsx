import React from "react";

const heroStyle = {
    height: '75vh',
    background: "radial-gradient(circle, rgba(34,197,94,1) 0%, rgba(22,101,52,1) 100%)",
    color: 'white',
};

function Hero() {
    return (
        <div style={heroStyle}>
            <div className="h-full flex flex-col justify-center items-center">
                <div className="pb-4 px-8 text-center lg:w-1/2 w-9/12 bg-black bg-opacity-25 rounded-xl">
                    <h1 className="mt-10 mb-10 lg:text-6xl xs:text-5xl text-2xl font-bold leading-tight">
                        Your Partners in Comfort
                    </h1>
                    <p className="-mt-4 mb-5 text-base text-white md:text-lg text-center">
                        Welcome to Partners Hospice Quality Care, where your comfort is our mission. With us, you're not just a patient; you're family. Discover care, dedication, and comfort all in one place.
                    </p>
                    <div className="flex justify-center mx-auto mb-4">
                        <button type="button" className="rounded-full border-2 border-green-800 bg-white px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:border-neutral-100 hover:text-green-800 focus:border-black focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 transform hover:scale-105" data-te-ripple-init data-te-ripple-color="light">
                            Get started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
