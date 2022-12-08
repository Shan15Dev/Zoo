import React from 'react';
import Navbar from "../components/Navbar";
import AnimalPreview from "../components/AnimalPreview";
import InformationTile from "../components/InformationTile";
import {Link} from "react-router-dom";

function Animal() {
    document.title = "Kagaru - Zoo Zürich"
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div style={{paddingTop: "10pt"}}>
                <Link to={"/maps"}>
                    <p style={{fontFamily: "arial"}}>{"< ZURÜCK ZUR KARTE"}</p>
                </Link>
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