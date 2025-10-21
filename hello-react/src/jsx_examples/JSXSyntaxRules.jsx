import React from "react";
//import React, {Fragment} from "react";

function JSXSyntaxRules() {
    return(
        // <div>
        //     <img src="https://placehold.co/150" alt="에시 이미지" />
        // </div>

        //<Fragment></Fragment>사용시 import 필수
        // <Fragment>
        //     <h2>Fragement 사용 예시</h2>
        //     <p>여러 요소를 하나로 그룹화 합니다.</p>
        // </Fragment>
    <>
        <>
            <h2>축약된 Fragement 사용 예시</h2>
            <p>태그 없이 그룹화 합니다.</p>
        </>
        <>
            <h1>이중프래그먼트</h1>
        </>
    </>
    );
}

export default JSXSyntaxRules;