import React from 'react';
import Navbar from "../components/Navbar";
import AnimalPreview from "../components/AnimalPreview";

function Animal() {
    return (
        <div>
            <div style={{backgroundColor: "green"}}>
                <Navbar/>
            </div>
            <div style={{backgroundColor: "yellow", paddingTop: "10pt"}}>
                <p>{"< ZURÜCK ZUR KARTE"}</p>
            </div>
            <div style={{backgroundColor: "red", paddingTop: "20pt", paddingBottom: "20pt"}}>
                <AnimalPreview />
            </div>
            <div style={{backgroundColor: "blue", paddingTop: "300pt"}}>
                InformationTile
            </div>
        </div>);
}

export default Animal;