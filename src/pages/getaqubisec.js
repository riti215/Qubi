import React , {Component} from 'react';
import pic from "../image/img1.jpeg";
// import "../styles/getqubi.css";

export default function GetQubi() {
    return (
        <div className="Bar">
                <h1 style={{color: "grey"}}>Get Your Qubi</h1>
                <section className="row">

                    <div className="col-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">SPECIAL OFFER</h2>
                            
                            <hr></hr>

                          

                            <a href="#" className="btn btn-dark" role="button"><h3>Contact Us  </h3></a>

                            </div>
                        </div>
                    </div>


                    <div className="col-6">
                        <img src={pic} className="img-fluid"></img>
                    </div>
                </section>
                <h1></h1>
            </div>
    )
}
