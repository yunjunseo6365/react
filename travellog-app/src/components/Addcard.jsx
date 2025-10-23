import React, {useState} from "react";

function Addcard() {

    const [range, setRange] = useState(3);

    const rangeVal = (e) =>{
        setRange(e.target.value);
    }

    return (
        <form className="addform">
            <h2>새로운 여행지 추가</h2>
            <div>
                <h3>여행지 이름</h3>
                <input type="text" placeholder="예 : 파리" />
            </div>
            <div>
                <h3>이미지 URL (선택사항)</h3>
                <input type="text" placeholder="https://example.com/image.jpg" />
            </div>
            <div>
                <h3>설명</h3>
                <textarea placeholder="이 여행지에 대한 설명을 작성하세요" />
            </div>
            <div>
                <h3>평점 (1 - 5)</h3>
                <input type="range" min="0" max="5" onChange={rangeVal} /><span>{range}</span>
            </div>
            <div>
                <button type="submit" className="submit-trv-btn">여행지 추가</button>
            </div>
        </form>
    );
}

export default Addcard;