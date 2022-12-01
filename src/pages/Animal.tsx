import React from 'react';
import Navbar from "../components/Navbar";
import AnimalPreview from "../components/AnimalPreview";
import InformationTile from "../components/InformationTile";

function Animal() {
    return (
        <div>
            <div style={{backgroundColor: "green"}}>
                <Navbar/>
            </div>
            <div style={{backgroundColor: "yellow", paddingTop: "10pt"}}>
                <p style={{fontFamily: "arial"}}>{"< ZURÜCK ZUR KARTE"}</p>
            </div>
            <div style={{backgroundColor: "red", paddingTop: "20pt", paddingBottom: "20pt"}}>
                <AnimalPreview/>
            </div>
            <div style={{backgroundColor: "blue"}}>
                <InformationTile/>
            </div>
        </div>);
}

export default Animal;