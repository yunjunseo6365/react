import React, {useState} from "react";

function AddTodoForm({onAdd}) {
    
    const [text, setText] = useState('');
    const [importance, setImp] = useState('낮음');

    // <form>태그 내에서 submit으로 이벤트 발생했을때
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!text.trim()) return; 
        onAdd(text, importance);      //onAdd에 입력한 새 할일(text), 중요도(importance)을 넣어서 리스트 작성
        setText('');      // 입력박스 초기화
    }

    return(
        <form className="input-box" onSubmit={handleSubmit}>
         <input type="text" 
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="새 할 일 입력" />
         <select onChange={(e) => setImp(e.target.options[e.target.selectedIndex].text)}>
            <option value="low">낮음</option>
            <option value="middle">중간</option>
            <option value="high">높음</option>
         </select>
         <button type="submit">추가</button>
        </form>
    );
}

export default AddTodoForm;