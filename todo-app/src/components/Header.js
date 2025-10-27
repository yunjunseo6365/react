import React from "react";
import {Link} from 'react-router-dom'

function Header() {
    return(
        <header className="header">
        <nav className='navigation'>
         <h1>ToDoList</h1>
         <ul className='nav-list'>
          <li>
            <Link to="/home">홈</Link>
          </li>
          <li>
            <Link to="/todo">할 일 목록</Link>
          </li>
          <li>
            <Link to="/about">소개</Link>
          </li>
         </ul>
        </nav>
      </header>
    );
}
export default Header;