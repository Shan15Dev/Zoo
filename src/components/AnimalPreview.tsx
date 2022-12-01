import React from 'react';

function AnimalPreview() {
    return (
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <img src={"src/assets/kangaru.png"}
                 style={{width: "250pt"}}/>
        </div>
    );
}

export default AnimalPreview;