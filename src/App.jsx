import React from 'react'
import Navbar from './components/Navbar/Navbar'
import LandingPage from './components/LandingPage/LandingPage'
import Marquee from './components/Marquee/Marquee'
import Empty from './components/Empty/Empty'
import About from './components/About/About'
import Eyes from './components/Eyes/Eyes'
import Featured from './components/Featured/Featured'

const App = () => {
  return (
    <div className='w-full  text-white bg-zinc-900'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Empty />
    </div>
  )
}

export default App
