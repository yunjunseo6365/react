import React, { Component } from "react";

function Welcome({name="Guest", age=0, isChild=false}){
    // return <h1>Hello Donur</h1>
    return (
        <div>
            <h1>Hello, {name}</h1>
            <p>나이: {age}</p>
            <p>어린이: {isChild ? "맞아요" : "어린이 아니에요"}</p>
        </div>
    );
}

//클래스형 컴포넌트 사용
// class Welcome extends Component{
//     render(){
//         return <h1>Hello class</h1>;
//     }
// }

export default Welcome;