import "./Footer.css"
// import { FaHome, FaWhatsapp, FaMailBulk, FaTelegram } from "react-icons/fa";
import React from 'react'
// import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  return (
    <div className="footer-body">

      <div className="footer-name">
        <h1>Arjun Gangadhar</h1>
      </div>
      {/* <div className="footer-contacts">
        <FaHome size={30} style={{ color: "#fff" }}></FaHome>&nbsp;&nbsp;&nbsp; Calicut, Kerala<br></br><br></br>
        <NavLink to="https://t.me/arjun_gangadhar"><FaTelegram size={30} style={{ color: "#fff" }}></FaTelegram>&nbsp;&nbsp;&nbsp;</NavLink>
        <NavLink to="https://wa.me/917510643820"> <FaWhatsapp size={30} style={{ color: "#fff" }}></FaWhatsapp> &nbsp;&nbsp;&nbsp;</NavLink>
        <NavLink to="mailto: arjungangadhar729@gmail.com"> <FaMailBulk size={30} style={{ color: "#fff" }}></FaMailBulk>&nbsp;&nbsp;&nbsp;</NavLink><br></br><br></br>
      </div> */}
      <div className="footer-menu">
      <ul>
        <li>
          <Link to="#home" smooth>Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        </li>
        <li>
          <Link to="#about" smooth>About</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        </li>
        <li>
          <Link to="#expertise" smooth>Expertise</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        </li>
        <li>
          <Link to="#projects" smooth>Projects</Link>
        </li>
   
      </ul>
      </div>

      {/* <div className="footer-left">
                <FaHome size={30} style={{ color: "#fff" }}></FaHome>&nbsp;&nbsp;&nbsp; Calicut, Kerala<br></br><br></br>
                <NavLink  to="https://t.me/arjun_gangadhar"><FaTelegram size={30} style={{ color: "#fff"}}></FaTelegram>&nbsp;&nbsp;&nbsp; Telegram</NavLink><br></br><br></br>
                <NavLink to="https://wa.me/917510643820"> <FaWhatsapp size={30} style={{ color: "#fff" }}></FaWhatsapp> &nbsp;&nbsp;&nbsp;Whatsapp</NavLink><br></br><br></br>
                <NavLink to="mailto: arjungangadhar729@gmail.com"> <FaMailBulk size={30} style={{ color: "#fff" }}></FaMailBulk>&nbsp;&nbsp;&nbsp;Email</NavLink><br></br><br></br>
            </div>
            <div className="footer-right">
            <ul className="footer-menu">
        <li>
          <Link to="#home" smooth>Home</Link>
        </li>
        <li>
          <Link to="#about" smooth>About</Link>
        </li>
        <li>
          <Link to="#expertise" smooth>Expertise</Link>
        </li>
        <li>
          <Link to="#projects" smooth>Projects</Link>
        </li>
   
      </ul><br></br><br></br>
            </div> */}
    </div>

  )
}

export default Footer