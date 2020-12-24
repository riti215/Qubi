import React, { Component } from 'react';
import Footer from "./footer";
import GetQubi from "./getaqubisec";
import HomeSec from "./homesec";
import ".././styles/style.css";
export default class Home extends React.Component {
render(){
return( 
<div>
	<section className="bg-image" id="home">
	   <div className="container-fluid h-100">
            <div className="row align-items-center h-100 d-flex justify-content-start">
		        <div className="col-12 ml-3">
		            <div>
		                <p className="text-white caption">BORED OR EXHAUSTED <br/>SAD OR HAPPY <br/>GRAB A COFFEE!</p>
	                    <a href="#" className="text-center btn btn-exp">EXPLORE</a>
	                </div>
		        </div>
            </div>
        </div>   
	</section>
	<GetQubi></GetQubi>
	<HomeSec/>
	<Footer/>
 </div>  
    );
  }

}

