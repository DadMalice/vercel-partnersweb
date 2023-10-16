import React from 'react';

function Footer() {
    return (
        <footer className="w-full text-center bg-green-800 text-white">
            <div className="px-6 py-4 md:py-6 xl:pt-10 xl:pb-10">
                <h2 className="font-bold text-3xl xl:text-4xl">
                    Ease the Journey with Our Care
                </h2>
                <a
                    className="mt-8 xl:mt-10 px-12 py-5 text-lg font-medium leading-tight inline-block bg-green-500 text-slate-800 rounded-full shadow-xl border border-transparent hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-999 focus:ring-sky-500"
                    href="#"
                >
                    Get started
                </a>
                <div className="mt-8 xl:mt-8">
                    <nav className="flex flex-wrap justify-center text-lg font-medium">
                        <div className="px-5 py-2"><a href="#">Contact Us</a></div>
                        <div className="px-5 py-2"><a href="#">Privacy Policy</a></div>
                        <div className="px-5 py-2"><a href="/terms">Terms and Conditions</a></div>
                    </nav>
                    <p className="mt-5 text-base">© 2023 Partners Hospice Quality Care, LLC</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
