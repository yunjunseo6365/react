import React from "react";
import {Link, Outlet} from 'react-router-dom';

function About() {
    return(
        <div>
            <div className="intro1">
             <h1>앱 소개</h1>
             <p>이 ToDoList 애플리케이션은 React와 ReactRouter를 사용하여 구현된 SPA(Single-Page Application)입니다.</p>
            </div>
            <div className="intro2">
             <h1>주요 기능</h1>
             <ul>
                <li>할 일 추가, 수정, 삭제</li>
                <li>할 일 완료 상태 관리</li>
                <li>할 일 상세 정보 보기</li>
                <li>React Router를 활용한 다중 페이지 구조</li>
             </ul>
             <h1>사용 기술</h1>
             <ul>
                <li>React - UI 구현</li>
                <li>React Router - 라우팅 처리</li>
                <li>localStrorage - 데이터 저장</li>
                <li>CSS - 스타일링</li>
             </ul>
            </div>
        </div>
    );
}

export default About;