import React, {useState, useEffect} from "react";

function FetchGetExample() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response =>{
                if(!response.ok) {
                    throw new Error('서버 응답 오류');
                }
                return response.json();
            })
            
            .then(data => {
                // 두번째 Promise가 이행됨(JSON 데이터 파싱 완료)
                setData(data);
                setLoading(false);
            })

            .catch(error =>{
                // 네트워크 오류나 위의 throw된 오류 처리
                setError(error);
                setLoading(false);
            })
    },[]);

    if(loading) return <div>로딩 중...</div>;
    if(error) return <div>오류:{error}</div>;

    return(
        <div>
            <h2>게시물 목록</h2>
            <ul>
                {data.slice(0,5).map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default FetchGetExample;