import { motion } from 'framer-motion';

const Terms = () => {
    return (
        <motion.div
            className="terms"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="animated-gradient-background">
                <div className="h-full flex flex-col justify-center items-center">
                    <div className="py-10 px-8 text-center lg:w-1/2 w-9/12 bg-black bg-opacity-25 rounded-xl">
                        <h1 className="mt-10 mb-10 lg:text-6xl xs:text-5xl text-2xl font-bold leading-tight text-white">
                            Page Under Construction
                        </h1>
                        <p className="-mt-4 mb-5 text-base text-white md:text-lg text-center">
                        Exciting updates are in progress! Our terms page is currently undergoing improvements to better serve you. We appreciate your patience. For urgent inquiries, please contact us at (562) 245-7580. Thank you for understanding!
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Terms