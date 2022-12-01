import React from 'react';
import Navbar from "../components/Navbar";
function MapsPage() {
    return (
        <div>
            <div style={{backgroundColor: "green", paddingTop:"10pt"}}>
                <Navbar />
            </div>
            <div style={{backgroundColor: "red", paddingTop: "200pt"}}>
                Searching
            </div>
            <div style={{backgroundColor: "blue", paddingTop: "100pt"}}>
                Map
            </div><div style={{backgroundColor: "blue", paddingTop: "75pt"}}>
                QuickInformation
            </div>
            <div style={{backgroundColor: "gold", paddingTop: "10pt"}}>
                Cancel
            </div>
            <div style={{backgroundColor: "yellow", paddingTop: "10pt"}}>
                Sponsor
            </div>
        </div>
    );
}

export default MapsPage;