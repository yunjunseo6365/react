import React, {useState} from "react";

function Button() {

    // 인라인 함수
    // return(
    //     <button onClick={() => alert('Click')}>클릭</button>
    // );


    //컴포넌트 내 메서드
    // const handleClick = () => {
    //     alert('handleClick');
    // }    
    // return <button onClick={handleClick}>handleClick</button>


    // 기본 이벤트 객체 사용
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     alert('handleSubmit');
    //     console.log(event);
    // }
    // const handleChange = (event) => {
    //     console.log('변경되는 값:', event.target.value);
    // }

    // return(
    //     <form onSubmit={handleSubmit}>
    //         이름 : <input type="text" name="name" onChange={handleChange}></input>
    //         <br />
    //         비밀번호 : <input type="password" name="pwd"></input>
    //         <br />
    //         <input type="submit" value="제출" />
    //     </form>
    // )


    // const handleParentClick = () => {
    //     console.log("--------------부모 클릭");
    // }
    // const handleChildClick = (event) => {
    //     event.stopPropagation();
    //     console.log("------------자식 클릭");
    // }
    // return(
    //      <div onClick={handleParentClick}>
    //          부모
    //          <br />
    //          <button onClick={handleChildClick}>자식</button>
    //      </div>
    // )

    const [fruits, setFruits] = useState([
        {id:1, name:'apple'},
        {id:2, name:'banana'},
        {id:3, name:'cherry'}
      ]);

    const handleFruitList = (id, event) => {
        console.log(`과일 ${id} 클릭됨`, event.target);
    }
    return(
        <div>
            <ul>
                {fruits.map(fruit => (
                    <li key={fruit.id} onClick={(e) => handleFruitList(fruit.id, e)} >{fruit.name}</li>
                ))}
            </ul>
        </div>
    )
   
}

export default Button;