import React, {useState} from "react";

function Addcard({onCard}) {

    // 여행지 이름
    const [title, setTitle] = useState('');
    // 이미지 URL
    const [img, setImg] = useState("https://placehold.co/300x200?text=none");
    // 설명
    const [text, setText] = useState('');
    // 평점
    const [rating, setRating] = useState(3);

    // <form>태그 내에서 submit으로 이벤트 발생
    const handleSubmit = (e) => {
        e.preventDefault();

        // 필수 요소 설정 및 메시지 출력
        if (title.trim() === '' || text.trim() === '') {
            alert('여행지 이름과 설명을 입력해주세요.');
            return;
        }
        // 렌더링
        onCard(title, img, rating, text)
        // 초기화
        setTitle('');
        setText('');
        setRating(3);
        setImg('https://placehold.co/300x200?text=none');
    }

    return (
        <form className="addform" onSubmit={handleSubmit}>
            <h2>새로운 여행지 추가</h2>
            <div>
                <h3>여행지 이름</h3>
                <input type="text" className="title" placeholder="예 : 파리" 
                onChange={(e) => setTitle(e.target.value)} value={title} />
            </div>
            <div>
                <h3>이미지 URL (선택사항)</h3>
                <input type="text" className="imgurl" placeholder="https://example.com/image.jpg" 
                 onChange={(e) => setImg(e.target.value)} />
            </div>
            <div>
                <h3>설명</h3>
                <textarea className="txtarea" placeholder="이 여행지에 대한 설명을 작성하세요"
                onChange={(e) => setText(e.target.value)} value={text}/>
            </div>
            <div>
                <h3>평점 (1 - 5)  /  현재평점 : {rating}</h3>
                <input type="range" min="0" max="5" className="rating-range"
                onChange={(e) => setRating(e.target.value)} value={rating} />
            </div>
            <div>
                <button type="submit" className="submit-trv-btn">여행지 추가</button>
            </div>
        </form>
    );
}

export default Addcard;