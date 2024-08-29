import React, { Component } from "react";
import $ from "jquery";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Dispozice from "./Components/Dispozice";
import Contact from "./Components/Contact";
import Lokalita from "./Components/Lokalita";
import Podminky from "./Components/Podminky";
import Energie from "./Components/Energie";
import Gallery from "./Components/Gallery";

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
        <Dispozice slideToIndex={ (index) => this.gallery.slideToIndex(index) } />
        <Gallery ref={ instance => { this.gallery = instance; }}/>
        <Energie />
        <Lokalita />
        <Podminky />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
