import React ,{Component} from 'react';
import "../styles/style.css";
//import {Link} from "react-router-dom"
import {HashLink as Link} from "react-router-hash-link";

export default class Navbar extends Component{
render(){
return(
<div>
  <div className="navbar-fixed-top">
    <div className="nav-sec">
        <nav className="navbar navbar-default navbar-expand-lg">
            <a className="navbar-brand" href="#">
              <img src="images/LOGO3.png" className="logo3"/>
            </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
                <div className="icon-bar"></div>
                <div className="icon-bar"></div>
                <div className="icon-bar"></div>
              </button>
            <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item"><Link smooth to="/#home" className="nav-link">HOME</Link></li>
                  <li className="nav-item"><Link smooth to="/about/#about" className="nav-link">ABOUT</Link></li>
                  <li className="nav-item"><Link smooth to="/product/#product" className="nav-link">PRODUCTS</Link></li>
                  <li className="nav-item"><Link smooth to="/getaqubi/#getaqubi" className="nav-link">GET A QUBI</Link></li>
                  <li className="nav-item"><Link smooth to="/contact/#contact" className="nav-link">CONTACT US</Link></li>
                </ul>
            </div>
        </nav>
    </div>
  </div>
</div>
      )
  }
}