import React from 'react'
import Navbar from '../components/Navbar'
import Body from '../components/Body'
import About from '../components/About'
import Contact from '../components/Contact'
import Expertise from '../components/Expertise'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Contact/>
    <Body/>
    <About/>
    <Expertise />
    <Projects />
    <Footer />
    </>
  )
}

export default Home