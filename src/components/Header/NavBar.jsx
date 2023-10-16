import React, { useState } from 'react';
import partnersP from '../../assets/Partners_P.png';
import { BiCalendarCheck } from 'react-icons/bi';

const MOBILE_BREAKPOINT = 640;
const MOBILE_BREAKPOINT2 = 950;

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
            className="relative inline-flex w-full items-center justify-center rounded-md p-2 mt-0 text-black hover:bg-green-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white font-medium cursor-pointer transition-transform transform hover:scale-105"
            style={{ border: "3px solid green", padding: "10px 20px" }}
        >
            <span className="sr-only">Request Appointment</span>
            Request Appointment
        </button>


    );
}

const Navbar = () => {
    const isMobileView = window.innerWidth <= MOBILE_BREAKPOINT;
    const isTabletView = window.innerWidth <= MOBILE_BREAKPOINT2;

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

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
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
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
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </a>
                <div className={`flex px-5 xl:px-12 pt-1 pb-4 w-full items-center`}>
                    <img className="h-12 mr-3" src={partnersP} alt="Partners Hospice Quality Care LLC" />
                    <ul className="hidden md:flex px-4 mt-5 font-semibold font-heading space-x-5">
                        <li>
                            <a className="hover:text-green-800" href="#">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-green-800" href="#">
                                About
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-green-800" href="#">
                                Services
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-green-800" href="#">
                                FAQs
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-green-800" href="#">
                                Testimonials
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-green-800" href="#">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={`flex pr-8 py-3 pb-4 w-auto justify-end`}>
                    <DesktopView appointmentLink="/appointment-link" />
                </div>
            </nav>
            {isMobileView && menuOpen && (
                <div className="mobile-menu">
                    <ul className="md:hidden flex flex-col mb-4 px-4 mx-auto font-semibold font-heading space-y-3">
                        <li>
                            <a className="hover:text-green-800" href="#">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-green-800" href="#">
                                About
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-green-800" href="#">
                                Services
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-green-800" href="#">
                                FAQs
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-green-800" href="#">
                                Testimonials
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-green-800" href="#">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
