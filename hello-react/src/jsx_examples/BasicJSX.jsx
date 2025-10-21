import React from 'react'

function BasicJSX(){
    //JSX를 사용한 선언
    const element = <h1>Hello Dooly</h1>;

    //JSX 없이 동일한 요소 생성
    const element1 = React.createElement('h1', null, 'Hello Donur');
    
    return(
        <div>
            {element}
            <hr />
            {element1}
            <p>위 두 요소는 동일하게 렌더링 됩니다</p>
        </div>
    )
}

export default BasicJSX;