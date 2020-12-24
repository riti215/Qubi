import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import "../src/styles/style.css";
import Home from "./pages/home";
import About from "./pages/about";
import Product from "./pages/products";
import GetAQubi from "./pages/getaqubi";
import Contact from "./pages/contact";
import Navbar from "./pages/Navbar"

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar id="navbar"/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/product" component={Product}/>
            <Route exact path="/getaqubi" component={GetAQubi}/>
            <Route exact path="/getaqubi" component={GetAQubi}/>
            <Route exact path="/contact" component={Contact}/>
            </Switch>
        </Router>
      </div>
    )
  }
}
export default App;
