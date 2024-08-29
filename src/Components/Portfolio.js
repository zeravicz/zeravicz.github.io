import React from "react";

const Portfolio = (props) => {

  return (
    <section id="portfolio">
      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Energetická úspornost</span>
          </h1>
        </div>

        <div className="nine columns main-col">
            <div key="foo">
                <ul>
                  <li>V bytě je nové podlahové vytápění s tepelným čerpadlem, které zároveň slouží na ohřev vody.</li>
                  <li>Byt má nová plastová okna s izolačním trojsklem.</li>
                  <li>Dokončení zateplení je naplánováno před topnou sezonou 2024/25.</li>
                  <li>Ve všech místnostech jsou nainstalována úsporná LED svítidla.</li>
                  <li>Lze tudíž předpokládat, že náklady na vytápění a ohřev vody nebudou pro odpovědného nájemníka vysoké.</li>
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
