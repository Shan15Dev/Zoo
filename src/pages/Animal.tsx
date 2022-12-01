import React from 'react';
import Navbar from "../components/Navbar";
import AnimalPreview from "../components/AnimalPreview";
import InformationTile from "../components/InformationTile";

function Animal() {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div style={{paddingTop: "10pt"}}>
                <p style={{fontFamily: "arial"}}>{"< ZURÜCK ZUR KARTE"}</p>
            </div>
            <div style={{paddingTop: "20pt", paddingBottom: "20pt"}}>
                <AnimalPreview/>
            </div>
            <div>
                <InformationTile/>
            </div>
        </div>);
}

export default Animal;