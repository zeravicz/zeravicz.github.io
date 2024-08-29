import React, { Component } from "react";

class Header extends Component {
  render() {

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Ukázat navigaci">
            Ukázat navigaci
          </a>
          <a className="mobile-btn" href="#home" title="Skrýt navigaci">
            Skrýt navigaci
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Start
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Dispozice
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#galerie">
                Galerie
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#testimonials">
                Lokalita
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Energetická úspornost
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#podminky">
                Podmínky pronájmu
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Kontakt
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Byt 2+1 78 m²</h1>
            <h2 className="responsive-headline">k pronájmu</h2>
            <h3></h3>
            <p>
                Majitel nabízí k pronájmu prostorný, nově zrekonstruovaný byt 2+1 v řadovém domě v centru Žeravic u Kyjova.
            </p>
            <hr />
            <ul className="social">
                <li key="linkedin"></li>
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#resume" title="Go to about section">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
