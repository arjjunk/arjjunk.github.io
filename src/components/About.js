import "./About.css"

import React from 'react'
import { HashLink as Link } from "react-router-hash-link"

import Resume from "../assets/Arjun_K.pdf"

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
          */<br />
        </p>
        <button class="button">
        <Link to="#expertise" smooth>Expertise</Link>
        </button>

        
      <div className="about-content2">
      <h3>// What I do ???</h3><br/>
        <p>
          &lt;Website Development&gt;<br />
          &lt;Ecommerce Application&gt;<br />
          &lt;Android App Development&gt;<br /><br />

        </p>
        <button class="button">
        <Link to="#projects" smooth>Projects</Link>
        </button><br /><br />
        <button class="button">
        <a href={Resume} download="Arjun_K.pdf">Download&nbsp;CV</a>
        </button>

      </div>
      </div>

    </div>
  )
}

export default About