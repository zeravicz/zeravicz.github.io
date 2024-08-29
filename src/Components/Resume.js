import React, { Component } from "react";

class Resume extends Component {
  render() {

    return (
      <section id="resume">
        <div className="row work">
          <div className="three columns header-col">
            <h1>
            <span>Dispozice</span>
            </h1>
          </div>

          <div className="nine columns main-col">
                <ul>
                    <li>Byt má samostatný vchod</li>
                    <li>Je orientován do slunného dvora i do ulice</li>
                    <li>Jedná sa o jediný byt v tomto domě, od sousedních domů je na obou stranách oddelen průjezdem.</li>
                    <li>Možnost parkování je na ulici.</li>
                </ul>
              <h3>Místnosti</h3>
              <ul>
                <li>Obývací pokoj 20 m²</li>
                <li>Ložnice 23 m²</li>
                <li>Vstupní chodba 9 m²</li>
                <li>Kuchyň 14 m²
                    <ul>
                      <li>Nová kuchyňská linka s indukční varnou deskou</li>
                      <li>Digestoř</li>
                      <li>Příprava na myčku</li>
                      <li>Vysoká skříň s el. troubou.</li>
                    </ul>
                </li>
                <li>Koupelna s WC 7 m²</li>
                    <ul>
                      <li>Umyvadlo se skříňkou a zrcadlem</li>
                      <li>Sprchový kout</li>
                      <li>WC</li>
                      <li>Příprava na pračku</li>
                    </ul>
                <li>Vnitřní chodba 5 m²</li>
              </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
