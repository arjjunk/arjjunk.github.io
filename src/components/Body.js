import "./Body.css"

import React from 'react'
import myPhoto from "../assets/myPhoto.png"
import {HashLink, HashLink as Link } from "react-router-hash-link"

const Body = () => {
  return (
    <div className="container">
        <div className="name">Arj&nbsp;&nbsp;&nbsp;&nbsp;un</div>
      <div className="content">
        //Freelance Web Developer
      </div>
      <div class="about"><Link to="#about">&lt;aboutme&gt;</Link></div>

      <div className="myPhoto">
        <img src={myPhoto}></img>

      </div>
    </div>
  )
}

export default Body