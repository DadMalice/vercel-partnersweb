import React, { useState, useEffect } from 'react';
import partnersP from '../../assets/Partners_P.png';
import { BiCalendarCheck } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const MOBILE_BREAKPOINT = 640;
const MOBILE_BREAKPOINT1 = 768;
const MOBILE_BREAKPOINT2 = 835;

function DesktopView({ appointmentLink }) {
    return (
        <button
            type="button"
            className={`relative inline-flex items-center justify-center rounded-md p-2 mt-0 text-black hover:bg-green-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white font-medium cursor-pointer transition-transform transform hover:scale-105 ${window.innerWidth >= MOBILE_BREAKPOINT1 ? 'whitespace-nowrap' : ''
                }`}
            style={{ border: "3px solid green", padding: "10px 20px" }}
            onClick={() => window.location.href = appointmentLink}
        >
            <span className="sr-only">Request Appointment</span>
            Request Appointment
        </button>
    );
}

function getActiveLink(currentPath) {
    // Define an array of paths you want to check for active status
    const pathsToCheck = ['/about', '/services', '/contact'];

    for (const path of pathsToCheck) {
        if (currentPath.startsWith(path)) {
            return path;
        }
    }

    // If no match is found, return a default value (e.g., '/')
    return '/';
}

const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const activeLink = getActiveLink(currentPath);

    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= MOBILE_BREAKPOINT1);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= MOBILE_BREAKPOINT1);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`navbar-container ${isMobileView ? '' : 'mt-10'}`}>
            <nav className={`flex justify-between bg-white text-black w-screen ${menuOpen ? 'menu-open' : ''}`}>
                <a className="flex self-center ml-10 md:hidden" onClick={toggleMenu}>
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
                    <img className="h-auto xs:h-12 mr-3 transition-transform transform hover:scale-125" src={partnersP} alt="Partners Hospice Quality Care LLC" />
                    <ul className={`hidden md:flex px-4 mt-5 text-xl font-semibold font-heading space-x-5 ${menuOpen ? 'menu-open' : ''}`}>
                        <li>
                            <NavLink
                                to="/"
                                exact
                                className={`nav-link ${activeLink === '/' ? 'active-link' : ''} hover:text-green-800`}
                                onClick={() => { scrollToTop(); setMenuOpen(false); }}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                exact
                                className={`nav-link ${activeLink === '/about' ? 'active-link' : ''} hover:text-green-800`}
                                onClick={() => { scrollToTop(); setMenuOpen(false); }}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/services"
                                exact
                                className={`nav-link ${activeLink === '/services' ? 'active-link' : ''} hover:text-green-800`}
                                onClick={() => { scrollToTop(); setMenuOpen(false); }}
                            >
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                exact
                                className={`nav-link ${activeLink === '/contact' ? 'active-link' : ''} hover:text-green-800`}
                                onClick={() => { scrollToTop(); setMenuOpen(false); }}
                            >
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className={`flex pr-8 py-3 pb-4 w-auto justify-end`}>
                    <DesktopView appointmentLink="/contact" />
                </div>
            </nav>
            {isMobileView && menuOpen && (
                <div className="mobile-menu">
                    <ul className={`md:hidden flex flex-col mb-4 py-4 px-4 mx-auto font-semibold font-heading text-xl space-y-5 ${menuOpen ? 'menu-open' : ''}`}>
                        <li>
                            <NavLink
                                to="/"
                                exact
                                className={`nav-link ${activeLink === '/' ? 'active-link' : ''} hover:text-green-800`}
                                onClick={() => { scrollToTop(); setMenuOpen(false); }}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                exact
                                className={`nav-link ${activeLink === '/about' ? 'active-link' : ''} hover:text-green-800`}
                                onClick={() => { scrollToTop(); setMenuOpen(false); }}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/services"
                                exact
                                className={`nav-link ${activeLink === '/services' ? 'active-link' : ''} hover:text-green-800`}
                                onClick={() => { scrollToTop(); setMenuOpen(false); }}
                            >
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                exact
                                className={`nav-link ${activeLink === '/contact' ? 'active-link' : ''} hover:text-green-800`}
                                onClick={() => { scrollToTop(); setMenuOpen(false); }}
                            >
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
