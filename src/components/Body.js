import "./Body.css"

import React from 'react'
import myPhoto from "../assets/myPhoto.png"
import {HashLink, HashLink as Link } from "react-router-hash-link"

const Body = () => {
  return (
    <div className="container" id="home">
        <div className="name"><span>Arj</span><span id="space">un</span></div>
      <div className="content">
        //Freelance Web Developer
      </div>
      <div className="about"><Link to="#about" smooth>&lt;aboutme&gt;</Link></div>

      <div className="myPhoto">
        <img src={myPhoto} id="image"></img>

      </div>
    </div>
  )
}

export default Body