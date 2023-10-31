import { motion } from 'framer-motion';
import { Container } from 'postcss';

const headStyle = {
    background: "radial-gradient(circle, rgba(34,197,94,1) 0%, rgba(22,101,52,1) 100%)",
    color: 'white',
};

const About = () => {
    return (
        <motion.div
            className="about-us"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className='mt-24'>
                <header className="m-0 p-10 relative" style={headStyle}>
                    <div className="flex-col gap-1 w-full">
                        <p className="pt-2 text-4xl font-bold text-dark sm:text-5xl text-center text-white">About Us</p>
                        <p className="pt-4 text-lg text-center text-white">
                            We are committed to providing heartfelt end-of-life assistance for individuals diagnosed with terminal illnesses by their healthcare professionals.
                        </p>
                    </div>
                </header>
            </div>
        </motion.div>
    )
}

export default About