import { Disclosure } from '@headlessui/react';
import { useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { BiCalendarCheck } from "react-icons/bi";
import partnersP from '../../assets/Partners_P.png'

const MOBILE_BREAKPOINT = 640;
const MOBILE_BREAKPOINT2 = 950;

const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'About', href: '/#/about', current: false },
    { name: 'Services', href: '/services', current: false },
    { name: 'FAQs', href: '/faqs', current: false },
    { name: 'Testimonials', href: '/testimonials', current: false },
    { name: 'Contact', href: '/contact', current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

function MobileView({ appointmentLink }) {
    return (
        <a href={appointmentLink}>
            <BiCalendarCheck
                className="h-8 w-8 text-black cursor-pointer transition-transform transform hover:scale-125 hover:text-green-800"
            />
        </a>
    );
}

function DesktopView({ appointmentLink }) {
    return (
        <button
            type="button"
            className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-green-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white font-medium cursor-pointer transition-transform transform hover:scale-105"
        >
            <span className="sr-only">Request an Appointment</span>
            Request an Appointment
        </button>
    );
}

export default function NavBar() {
    const location = useLocation();
    const isMobileView = window.innerWidth <= MOBILE_BREAKPOINT;
    const isTabletView = window.innerWidth <= MOBILE_BREAKPOINT2;

    const updatedNavigation = navigation.map((item) => ({
        ...item,
        current: location.pathname === item.href,
    }));

    return (
        <div className='navbar-container'>
            <Disclosure as="nav" className="bg-white">
                {({ open }) => (
                    <>
                        <div className="mx-auto pt-8 max-w-8xl px-2 sm:px-6 md:px-8">
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                                    <div className="flex flex-shrink-0 items-center">
                                        <img
                                            className="h-20"
                                            src={partnersP}
                                            alt="Partners Hospice Quality Care LLC"
                                        />
                                    </div>
                                    <div className="hidden mt-6 md:ml-12 md:block">
                                        <div className="flex space-x-4">
                                            {updatedNavigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? 'bg-gray-100 text-black'
                                                            : 'text-black hover:white hover:text-green-800',
                                                        'rounded-md px-3 py-2 text-sm font-medium'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    {isTabletView ? (
                                        <MobileView appointmentLink="/appointment-link" />
                                    ) : (
                                        <DesktopView appointmentLink="/appointment-link" />
                                    )}
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="md:hidden">
                            <div className="space-y-1 px-2 pb-3 pt-2">
                                {updatedNavigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current
                                                ? 'bg-green-500 text-black'
                                                : 'text-gray-600 hover:bg-green-800 hover:text-white',
                                            'block rounded-md px-3 py-2 text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    );
}
