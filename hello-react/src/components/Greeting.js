import React from "react";

function Greeting(props){
    return(
        <div>
            <h1>안녕하세요, {props.name}</h1>
        </div>
    );
}
export default Greeting;