import React from "react";

function AddTodoForm({todo, onToggle}) {
    return(
        <div className="input-box">
         <input type="text" placeholder="새 할 일 입력"></input>
         <button type="submit">추가</button>
        </div>
    );
}

export default AddTodoForm;