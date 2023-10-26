import { motion } from 'framer-motion';

const Terms = () => {
    return (
        <motion.div
            className="terms"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className='mt-20 mb-5 mx-10 pt-20 pb-5 px-10'>
                <h1>Terms</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates aperiam delectus, fuga ad quidem ab sit accusantium qui tempora odio, facere doloremque. Molestias animi, praesentium officiis sequi nobis natus eius pariatur velit cum, et, sed reiciendis dicta ipsum doloremque illum optio reprehenderit temporibus! Aspernatur odio dolorum blanditiis cumque quisquam id illo, voluptates, quibusdam, necessitatibus quasi aperiam temporibus earum tempore veniam harum placeat explicabo corrupti amet ducimus ratione. Sequi, doloremque quasi minima possimus modi dolore similique! Commodi, quod totam. Possimus non doloremque consectetur mollitia, voluptas qui eaque perferendis maxime culpa ad neque aut, expedita ex! Quam tempora earum fugiat maxime nam.</p>
            </div>
        </motion.div>
    )
}

export default Terms