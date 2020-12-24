import React , {Component} from 'react';
import pic from "../image/img2.jpeg";
import "../styles/item.css";

export default function Footer() {
    return (
        <div className="Bar">
                <h1>Brief Description</h1>
                <section className="row">
                    <div className="col-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">DIMENSIONS</h2>
                            
                            <hr></hr>

                            <table class="table table-striped table-bordered">
                            
                                <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                                </tbody>
                            </table>

                            <a href="#" class="btn btn-dark" role="button"><h3>Contact Us -></h3></a>

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
