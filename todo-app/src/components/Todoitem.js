import React from "react";

function Todoitem({todo, onToggle}) {
    return(
            <li
            onClick={() => onToggle(todo.id)}
            className={`todo-item ${todo.completed ? 'completed' : ''}`} >
                {todo.text}
            </li>
    );
}

export default Todoitem;