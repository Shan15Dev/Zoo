import React from 'react';

function InformationTile() {
    return (
        <div style={{fontFamily: "arial"}}>
            <p style={{textAlign: "center", fontWeight: "bold", fontSize: "20pt"}}>Kangaru</p>

            <div style={{
                backgroundColor: "#f7c7c7",
                borderTopLeftRadius: "25px",
                borderTopRightRadius: "25px",
                fontSize: "15pt",
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingTop: "20px"
            }}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </div>
        </div>
    );
}

export default InformationTile;