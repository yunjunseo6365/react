import React from "react";
import Hello from "./Hello";
import Greeting from "./Greeting";


function ConditionalComponent({isLoggedIn}) {
  
    // if문
    // if(isLoggedIn){
    //     return <Hello name='둘리' />
    // } 
    // return <Greeting name='또치' />

    // 삼항연산자
    return isLoggedIn ? <Hello name='둘리' /> : <Greeting name='또치' />
}

export default ConditionalComponent;