import React from 'react'
import Navbar from './components/Navbar/Navbar'
import LandingPage from './components/LandingPage/LandingPage'
import Marquee from './components/Marquee/Marquee'
import About from './components/About/About'
import Eyes from './components/Eyes/Eyes'
import Featured from './components/Featured/Featured'
import Cards from './components/Cards/Cards'
import Footer from './components/Footer/Footer'
import LocomotiveScroll from 'locomotive-scroll';



const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full  text-white bg-zinc-900'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />

    </div>
  )
}

export default App
