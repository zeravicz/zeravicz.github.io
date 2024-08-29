import React, { Component } from "react";

class Dispozice extends Component {
    render() {
        console.log(typeof this.props.slideToIndex)
        return (
            <section id="dispozice">
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
                            <li>Jedná sa o jediný byt v tomto domě, od sousedních domů je na obou stranách oddelen průjezdem</li>
                            <li>Možnost parkování je na ulici</li>
                        </ul>
                        <h3>Místnosti <span style={{ "font-family" : "opensans" }}> - viz <a onClick={() => this.props.slideToIndex(7)}>půdorys</a></span></h3>
                        <ul>
                            <li><a onClick={() => this.props.slideToIndex(0)}>Kuchyň</a> 14 m²
                                <ul>
                                    <li>Nová kuchyňská linka s indukční varnou deskou</li>
                                    <li>Digestoř</li>
                                    <li>Příprava na myčku</li>
                                    <li><a onClick={() => this.props.slideToIndex(1)}>Vysoká skříň s el. troubou</a></li>
                                </ul>
                            </li>
                            <li><a onClick={() => this.props.slideToIndex(2)}>Koupelna</a> s WC 7 m²
                                <ul>
                                    <li>Umyvadlo se skříňkou a zrcadlem</li>
                                    <li>Příprava na pračku</li>
                                    <li><a onClick={() => this.props.slideToIndex(3)}>Sprchový kout</a></li>
                                    <li>WC</li>
                                </ul>
                            </li>
                            <li><a onClick={() => this.props.slideToIndex(4)}>Obývací pokoj</a> 20 m²</li>
                            <li><a onClick={() => this.props.slideToIndex(5)}>Ložnice</a> 23 m²</li>
                            <li><a onClick={() => this.props.slideToIndex(6)}>Vstupní chodba</a> 9 m²</li>
                            <li>Vnitřní chodba 5 m²</li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default Dispozice;
