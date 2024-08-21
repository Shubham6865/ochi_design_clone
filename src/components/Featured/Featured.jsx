import React from 'react'

const Featured = () => {
  return (
    <div className="w-full py-10  ">
      <div className='w-full px-10 border-b-[1px] border-zinc-800 pb-10'>
        <h1 className="text-7xl font-['Neue_Montreal, Roboto, sans-serif']  tracking-tighter ">Featured projects</h1>

      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
        <div className="headings absolute bg-red-500">
<h1 className=''></h1>
        </div>
          <div className="cardcontainer h-[75vh]  overflow-hidden  w-1/2">
            <div className="w-full h-full  overflow-hidden rounded-xl">
              <img src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="img 1 url not working" className='w-full h-full bg-cover' />
            </div>
          </div>
          <div className="cardcontainer h-[75vh]    w-1/2">
            <div className="w-full h-full overflow-hidden rounded-xl">
              <img src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" alt="img 2 url not working" className='w-full h-full bg-cover' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
