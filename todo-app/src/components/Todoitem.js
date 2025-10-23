import React from "react";

function Todoitem({todo, onToggle, onDelete}) {

    const handleCheckbox = (id, e) => {
        e.stopPropagation();
        onToggle(id);
    }

    const handleDelete = (e) => {
        e.stopPropagation();
        onDelete(todo.id);
    }
    
    return(
            <li>
                <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                  <input type="checkbox"
                         checked={todo.completed} 
                         onChange={(e) => handleCheckbox(todo.id, e)} />
                  {todo.text}
                </div>

                <div className="todo-btn">
                  <button className="edit-btn">수정</button>
                  <button className="remove-btn" onClick={handleDelete}>삭제</button>
                </div>
            </li>
    );
}

export default Todoitem;