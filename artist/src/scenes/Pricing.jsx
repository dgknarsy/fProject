import {motion} from "framer-motion";
import Check from "../assets/check.png"
import Option1 from "../assets/option1.png"
import Option2 from "../assets/option2.png"
import Option3 from "../assets/option3.png"

const Pricing = () => {
  return (
    <div className='text-white py-32'>
        <div className='flex md:flex-row flex-col items-center justify-center gap-x-12 gap-y-10'>
            <motion.div 
            className='w-[300px] flex flex-col border-2 border-secondary-300 rounded-xl font-serif'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
            >
                {/* HEADER*/}
                <div className='bg-gradient-to-b from-primary-300 to-black text-center rounded-lg'>
                    <p className='py-2'>BASIC</p>
                </div>
                {/* PRICE */}
                <div>
                    <p className='text-4xl ml-6'>$19/ month</p>
                </div>
                
                {/* DETAILS */}
                <div className='mt-6 ml-6'>
                    <div className='flex gap-2 items-center'>
                        <img src={Check} alt="" className='h-fit' />
                        <p className='text-lg font-light'>Multi-step Zaps</p>
                    </div>
                    <div className='flex gap-2 items-center py-3'>
                        <img src={Check} alt="" className='h-fit' />
                        <p className='text-lg font-light'>Multi-step Zaps</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img src={Check} alt="" className='h-fit' />
                        <p className='text-lg font-light'>Multi-step Zaps</p>
                    </div>
                </div>
                {/* IMAGE */}
                <img src={Option3} alt=""  className='w-fit py-10'/>
                
            </motion.div>
            <motion.div className='w-[300px] flex flex-col border-2 border-secondary-300 rounded-xl font-serif'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay:0.2,duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
            >
                {/* HEADER*/}
                <div className='bg-gradient-to-b from-primary-300 to-black text-center rounded-lg'>
                    <p className='py-2'>PROFESSIONAL</p>
                </div>
                {/* PRICE */}
                <div>
                    <p className='text-4xl ml-6'>$38/ month</p>
                </div>
                
                {/* DETAILS */}
                <div className='mt-6 ml-6 flex flex-col gap-y-4'>
                    <div className='flex gap-2 items-center'>
                        <img src={Check} alt="" className='h-fit' />
                        <p className='text-lg font-light'>Multi-step Zaps</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img src={Check} alt="" className='h-fit' />
                        <p className='text-lg font-light'>50 Users team</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img src={Check} alt="" className='h-fit' />
                        <p className='text-lg font-light'>Shared Workspace</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img src={Check} alt="" className='h-fit' />
                        <p className='text-lg font-light'>Unlimited Users Team</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img src={Check} alt="" className='h-fit' />
                        <p className='text-lg font-light'>Custom Data</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img src={Check} alt="" className='h-fit' />
                        <p className='text-lg font-light'>Multi-step Zaps</p>
                    </div>
                </div>
                {/* IMAGE */}
                <img src={Option2} alt=""  className='w-fit py-10'/>
                
            </motion.div>
            <motion.div className='w-[300px] flex flex-col border-2 border-secondary-300 rounded-xl font-serif'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay:0.4,duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
            >
                {/* HEADER*/}
                <div className='bg-gradient-to-b from-primary-300 to-black text-center rounded-lg'>
                    <p className='py-2'>MID</p>
                </div>
                {/* PRICE */}
                <div>
                    <p className='text-4xl ml-6'>$22/ month</p>
                </div>
                
                {/* DETAILS */}
                <div className='mt-6 ml-6'>
                    <div className='flex gap-2 items-center'>
                        <img src={Check} alt="" className='h-fit' />
                        <p className='text-lg font-light'>Multi-step Zaps</p>
                    </div>
                    <div className='flex gap-2 items-center py-3'>
                        <img src={Check} alt="" className='h-fit' />
                        <p className='text-lg font-light'>Multi-step Zaps</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img src={Check} alt="" className='h-fit' />
                        <p className='text-lg font-light'>Multi-step Zaps</p>
                    </div>
                </div>
                {/* IMAGE */}
                <img src={Option1} alt=""  className='w-fit py-10'/>
                
            </motion.div>
        </div>
    </div>
  )
}

export default Pricing