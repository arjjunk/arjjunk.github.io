import "./Projects.css"

import React from 'react'

import g4s from "../assets/g4s.png"
import sporthub from "../assets/sporthub.png"
import techneeds from "../assets/techneeds.png"
import { NavLink } from "react-router-dom"

const Projects = () => {
    return (
        <div className="projects" id="projects">
            <div className="pro-title">
                <h1># Projects</h1>

            </div>
            <div className="img-card1">
               <NavLink to="https://github.com/arjjunk/g4s/"> <img src={g4s}></img></NavLink>
            </div>
            <div className="img-card2">
                <NavLink to="https://github.com/arjjunk/sporthub/"><img src={sporthub}></img></NavLink>
            </div>
            <div className="img-card3">
               <NavLink to="https://github.com/arjjunk/techneeds/"> <img src={techneeds}></img></NavLink>
            </div>
        </div>
    )
}

export default Projects