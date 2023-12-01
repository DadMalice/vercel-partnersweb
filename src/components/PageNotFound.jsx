import { motion } from 'framer-motion';
import undercons from '../assets/error.png';
import { Link } from 'react-router-dom';

function PageNotFound() {
    return (
        <motion.div
            className="terms"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="animated-gradient-background">
                <div className="h-full flex flex-col justify-center items-center mt-5 pt-28">
                    <div className="py-5 px-8 text-center lg:w-1/2 w-9/12 bg-black bg-opacity-25 rounded-xl">
                        <div className="flex justify-center items-center">
                            <img src={undercons} alt="Under Construction" className="w-1/3" />
                        </div>

                        <h1 className="mt-5 mb-10 lg:text-5xl xs:text-3xl font-bold leading-tight text-white">
                            Sorry, we couldn't find this page.
                        </h1>
                        <p className="mb-5 text-base text-white md:text-lg text-center">
                            But dont worry, you can visit our homepage and know more about us!
                        </p>
                        <button
                            className="mx-auto text-center rounded-xl border-2 mt-2 border-green-800 bg-white px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:border-neutral-100 hover:text-green-800 focus:border-black focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 transform hover:scale-105"
                            data-te-ripple-init data-te-ripple-color="light">
                            <Link to="/">Homepage</Link>
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default PageNotFound