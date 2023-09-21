import "./Contact.css"

import React from 'react'
import { NavLink } from "react-router-dom"
import { FaTelegram,FaMailBulk,FaGithub,FaInstagram, FaWhatsapp } from "react-icons/fa"

const Contact = () => {
  return (
    <div className="social">
        <div className="icons">
        <br />
        <NavLink  to="https://t.me/arjun_gangadhar"><FaTelegram size={50} style={{ color: "#fff", paddingLeft:"1rem"}}></FaTelegram></NavLink><br /><br />
        <NavLink to="https://wa.me/917510643820"><FaWhatsapp size={50} style={{ color: "#fff", paddingLeft:"1rem"}}></FaWhatsapp></NavLink>
        <NavLink  to="mailto: arjungangadhar729@gmail.com"> <FaMailBulk size={50} style={{ color: "#fff", paddingLeft:"1rem"}}></FaMailBulk></NavLink><br /><br />
        <NavLink  to="https://github.com/arjungangadhar"> <FaGithub size={50} style={{ color: "#fff", paddingLeft:"1rem"}}></FaGithub></NavLink><br /><br />
        <NavLink  to="https://instagram.com/arjun_.gangadhar?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"><FaInstagram size={50} style={{ color: "#fff", paddingLeft:"1rem"}}></FaInstagram></NavLink>
        </div>
  </div>
  )
}

export default Contact





