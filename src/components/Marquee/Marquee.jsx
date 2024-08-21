// import { motion } from "framer-motion"
// import React from 'react'

// const Marquee = () => {
//     return (
//         <>


//             <div className='w-full pt-20 pb-10 rounded-t-3xl bg-[#004D43] '>
//                 <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap">
//                     <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: "Infinity", duration: 5 }} className="text-[17vw] leading-none  font-['Founders_Grotesk_X-Condensed, Roboto, sans-serif'] font-bold uppercase tracking-tighter ">We are Ochi</motion.h1>
//                     <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: "Infinity", duration: 5 }} className="text-[17vw] leading-none   font-['Founders_Grotesk_X-Condensed, Roboto, sans-serif'] font-bold  uppercase  tracking-tighter  ">We are Ochi</motion.h1>

//                 </div>
//             </div>

//         </>
//     )
// }

// export default Marquee


import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
    return (
        <div className="w-full pt-20 pb-10 rounded-t-3xl bg-[#004D43]">
            <div className="text border-t-2 border-b-2 border-zinc-200 flex gap-10 overflow-hidden whitespace-nowrap">
                <div className="flex">

                    {["We are Ochi.", "We are Ochi.", "We are Ochi."].map((item, index) => (
                        <motion.h1 initial={{ x: "0%" }}
                            animate={{ x: "-100%" }}
                            transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
                            key={index}
                            className="text-[22vw] leading-none font-['Founders_Grotesk_X-Condensed, Roboto, sans-serif'] font-bold uppercase tracking-tighter pr-[7vw]">
                            {item}
                        </motion.h1>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Marquee;

