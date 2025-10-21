import React from "react";

function Card({title, children}){
    return (
        <div>
            <div>
                <h2>{title}</h2>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}

export default Card;