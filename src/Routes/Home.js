import React from 'react'
import Navbar from '../components/Navbar'
import Body from '../components/Body'
import About from '../components/About'
import Contact from '../components/Contact'
import Expertise from '../components/Expertise'
import Projects from '../components/Projects'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Contact/>
    <Body/>
    <About/>
    <Expertise />
    <Projects />
    </>
  )
}

export default Home