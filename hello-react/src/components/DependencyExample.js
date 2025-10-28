import React, {useState, useEffect} from "react";

function DependencyExample(){
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    //count가 변경될 때만 실행
    useEffect(()=>{
        console.log('카운트 변경:', count);
        document.title=`카운트: ${count}`;
    },[count]);

    //빈 의존성 배열 : 컴포넌트 마운트 될때만 실행(첫 렌더링)
    useEffect(() => {
        console.log("컴포넌트가 마운트 되었습니다.");
    }, []);

    // 언마운트 함수 : cleanUp

    //name이 변경될 때만 실행
    useEffect(() =>{
        console.log('~~~~~:', name);
    }, [name]);

    return(
        <div>
            <p>카운트: {count}</p>
            <button onClick={() => setCount(count + 1)}>증가</button>
            <br />
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    )
}

export default DependencyExample;