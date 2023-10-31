import React, { useState } from "react";

const Accordion = () => {
    return (
        <section className="relative z-20 overflow-hidden pt-10 pb-2 lg:pt-[20px] lg:pb-[40px] rounded-lg bg-white">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[10px] max-w-[600px] text-center lg:-mb-2">
                            <span className="mb-2 block text-4xl text-green-800 font-sans font-semibold text-primary">
                                FAQs
                            </span>
                            <h2 className="mb-0 text-3xl font-sans font-bold tracking-tight text-black text-dark md:text-5xl">
                                Any Questions? Look Here
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="grid divide-y divide-neutral-200 w-10/12 mx-auto mt-4">
                    <div className="my-4">
                        <details className="group bg-green-800 p-5 rounded-xl">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span className="text-white"> Is hospice exclusively for end-of-life situations?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg
                                        fill="none"
                                        height="24"
                                        shapeRendering="geometricPrecision"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        width="24"
                                    >
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </span>
                            </summary>
                            <p className="text-white mt-3 group-open:animate-fadeIn">
                                The term "hospice" might sound daunting to some, but its services could play a crucial role in your or your loved one's care. While "end of life" care is a part of what hospice provides, it's just a small component. Hospice also offers care for chronic illnesses, pain management, and spiritual solace.
                            </p>
                        </details>
                    </div>
                    <div>
                        <details className="group bg-green-800 p-5 rounded-xl">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span className="text-white"> Who is eligible for hospice care?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg
                                        fill="none"
                                        height="24"
                                        shapeRendering="geometricPrecision"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        width="24"
                                    >
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </span>
                            </summary>
                            <p className="text-white mt-3 group-open:animate-fadeIn">
                                Must be entitled to Part A of Medicare; or must be a Medi-Cal beneficiary or covered by a private insurance.
                            </p>
                        </details>
                    </div>
                    <div className="my-4">
                        <details className="group bg-green-800 p-5 rounded-xl">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span className="text-white"> Who pays for hospice care?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg
                                        fill="none"
                                        height="24"
                                        shapeRendering="geometricPrecision"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        width="24"
                                    >
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </span>
                            </summary>
                            <p className="text-white mt-3 group-open:animate-fadeIn">
                                Medicare, private health insurance, and Medicaid cover hospice are for patients who meet eligibility criteria. As with any healthcare program, there may be co-pays and deductibles that families pay to recieve care.
                            </p>
                        </details>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accordion;

const AccordionItem = ({ header, text }) => {
    const [active, setActive] = useState(false);

    const handleToggle = () => {
        event.preventDefault();
        setActive(!active);
    };
    return (
        <div className="single-faq mb-8 w-full rounded-lg border border-[#29812650] bg-green-800 p-6 sm:p-8 lg:px-6 xl:px-12">
            <button
                className={`faq-btn flex w-full text-left`}
                onClick={() => handleToggle()}
            >
                <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
                    <svg
                        className={`duration-200 ease-in-out fill-primary stroke-primary ${active ? "rotate-180" : ""
                            }`}
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                            fill=""
                            stroke=""
                        />
                    </svg>
                </div>

                <div className="w-full">
                    <h4 className="text-lg font-semibold text-white py-2">{header}</h4>
                </div>
            </button>

            <div
                className={`pl-[62px] duration-200 ease-in-out ${active ? "block" : "hidden"
                    }`}
            >
                <p className="py-3 text-base leading-relaxed text-body-color text-white">{text}</p>
            </div>
        </div>
    );
};
