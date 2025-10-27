import React from "react";
import {Link} from 'react-router-dom';

function Home() {
    return(
        <div className="home">
            <div>
              <h1>할 일 관리 애플리케이션</h1>
              <p>이 애플리케이션은 할 일을 관리하기 위한 간단한 ToDoList입니다.</p>
              <p>React와 React Router를 사용하여 SPA(Single-Page Application)로 구현되었습니다</p>
            </div>
            <div>
                <Link to="/todo">
                    <button className="hometodo-btn">할 일 목록 보기</button>
                </Link>
                <Link to="/about">
                    <button className="homeabout-btn">앱 소개</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;