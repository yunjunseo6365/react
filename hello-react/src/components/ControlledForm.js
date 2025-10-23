import React, {useState} from "react";

function ControlledForm() {

    const [formData, setFormData] = useState({
        name:'',
        email:'',
        message: '',
        topic: 'react',
        agree: false,
        fruits: ''
    });

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type ==='checkbox' ? checked: value
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted value', formData);
    };

    return(
        <div>
            <h2>제어 컴포넌트 폼</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>이름:</label>
                    <input type="text"
                           id="name"
                           name="name"
                           value={formData.name}
                           onChange={handleChange} />
                </div>
                <div>
                    <label>이메일:</label>
                    <input type="email"
                           id="email"
                           name="email"
                           value={formData.email}
                           onChange={handleChange} />
                </div>
                <div>
                    <label>메시지:</label>
                    <textarea id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                           />
                </div>
                <div>
                    <label>주제:</label>
                    <select id="topic"
                            name="topic"
                            value={formData.topic} onChange={handleChange}>
                        <option value="react">React</option>
                        <option value="javascript">Javascript</option>
                        <option value="css">CSS</option>
                    </select>
                </div>
                <div>
                    <label>
                        <input type="checkbox"
                               name="agree" 
                               checked={formData.agree} 
                               onChange={handleChange} />
                        이용약관에 동의합니다       
                    </label>
                </div>

                {/* 실습 라디오버튼 */}
                <br />
                <div>
                    <label>좋아하는 과일: </label>
                    <input type="radio" name="fruits" value="apple" checked={formData.fruits === 'apple'}
                           onChange={handleChange} />사과
                    <input type="radio" name="fruits" value="banana" checked={formData.fruits === 'banana'}
                           onChange={handleChange} />바나나
                    <input type="radio" name="fruits" value="peach" checked={formData.fruits === 'peach'}
                           onChange={handleChange} />복숭아
                    <input type="radio" name="fruits" value="lemon" checked={formData.fruits === 'lemon'}
                           onChange={handleChange} />레몬
                </div>
                <br />

                <button type="submit">제출</button>
            </form>
            <div>
                <h3>현재 상태:</h3>
                <pre>
                    {JSON.stringify(formData, null, 2)}
                </pre>
            </div>
        </div>
    );
}

export default ControlledForm;