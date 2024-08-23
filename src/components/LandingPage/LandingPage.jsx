import { motion } from 'framer-motion';
import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";


const LandingPage = () => {

    return (
        <div data-scroll data-scroll-speed="-.3" className=' bg-zinc-900 w-full h-screen pt-1'>
            <div className="textstructure mt-24 px-20">
                {["We Create", "Eye Opening", "Presentations"].map((item, index) => (

                    <div className="masker ">
                        <div className="w-fit flex items-end overflow-hidden ">
                            {index === 1 && (
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "8vw" }}
                                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}

                                    className='mr-[1vw]  w-[8vw] rounded-md h-[6vw]  relative bg-green-700 '>

                                </motion.div>
                            )}

                            <h1 className="pt-[1vw] pr-1 -md-[1vw] uppercase text-[8vw] leading-[0.90] 
                               font-['Founders_Grotesk_X-Condensed, Roboto, sans-serif'] font-bold tracking-tighter  " key={index}>{item}</h1>
                        </div>
                    </div>
                ))}
            </div>
            <div className=" border-zinc-800 border-t-[1px] mt-16 flex justify-between items-center py-5 px-20">
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
                    <p className='text-md font-light tracking-tight leading-none' key={index}>
                        {item}
                    </p>
                ))}

                <div className="start flex items-center gap-5">
                    <div className='px-5 py-2  border-zinc-400 font-light text-md border-[1px] rounded-full uppercase'>start the project</div>
                    <div className="w-10 h-10 flex items-center justify-center rounded-full border-[1px]  border-zinc-400">
                        <MdOutlineArrowOutward />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
