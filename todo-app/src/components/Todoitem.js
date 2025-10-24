import React from "react";
import classNames from "classnames";
import { CATEGORIES } from "../constants/categories";

function Todoitem({todo, onToggle, onDelete}) {
    // 체크박스 체크시 밑줄
    const handleCheckbox = (id, e) => {
        e.stopPropagation();
        onToggle(id);
    }

    // 삭제
    const handleDelete = (e) => {
        e.stopPropagation();
        onDelete(todo.id);
    }

    // icon가져오기
    const getCategoryId = (categoryId) => {
        return (
            CATEGORIES.find((category) => category.id === categoryId) || CATEGORIES[0]
        )
    };

    return(
            <li>
                <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                  <div className="category-icon">{getCategoryId(todo.category).icon}</div>
                  <input type="checkbox"
                         checked={todo.completed}
                         onChange={(e) => handleCheckbox(todo.id, e)} />
                  {todo.text}
                </div>

                <div className="todo-btn">
                  <div className={classNames({
                      'priority-low':todo.importance === '낮음',
                      'priority-middle':todo.importance === '중간',
                      'priority-high':todo.importance === '높음'
                  })}>
                    {todo.importance}
                  </div>
                  <button className="edit-btn">수정</button>
                  <button className="remove-btn" onClick={handleDelete}>삭제</button>
                </div>
            </li>
    );
}

export default Todoitem;