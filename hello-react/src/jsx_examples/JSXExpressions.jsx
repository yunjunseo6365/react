import React from "react";

function JSXExpressions() {
    
    const name = "둘리";
    const age = 20;
    const isLoggedIn = true;

    function formatName(user){
        return user + "님";
    }

    return(
        <>
            {/* 변수사용 */}
            <h1>안녕하세요, {name}</h1>

            {/* 표현식 사용 */}
            <p>내년에 {age+1} 살이 됩니다.</p>

            {/* 함수 호출 */}
            <p>반갑습니다~ {formatName(name)}</p>

            {/* 삼항 연산자 */}
            <p>{isLoggedIn ? '로그인한 상태 입니다.' : '로그인을 하세요'}</p>

            {/* 논리 연산자를 활용한 조건부 렌더링 */}
            {isLoggedIn && <p>사랑해~</p>}
        </>
    );
}

export default JSXExpressions;