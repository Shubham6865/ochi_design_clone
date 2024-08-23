import { motion, useAnimation } from 'framer-motion'
import React from 'react'

const Featured = () => {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({
      y: "0"
    })
  }
  const handleHoverEnd = (index) => {
    cards[index].start({
      y: "100%"
    })
  }
  return (
    <div className="w-full py-10  ">
      <div className='w-full px-10 border-b-[1px] border-zinc-800 pb-10'>
        <h1 className="text-7xl font-['Neue_Montreal, Roboto, sans-serif']  tracking-tighter ">Featured projects</h1>
      </div>


      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer h-[75vh]   w-1/2 relative ">
            <h1 className="absolute z-[9] text-8xl font-semibold leading-none tracking-tighter left-full -translate-x-1/2 top-1/2 -translate-y-1/2 font-['Founders_Grotesk_X-Condensed, Roboto, sans-serif'] text-[#CDEA68] flex overflow-hidden">
              {
                "FYDE".split('').map((item, index) =>
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .1 }}
                    className='inline-block ' key={index}>
                    {item}
                  </motion.span>)
              }
            </h1>


            <div className="w-full h-full  overflow-hidden rounded-xl">
              <img src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="img 1 url not working" className='w-full h-full bg-cover' />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer h-[75vh] relative   w-1/2">
            <h1 className="absolute z-[9] text-8xl font-semibold leading-none tracking-tighter right-full translate-x-1/2 top-1/2 -translate-y-1/2 font-['Founders_Grotesk_X-Condensed, Roboto, sans-serif'] text-[#CDEA68] flex overflow-hidden">{
              "VISE".split('').map((item, index) =>
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .1 }}
                  className='inline-block ' key={index}>
                  {item}
                </motion.span>)
            }</h1>
            <div className="w-full h-full overflow-hidden rounded-xl">
              <img src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" alt="img 2 url not working" className='w-full h-full bg-cover' />
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Featured
