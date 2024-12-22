import React from "react";

const Podminky = (props) => {

    return (
        <section id="podminky">
            <div className="row work">
                <div className="three columns header-col">
                    <h1>
                        <span>Cena a podmínky pronájmu</span>
                    </h1>
                </div>

                <div className="nine columns main-col">

                    <ul>
                        <li>Termín nastěhování: ihned</li>
                        <li>Byt je pronajímán přímo majitelem, bez provize realitní kanceláři.</li>
                        <li>Nájemné: 9000,- Kč/měs.</li>
                        <li>Zálohy na energie ve výši 2500,- Kč/měs.</li>
                        <li>Vratná kauce ve výši dvou nájemných</li>
                        <li>Připojení k internetu je v ceně nájmu</li>
                        <li>Pronajimatel vyžaduje pojištění odpovědnosti nájemce</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Podminky;
