import { motion } from 'framer-motion';

const Terms = () => {
    return (
        <motion.div
            className="terms"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="relative mt-20 mx-10 pt-10 px-10">
                <div className="sides">
                    <a href="#" className="logo text-white text-xl font-bold">BLOG</a>
                </div>
                <div className="sides">
                    <a href="#" className="menu"></a>
                </div>
                <div className="info text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <h4><a href="#category" className="text-blue-400">UI DESIGN</a></h4>
                    <h1 className="text-3xl xl:text-4xl font-bold leading-snug">
                        KEN BURNS HEADERS ARE THE BEST
                    </h1>
                    <div className="meta text-sm">
                        <a href="https://twitter.com/nodws" target="_blank" className="author inline-block w-10 h-10 bg-cover bg-center rounded-full"></a><br />
                        By <a href="https://twitter.com/nodws" target="_blank" className="text-blue-400">James Nodws</a> on May 30, 2019
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Terms