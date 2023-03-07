import {motion} from "framer-motion";
import Scroll from "../assets/scrollDown.svg"
import "../index.css"



import { Autoplay,  } from "swiper";
const Hero = () => {
  return (
    <div>
        <div className="bg-image">           
        </div>        
        <motion.div 
        className="absolute w-full h-full top-0 flex flex-col justify-center items-center text-white"
        initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay:0.2, duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
            <h1 className="md:text-5xl text-2xl font-bold">New Chapter to Start</h1>
            <p className="pt-4 font-semibold">Lorem ipsum neavs reusp kslape detrunium</p>
            <div className="flex flex-col items-center gap-1">
              <button className="mt-10">CONTACT</button>
              <img src={Scroll} alt="scroll-down" />
            </div>
        </motion.div>
    </div>
  )
}

export default Hero