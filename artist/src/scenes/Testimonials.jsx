import Header from "../assets/testimonial-header.png"
import Stars from "../assets/stars.png"
import { motion } from "framer-motion"
const Testimonials = () => {
  return (
    <div className="mt-32">
        <div className="flex justify-center items-center flex-col gap-8">
            <img src={Header} alt="testimonial-text" />
            <h1 className="font-bold text-4xl text-center text-white ">What our Customers are saying</h1>
        </div>
        <div className="md:flex justify-center items-center gap-10 mt-16 text-white">
            <motion.div 
            className="bg-secondary-300 rounded-lg relative p-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{  duration: 0.8 }}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
            }}
            >
                <div className="md:w-2/3">
                    <img src={Stars} alt="stars" />
                    <p className="my-5 text-primary-500">My neighbor has one of these. She works as a gardener and she says its really awesome.</p>
                    <p className="text-sm font-semibold">John Doe</p>
                    <p className="mt-2 text-primary-100 text-sm font-semibold">Graphic Designer</p>
                </div>
                <div >
                    <div className="before:absolute before:bottom-0 before:right-6  md:before:content-person1 ">
                    </div>
                </div>
            
            </motion.div>
            <motion.div 
            className="bg-secondary-300 rounded-lg relative p-7 mt-10 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay:0.2, duration: 0.8 }}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
            }}
            >
                <div className="md:w-2/3">
                    <img src={Stars} alt="stars" />
                    <p className="my-5 text-primary-500">My neighbor has one of these. She works as a gardener and she says its really awesome.</p>
                    <p className="text-sm font-semibold">Katarin Silvester</p>
                    <p className="mt-2 text-primary-100 text-sm font-semibold">3D Animator</p>
                </div>
                <div >
                    <div className="before:absolute before:bottom-0 before:right-0  md:before:content-person2 ">
                    </div>
                </div>
            
            </motion.div>
        </div>
    </div>
  )
}

export default Testimonials