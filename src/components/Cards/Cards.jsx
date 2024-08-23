import React from 'react'

const Cards = () => {
    return (
        <div className='w-full h-screen bg-zinc-100 flex gap-5 px-20 items-center'>
            <div className="cardContainer w-1/2 h-[50vh]">
                <div className="card w-full h-full bg-[#004D43] rounded-xl flex justify-center items-center relative">
                    <img className='w-28' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute left-10 bottom-5  px-5 py-1 border-2 rounded-full'>&copy;2019</button>
                </div>
            </div>
            <div className="cardContainer w-1/2 h-[50vh] flex gap-5">
                <div className="card w-1/2 h-full bg-[#212121] rounded-xl flex justify-center items-center relative">
                    <img className='w-28' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className='absolute left-10 bottom-5 px-5 py-1 border-2 rounded-full'>&copy;2019</button>
                </div>
                <div className="card w-1/2 h-full bg-[#212121] rounded-xl flex justify-center items-center relative ">
                    <img className=' w-28' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className='absolute left-10 bottom-5 px-5 py-1 border-2 rounded-full'>&copy;2019</button>
                </div>
            </div>

        </div>
    )
}

export default Cards
