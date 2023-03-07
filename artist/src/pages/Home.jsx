import React, { useEffect ,useState } from 'react'
import Navbar from '../scenes/Navbar'
import DotGroup from "../scenes/DotGroup"
import useMediaQuery from "../hooks/useMediaQuery"
import Hero from '../scenes/Hero'
import Testimonials from '../scenes/Testimonials'
import Pricing from '../scenes/Pricing'
import Contact from '../scenes/Contact'
import Projects from '../scenes/Projects'
import Footer from '../scenes/Footer'

const Home = () => {

    const [selectedPage, setSelectedPage] = useState("home");
    const [isTopOfPage, setIsTopOfPage] = useState(true);
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

    useEffect(() => {
        const handleScroll = () => {
          if(window.scrollY === 0) setIsTopOfPage(true);
          if(window.scrollY !== 0 ) setIsTopOfPage(false);
        }
        window.addEventListener("scroll",handleScroll);
        return () => window.removeEventListener("scroll",handleScroll);
      }, [])
  return (
    <div className='bg-black'>
        <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <div className='w-5/6 mx-auto md:h-full'>
            {isAboveMediumScreen && (
                <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            )}
           
        </div>
        <Hero />
        
        <div className='w-5/6 mx-auto md:h-full'>
              <Testimonials />
              <Pricing />
              
        </div>
        <Projects />
        <div  className='w-5/6 mx-auto md:h-full'>
              <Contact /> 
              <Footer />
        </div>
    </div>
  )
}

export default Home