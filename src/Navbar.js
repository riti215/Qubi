import React ,{Component} from 'react';
import "../src/styles/style.css";
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
                <div class="icon-bar"></div>
                <div class="icon-bar"></div>
                <div class="icon-bar"></div>
              </button>
            <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item"><a className="nav-link" href="home.js">HOME</a></li>
                  <li className="nav-item"><a className="nav-link" href="about.js">ABOUT US</a></li>
                  <li className="nav-item"><a className="nav-link" href="product.js">PRODUCTS</a></li>
                  <li className="nav-item"><a className="nav-link" href="getaqubi.js">GET A QUBI</a></li>
                  <li className="nav-item"><a className="nav-link" href="contact.js">CONTACT US</a></li>
                </ul>
            </div>
        </nav>
    </div>
  </div>
</div>
      )
  }
}