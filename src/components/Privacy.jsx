import { motion } from 'framer-motion';
import undercons from '../assets/undercons.png';

function Privacy() {
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
                            Exciting updates are in progress!
                        </h1>
                        <p className="mb-5 text-base text-white md:text-lg text-center">
                            Our privacy page is currently undergoing improvements to better serve you. We appreciate your patience. For urgent inquiries, please contact us at <a href="tel:+15622457580" className="text-green-200"> (562) 245-7580</a>. Thank you for understanding!
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Privacy;
