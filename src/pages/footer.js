import React from 'react'
// import ChevronRightSharpIcon from '@bit/mui-org.material-ui-icons.chevron-right-sharp';
import "../styles/Footer.css";
import logo from "../image/logo.png";
import icons from "../image/icons.jpeg";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import {HashLink as Link} from "react-router-hash-link";

export default function Footer() {
    return (
        <div className="footer">
            <div className="subsBar">
                <div className="subs">Subscribe</div>
                <div className="bar">
                    <input className ="inputField"type = "text" />
                    <ArrowRightIcon className="inputArrow"/>
                </div>
                <div className="icons">
                    <img className="icon" src={icons} alt = "icons" />
                </div>
            </div>
            <div className="footerItems">
                <div className="about">
                    <img src ={logo} className="logo" alt='logo'/>
                    <p>A testimonial is a third party statement that comments on how good someone or something is</p>
                    <p>By strategically placing website testimonials on a dedicated</p>
                </div>
                <div className="explore">
                    <h2>Explore</h2>
                    <ul className="listItems">
                        <li><ArrowRightIcon className="arrowIcon"/><Link smooth to="/#home" className="menu-item">HOME</Link></li>
                        <li><ArrowRightIcon className="arrowIcon"/><Link smooth to="/about/#about" className="menu-item">ABOUT</Link></li>
                        <li><ArrowRightIcon className="arrowIcon"/><Link smooth to="/product/#product" className="menu-item">PRODUCTS</Link></li>
                        <li><ArrowRightIcon className="arrowIcon"/><Link smooth to="/getaqubi/#getaqubi" className="menu-item">GET A QUBI</Link></li>
                        <li><ArrowRightIcon className="arrowIcon"/><Link smooth to="/contact/#contact" className="menu-item">CONTACT US</Link></li>
                    </ul>
                </div>
                <div className="contact">
                    <h2 className="contactHeader">Contact Us</h2>
                    <ul className="contactList">
                        <li><LocationOnIcon className="contactIcon"/>Address</li>
                        <li><PhoneIcon className="contactIcon"/>Phone No:</li>
                        <li><MailIcon className="contactIcon"/>mail</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
