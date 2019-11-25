import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'

import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'
class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <hr></hr>
        <Footer />
        <hr></hr>
      </div>
    );
  }
}

export default App;
