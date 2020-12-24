import React, { Component } from 'react';
import Footer from "./footer";
import "../styles/style.css";
import Coffee from "../image/about.jpg";

export default class About extends React.Component {
    render(){
        return( 
            
            <div id="about">
                
            <div
            className="aboutus"
            style={{
                backgroundImage:
                "url(" +
                "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" +
                ")",
            }}
            >
            <div className="aboutus-heading">
            <h1 className="about-title">About</h1>
            <h1 className="abouttitle"> us</h1>
            </div>
            </div>

            <div className="row row-className">
              <div className="col-md-4">
                <h2 className="heading">About Market</h2>
                <p className="text-data">A testimonial is a third party statment that comments on how good someone or something is. By strategically placing website testimonials on a dedicated...</p>
              </div>
              <div className="col-md-3"></div>
              <div className="col-md-4">
                  <img src= { Coffee } alt="coffer image" className="img"/>
              </div>
            </div>


                
                <Footer/>

            </div>
            
            );
        }
    }
    