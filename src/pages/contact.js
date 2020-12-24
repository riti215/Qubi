import React, { Component } from 'react'
//import './Form.css';
import "../styles/style.css";
import "../styles/contact.css";
import Footer from "../pages/footer";

class Contact extends Component {
    constructor(props) {
        super(props)
    
        this.state = 
        { name: "",
          email: "",
          message: "",
        }
    }
    
    handleChange = (e) => {
      this.setState({ [e.target.name] : e.target.value })
    }

    render() {
        return (
          <div id="contact">
                
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
          <h1 className="about-title">Contact</h1>
          <h1 className="abouttitle"> us</h1>
          </div>
          </div>

          <div className="container" id="contact">
          <div className="contact-form">
          <h1>Contact Us</h1>
          <form>

            <div className="form-control">
              <label>Name: </label>
              <input type="text" required size="30" value={this.state.name} name="name" onChange={this.handleChange} placeholder="Your Full Name...."/>
            </div>

            <div className="form-control">
              <label>Email: </label>
              <input type="email" required size="30" value={this.state.email} name="email" onChange={this.handleChange} placeholder="Your Email...."/>
            </div>

            <div className="form-control">
              <label>Your Message: </label>
              <div className="msg">
              <textarea rows="2" cols="50" required value={this.state.message} name="message" onChange={this.handleChange} placeholder="Your Message...."/>
              </div>
            </div>

            <div className="form-control">
              <button type="submit">Submit</button>
            </div>

          </form>
          </div>
        </div>
              <Footer/>
          </div>
        ) 
}
}

export default Contact;
