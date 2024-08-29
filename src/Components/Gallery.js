import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import kuch1 from '../images/01-kuchyn.jpeg';
import kuch2 from '../images/02-kuchyn.jpeg';
import koup3 from '../images/03-koupelna.jpeg';
import koup4 from '../images/04-koupelna.jpeg';
import obyvak from '../images/05-obyvak.jpeg';
import loznice from '../images/06-loznice.jpeg';
import chodba from '../images/07-chodba.jpeg';
import pudorys from '../images/08-pudorys.jpeg';

class Gallery extends Component {
    slideToIndex(index) {
        const galerie = document.getElementById('galerie');
        console.log(" galerie " + galerie);
        if (galerie) {
            galerie.focus();
            console.log("fucused " + galerie);
        }
        console.log("fucused " + this.imageGallery);
        if (this.imageGallery) {
            this.section.scrollIntoView();
            this.imageGallery.slideToIndex(index);
        }
    }

    render() {
        const images = [
            {
                original: kuch1,
                description: "Kuchyň 14 m²: nová linka, indukční varná deska, digestoř, příprava na myčku"
            },
            {
                original: kuch2,
                description: "Kuchyň 14 m²: vysoká skříň s el. troubou"
            },
            {
                original: koup3,
                description: "Koupelna 7 m²: umyvadlo se skříňkou a zrcadlem, příprava na pračku"
            },
            {
                original: koup4,
                description: "Koupelna 7 m²: WC, sprchový kout"
            },
            {
                original: obyvak,
                description: "Obývací pokoj 20 m²"
            },
            {
                original: loznice,
                description: "Ložnice 23 m²"
            },
            {
                original: chodba,
                description: "Vstupní chodba 9 m²"
            },
            {
                original: pudorys,
                description: "Půdorys"
            },
        ];

        return (
            <section id="galerie"
                ref={instance => { this.section = instance; }}
            >
                <ImageGallery
                    items={images}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    showThumbnails={false}
                    slideInterval={1000}
                    slideOnThumbnailOver={true}
                    showIndex={true}
                    ref={instance => { this.imageGallery = instance; }}
                    onPlay={() => {
                        alert("slideshow is now playing!");
                    }}
                />
            </section>
        );
    }

}

export default Gallery;
