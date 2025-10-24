import React from "react";
import './BackgroundStyles.css'

function BackgroundExample() {

    // const style= {
    //     backgroundImage: `url(${process.env.REACT_APP_PUBLIC_URL}/Balloons.jpeg)`,
    //     backgroundSize: 'cover',
    //     height: '300px',
    //     width: '90%'
    // };

    return (
        // <div style={style}>
        //     Balloons 배경
        // </div>
        <div className="bg-image">
            코알라
        </div>
    )
}

export default BackgroundExample;