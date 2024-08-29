import React, { Component } from "react";
import $ from "jquery";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Podminky from "./Components/Podminky";
import Portfolio from "./Components/Portfolio";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
    };

  }

  render() {
    return (
      <div className="App">
        <Header />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Podminky />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
