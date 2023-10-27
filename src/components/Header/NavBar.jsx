import React, { useState, useEffect } from 'react';
import partnersP from '../../assets/Partners_P.png';
import { BiCalendarCheck } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const MOBILE_BREAKPOINT = 640;
const MOBILE_BREAKPOINT2 = 768;

function MobileView({ appointmentLink }) {
    return (
        <a href={appointmentLink}>
            <BiCalendarCheck
                className="relative inline-flex items-center justify-center text-black cursor-pointer transition-transform transform hover:scale-125 hover:text-green-800"
            />
        </a>
    );
}

function DesktopView({ appointmentLink }) {
    return (
        <button
            type="button"
            className={`relative inline-flex items-center justify-center rounded-md p-2 mt-0 text-black hover:bg-green-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white font-medium cursor-pointer transition-transform transform hover:scale-105 ${window.innerWidth >= MOBILE_BREAKPOINT2 ? 'whitespace-nowrap' : ''
                }`}
            style={{ border: "3px solid green", padding: "10px 20px" }}
        >
            <span className="sr-only">Request Appointment</span>
            Request Appointment
        </button>
    );
}

const Navbar = () => {
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= MOBILE_BREAKPOINT);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= MOBILE_BREAKPOINT);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`navbar-container ${isMobileView ? '' : 'mt-10'}`}>
            <nav className="flex justify-between bg-white text-black w-screen">
                <a className="navbar-burger flex self-center ml-10 md:hidden" onClick={toggleMenu}>
                    {menuOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 hover:text-green-800"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 hover:text-green-800"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </a>
                <div className={`flex px-5 xl:px-12 pt-1 pb-4 w-full items-center`}>
                    <img className="h-auto xs:h-12 mr-3" src={partnersP} alt="Partners Hospice Quality Care LLC" />
                    <ul className="hidden md:flex px-4 mt-5 font-semibold font-heading space-x-5">
                        <li>
                            <a className="hover:text-green-800" href="/#">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-green-800" href="/#about">
                                About
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-green-800" href="/#services">
                                Services
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-green-800" href="/#faqs">
                                FAQs
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-green-800" href="/#testimonials">
                                Testimonials
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-green-800" href="/#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={`flex pr-8 py-3 pb-4 w-auto justify-end`}>
                    <DesktopView appointmentLink="/#appointment-link" />
                </div>
            </nav >
            {isMobileView && menuOpen && (
                <div className="mobile-menu">
                    <ul className="md:hidden flex flex-col mb-4 px-4 mx-auto font-semibold font-heading space-y-3">
                        <li>
                            <a className="hover:text-green-800" href="/#">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-green-800" href="/#about">
                                About
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-green-800" href="/#services">
                                Services
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-green-800" href="/#faqs">
                                FAQs
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-green-800" href="/#testimonials">
                                Testimonials
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-green-800" href="/#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div >
    );
};

export default Navbar;
