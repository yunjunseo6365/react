import React, {useState, useEffect} from "react";
import axios from "axios";

function AxiosPostExample() {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
        setLoading(true);   // 여기에 API 요청 또는 상태 업데이트 로직 작성

        
        try{
            const response = await axios.post(
                'https://jsonplaceholder.typicode.com/posts',
                {
                    title,
                    body,
                    userId: 1,
                }
            );

            setResult(response.data);
        } catch(error){
            console.error('오류 발생', error);
            setResult({error: error.message});
        } finally{
            setLoading(false);
        }
    }

    return ( 
        <div>
            <h2>새 게시물 작성</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>제목:</label>
                    <input type="text" value={title}
                           onChange={(e) => setTitle(e.target.value)} required/>
                </div>
                <div>
                    <label>내용:</label>
                    <textarea value={body}
                              onChange={(e) => setBody(e.target.value)} required />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? '전송 중...' : '게시물 등록'}
                </button>
            </form>

            {result && (
                <div>
                    <h3>서버 응답:</h3>
                    <pre>
                        {JSON.stringify(result, null, 2)}
                    </pre>
                </div>
            )}
        </div>
    );
}

export default AxiosPostExample;