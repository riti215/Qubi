import React, { Component } from 'react';
import Footer from "./footer";
import "../styles/style.css";
import Product from "../image/product.jpg";
import ProductItem from "./productitem";
import ProductItem1 from "./productitem1";


export default class About extends React.Component {
    render(){
        return( 
            
            <div id="product">
                
            <div
            class="aboutus"
            style={{
                backgroundImage:
                "url(" +
                "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" +
                ")",
            }}
            >
            <div class="aboutus-heading">
            <h1 class="about-title">Product</h1>
            <h1 class="abouttitle"> Line</h1>
            </div>
            </div>

            <div class="row row-class">
              <div class="col-md-4">
                <h2 class="heading">About Market</h2>
                <p class="text-data">A testimonial is a third party statment that comments on how good someone or something is. By strategically placing website testimonials on a dedicated...</p>
              </div>
              <div class="col-md-3"></div>
              <div class="col-md-4">
                  <img src= { Product } alt="coffer image" class="img"/>
              </div>
            </div>

                <ProductItem/>
                <ProductItem1 />
                
                <Footer/>

            </div>
            
            );
        }
    }
    