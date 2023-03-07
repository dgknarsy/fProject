import React from 'react'
import { motion } from 'framer-motion'
import Project1 from "../assets/project1.png"
const Projects = () => {
  return (
    <div className='text-white relative'>
        <div className="bg-projects">           
        </div>
        <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center text-white">
            <p className='text-6xl font-dmsans '>Our Works</p>
            <p className='text-xl text-primary-500 font-light pt-2 text-center px-2'>Extensive network of artists, junior to expert, hold one of the largest and most varied portfolios of any art studio</p>
            <div className='mt-10'>
                <motion.div className='flex flex-col md:flex-row items-center justify-between gap-x-10 gap-y-5'
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ delay:0.2, duration: 0.8 }}
                 variants={{
                   hidden: { opacity: 0, x: -50 },
                   visible: { opacity: 1, x: 0 },
                 }}
                >
                    <div className='relative'>
                        <img src={Project1} alt="" className='h-[150px] rounded-lg'/>
                        <p className='absolute text-white bottom-6 left-6 font-bold text-lg font-dmsans'>PROJECT</p>
                    </div>
                    <div className='relative'>
                        <img src={Project1} alt="" className='h-[150px] rounded-lg'/>
                        <p className='absolute text-white bottom-6 left-6 font-bold text-lg font-dmsans'>PROJECT</p>
                    </div>
                    <div className='relative'>
                        <img src={Project1} alt="" className='h-[150px] rounded-lg'/>
                        <p className='absolute text-white bottom-6 left-6 font-bold text-lg font-dmsans'>PROJECT</p>
                    </div>
                </motion.div>
                <motion.div className='hidden md:flex flex-col md:flex-row items-center justify-between gap-x-10 gap-y-5 mt-10'
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ delay:0.2, duration: 0.8 }}
                 variants={{
                   hidden: { opacity: 0, x: 50 },
                   visible: { opacity: 1, x: 0 },
                 }}
                >
                    <div className='relative'>
                        <img src={Project1} alt="" className='h-[150px] rounded-lg'/>
                        <p className='absolute text-white bottom-6 left-6 font-bold text-lg font-dmsans'>PROJECT</p>
                    </div>
                    <div className='relative'>
                        <img src={Project1} alt="" className='h-[150px] rounded-lg'/>
                        <p className='absolute text-white bottom-6 left-6 font-bold text-lg font-dmsans'>PROJECT</p>
                    </div>
                    <div className='relative'>
                        <img src={Project1} alt="" className='h-[150px] rounded-lg'/>
                        <p className='absolute text-white bottom-6 left-6 font-bold text-lg font-dmsans'>PROJECT</p>
                    </div>
                </motion.div>
            </div>
        </div>  
    </div>
  )
}

export default Projects