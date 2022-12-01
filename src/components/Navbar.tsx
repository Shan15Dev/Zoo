import React from 'react';

function Navbar() {
    return (
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <img style={{maxWidth: "80pt", paddingBottom: "10pt"}} src={"src/assets/zoo_logo.png"}
                 alt={"Zoo Zürich logo"}/>
            <svg style={{height: "30pt", }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

        </div>
    );
}

export default Navbar;