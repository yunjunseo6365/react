import React, {useRef} from "react";

function UnControlledForm() {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);
    const topicRef = useRef(null);
    const agreeRef = useRef(null);
    const fruitsRef = useRef('apple'); //디폴트값
    
    // 라디오 체인지 이벤트 발생시 
    const handleRadioChange = (e) => {
        fruitsRef.current = e.target.value;
    }


    // 폼 제출 처리
    const handleSubmit = (e) => {
        e.preventDefault();

        //ref를 통해서 값을 가지고 옴
        const formData ={
            name: nameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value,
            topic: topicRef.current.value,
            agree: agreeRef.current.checked,
            fruits: fruitsRef.current
        }

        console.log('비제어 컴포넌트 : Form Submitted value', formData);
    };

    return(
        <div>
            <h2>비제어 컴포넌트 폼</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>이름:</label>
                    <input type="text"
                           id="name"
                           name="name"
                           defaultValue=""
                           ref={nameRef}
                            />
                </div>
                <div>
                    <label>이메일:</label>
                    <input type="email"
                           id="email"
                           name="email"
                           defaultValue=""
                           ref={emailRef}
                            />
                </div>
                <div>
                    <label>메시지:</label>
                    <textarea id="message"
                              name="message"
                              defaultValue=""
                              ref={messageRef}
                           />
                </div>
                <div>
                    <label>주제:</label>
                    <select id="topic"
                            name="topic"
                            defaultValue="react"
                            ref={topicRef}>
                        <option value="react">React</option>
                        <option value="javascript">Javascript</option>
                        <option value="css">CSS</option>
                    </select>
                </div>
                <div>
                    <label>
                        <input type="checkbox"
                               name="agree" 
                               defaultValue={false}
                               ref={agreeRef} />
                        이용약관에 동의합니다       
                    </label>
                </div>

                {/* 실습 라디오버튼 */}
                <br />
                <div>
                    <label>좋아하는 과일: </label>
                    <input type="radio" name="fruits" value="apple" onChange={handleRadioChange} />사과
                    <input type="radio" name="fruits" value="banana" onChange={handleRadioChange} />바나나
                    <input type="radio" name="fruits" value="peach" onChange={handleRadioChange} />복숭아
                    <input type="radio" name="fruits" value="lemon" onChange={handleRadioChange} />레몬
                </div>
                <br />

                <button type="submit">제출</button>
            </form>
            <div>
                <h3>현재 상태:</h3>
                <pre></pre>
            </div>
        </div>
    );
}

export default UnControlledForm;