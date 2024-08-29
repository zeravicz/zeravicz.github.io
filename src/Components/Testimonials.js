import React, { Component } from "react";

class Testimonials extends Component {
  render() {

    return (
      <section id="testimonials">
      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Lokalita</span>
          </h1>
        </div>

        <div className="nine columns main-col">
            <div key="foo">
            <p>
            <br/>
            Adresa: <a href="https://mapy.cz/s/navefakece">Žeravice 112, 696 47 Žeravice</a>
            </p>
            <p>
            Byt se nachází v centru obce.
            </p>
            <ul>
                  <li>Obchod 120 m</li>
                  <li>Zastávka autobusu (s přímým spojením do Kyjova, Bzence i Veselí n/M) 120 m</li>
                  <li>Škola 100 m</li>
                  <li>Školka 400 m</li>
                  <li>Hospoda 150 m</li>
                  <li>Pošta a obecní úřad 150 m</li>
            </ul>
            </div>
        </div>
      </div>
      </section>
    );
  }
}

export default Testimonials;
