import React from "react";
import {Link} from 'react-router-dom';

function NotFound() {
    return(
    <div className="notfound">
        <h1>404 - 페이지를 찾을 수 없습니다</h1>
        <p>요청하신 페이지가 존재하지 않습니다.</p>
        <Link to='/'>
            <button className="notfound-btn">홈으로 돌아가기</button>
        </Link>
    </div>
    );
}

export default NotFound;