/*import React, { Component } from "react";
import Footer from "./footer";
import "../styles/Form.css";

const initialState = { Name: "", Localty: "", Mail: "", ModelRequired: "", NameError: "", LocaltyError: "", MailError: "", ModelRequiredError: "" };

export default class Form extends Component {
  state = initialState;

  change = (e) => {
    this.setState({
      [e.target]: e.target.value,
    });
  };

  validation = () => {
    let MailError = "";
    let NameError = "";

    if (!this.state.Mail.includes("@")) {
      MailError = "Invalid email id";
    }

    if (!this.state.Name) {
      NameError = "Write your name";
    }

    if (MailError || NameError) {
      this.setState({ MailError, NameError });
      return false;
    }
    return true;
  };

  onSubmit = (e) => {
    const isValid = this.validation();
    e.preventDefault();
    //console.log(this.state);
    if (isValid) {
      console.log(this.state);
      this.setState(initialState);
    }
  };

  render() {
    return (
        <section id="getaqubi">
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
            <h1 className="about-title">Get A Qubi</h1>
            <h1 className="abouttitle"> </h1>
            </div>
            </div>

           
      <div className="whole">
        <form className="qubi">
          <div>
            <h1 className="header">Get a Qubi Form</h1>
            <hr />
            <div className="common">
              <label className="label" htmlFor="">
                Name :
              </label>
              <input type="text" className="input" placeholder="Your Name....." value={this.state.Name} onChange={(e) => this.setState({ Name: e.target.value })} />
              <br />
              <div className="error">{this.state.NameError}</div>
            </div>

            <div className="common">
              <label className="label" htmlFor="">
                Localty :
              </label>
              <input type="text" className="input" placeholder="Your Localty....." value={this.state.Localty} onChange={(e) => this.setState({ Localty: e.target.value })} />
              <br />
              <div className="error">{this.state.LocaltyError}</div>
            </div>

            <div className="common">
              <label className="label" htmlFor="">
                Mail :
              </label>
              <input type="email" className="input" placeholder="Your Mail....." value={this.state.Mail} onChange={(e) => this.setState({ Mail: e.target.value })} />
              <br />
              <div className="error">{this.state.MailError}</div>
            </div>
            <div className="common">
              <label className="label" htmlFor="">
                Model Required :
              </label>
              <input type="text" className="input" placeholder="Your Requirement....." value={this.state.ModelRequired} onChange={(e) => this.setState({ ModelRequired: e.target.value })} />
            </div>
            <div className="error">{this.state.ModelRequiredError}</div>
            <div>
              <button
                className="submit"
                onClick={(e) => {
                  this.onSubmit(e);
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        
      </div>
      <Footer/>
      </section>
    );
  }
}
*/


import React, { Component } from 'react';
import Footer from "./footer";
import "../styles/style.css";
import Coffee from "../image/about.jpg";

export default class About extends React.Component {
    render(){
        return( 
            
            <div id="getaqubi">
                
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
            <h1 className="about-title">Get </h1>
            <h1 className="abouttitle">a Qubi</h1>
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