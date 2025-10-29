import React, {useState} from "react";

function FetchDeleteExample() {

    const [postId, setPostId] = useState(1);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        setLoading(true);

        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${postId}`,
                {
                    method:'DELETE',
                }
            );

            if (response.ok) {
                setResult({
                    success: true,
                    message: `게시물 ${postId} 번이 삭제 되었습니다`,
                });
            } else {
                throw new Error('삭제 실패');
            }
        } catch(error) {
            console.log('오류 발생:', error);
            setResult({success: false, error: error.message});
        } finally{
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>게시물 삭제</h2>
            <div>
                <label>삭제할 게시물 ID: </label>
                <input type='number' value={postId}
                       onChange={(e) => setPostId(e.target.value)}
                       min='1' />
            </div>
            <button onClick={handleDelete} disabled={loading}>
                {loading ? '삭제 중....' : '게시물 삭제'}
            </button>
            {result &&
                <div>
                    <h3>결과: </h3>
                    <pre>{result.success ? result.message: `오류: ${result.error}`}</pre>
                </div>    
            }
        </div>
    )
}

export default FetchDeleteExample;