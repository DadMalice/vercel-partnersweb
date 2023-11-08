import { motion } from 'framer-motion';
import image4 from '../../assets/image4.jpg';

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
            <div className="animated-gradient-background-header mt-24">
                <header className="m-0 p-10 relative">
                    <div className="flex-col gap-1 w-full">
                        <p className="pt-2 text-4xl font-bold text-dark sm:text-5xl text-center text-white">About Us</p>
                        <p className="pt-4 text-lg text-center text-white">
                            We are committed to providing heartfelt end-of-life assistance for individuals diagnosed with terminal illnesses by their healthcare professionals.
                        </p>
                    </div>
                </header>
            </div>
            <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-4 px-4">
                <div className="flex flex-col lg:flex-row justify-between gap-8">
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-green-800 pb-4">Who we are</h1>
                        <p className="font-normal mb-5 leading-8 text-lg text-gray-800 ">At Partners Hospice Quality Care LLC, we are dedicated to providing compassionate and high-quality hospice care. Our office is conveniently located at <span className='text-green-800'>317 W. La Habra Blvd. Suite 200 in La Habra, CA 90631</span>.</p>
                        <p className="font-normal leading-8 text-lg text-gray-800 ">Our team is committed to serving you during our regular office hours, Monday to Friday, from 9am to 5pm. We understand that your needs don't always fit into a schedule, which is why our on-call staff is available 24/7 for your support and assistance.</p>
                    </div>
                    <div className="w-full lg:w-8/12">
                        <img className="w-3/4 rounded-xl mx-auto" src={image4} alt="A group of People" />
                    </div>
                </div>
            </div>
            <div className="w-10/12 mt-1 mb-10 bg-green-800 rounded-xl flex mx-auto">
                <div className='grid gap-8 mx-6 mb-5 px-2 md:mb-5 pb-1 py-5 2xl:grid-cols-2 md:items-center md:text-center'>
                    <div className='max-w md:max-l'>
                        <h1 className='mb-3 mt-2 text-center md:text-center font-sans lg:text-5xl xs:text-3xl text-2xl font-bold tracking-tight text-white'>Mission</h1>
                        <p className='text-center mx-10 text-lg font-normal font-sans text-white'>
                            To provide quality care for patients with life threatening illness and support for their loved ones.
                        </p>
                    </div>
                    <div className='max-w md:max-l'>
                        <h1 className='mb-3 mt-2 text-center md:text-center font-sans lg:text-5xl xs:text-3xl text-2xl font-bold tracking-tight text-white'>Vision</h1>
                        <p className='text-center mx-4 text-lg font-normal font-sans text-white'>
                            Our vision is that Partners' Hospice will be recognized throughout our community as an innovative leader in hospice care.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default About