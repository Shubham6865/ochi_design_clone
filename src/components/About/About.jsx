import React from 'react'

const About = () => {
    return (


        <div className='w-full p-[5vw] -mt-10  bg-[#CDEA68] rounded-t-3xl text-black'>
            <h1 className=" font-['Neue_Montreal, Roboto, sans-serif'] text-[3vw] leading-[3.5vw] ">Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>

            <div className="w-full flex font-['Neue_Montreal, Roboto, sans-serif'] border-t-[1px] pt-10 mt-10 border-[#a1b562]">
                <div className="w-1/2">What you can expect:</div>
                <div className="w-1/2 flex gap-4 ">
                    <div className="w-1/2">
                        <p>
                            We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.</p>
                        <p className='mt-3'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
                    </div>
                    <div className="w-1/2 flex flex-col justify-center pl-10 ">

                        <h1 className='mb-5'>S:</h1>
                        <p>Instagram</p>
                        <p>Behance</p>
                        <p>Facebook</p>
                        <p> Linkedin</p>
                    </div>
                </div>
            </div>
            <div className="w-full border-t-[1px] pt-10 mt-10 border-[#a1b562] flex">
                <div className='w-1/2 '>
                    <h1 className=' text-7xl'>Out approch :</h1>
                    <button className=' flex gap-10 items-center px-10 py-4 mt-4 bg-zinc-900 rounded-full uppercase text-white'>Read More
                        <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                    </button>
                </div>
                <div className="w-1/2 h-[60vh] rounded-3xl bg-[#b4d833]">
                    {/* Img */}
                </div>
            </div>
        </div>


    )
}

export default About
