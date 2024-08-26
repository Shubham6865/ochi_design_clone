

import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed=".05" className="w-full pt-14 md:pt-20 pb-10 rounded-t-3xl bg-[#004D43]">
            <div className="text-white border-t-2 border-b-2 border-zinc-200 flex gap-10 overflow-hidden whitespace-nowrap">
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

