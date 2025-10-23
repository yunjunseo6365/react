import React, {useState} from "react";

function AddTodoForm({onAdd}) {
    
    const [text, setText] = useState('');

    // <form>태그 내에서 submit으로 이벤트 발생했을때
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!text.trim()) return; 
        onAdd(text);      //onAdd에 입력한 새 할일(text)을 넣어서 리스트 작성
        setText('');      // 입력박스 초기화
    }

    return(
        <form className="input-box" onSubmit={handleSubmit}>
         <input type="text" 
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="새 할 일 입력" />
         <button type="submit">추가</button>
        </form>
    );
}

export default AddTodoForm;