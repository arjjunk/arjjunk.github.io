import "./About.css"

import React from 'react'
import { HashLink as Link } from "react-router-hash-link"

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-title">
        <h1># About</h1>
      </div>
      <div className="about-content1">
        <p>
          /*<br />
          Hii...I'm Arjun K <br />
          I'm a Freelance Web Developer <br />
          who is very passionate to <br />
          work with exciting people to <br />
          give life to their ideas.<br />
          */
        </p>
        <Link to="#expertise" smooth>"View My Expertise"</Link>
      <div className="about-content2">
      <h3>// What I do ???</h3><br/>
        <p>
          &lt;Website Development&gt;<br />
          &lt;Ecommerce Application&gt;<br />
          &lt;Android App Development&gt;<br />

        </p>
        <Link to="#projects" smooth>"View My Projects"</Link>

      </div>
      </div>

    </div>
  )
}

export default About