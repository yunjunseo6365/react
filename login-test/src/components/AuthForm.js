import { useState } from 'react';
import axios from 'axios';

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true); // true면 로그인, false면 회원가입
  const [form, setForm] = useState({ username: '', password: '', email: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (isLogin) {
        const res = await axios.post('/api/auth/login', {
          username: form.username,
          password: form.password,
        });
        localStorage.setItem('token', res.data.token);
        alert('로그인 성공!');
      } else {
        await axios.post('/api/auth/register', form);
        alert('회원가입 완료!');
      }
    } catch (err) {
      alert('오류: ' + err.response?.data?.message);
    }
  };

  return (
    <div>
      <p style={{ marginTop: '10px' }}>
        {isLogin ? '계정이 없으신가요?' : '이미 계정이 있으신가요?'}{' '}
        <button type="button" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? '회원가입' : '로그인'}으로 전환
        </button>
      </p>
      <h2>{isLogin ? '로그인' : '회원가입'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="비밀번호"
          value={form.password}
          onChange={handleChange}
          required
        />
        {!isLogin && (
          <input
            name="email"
            placeholder="이메일"
            value={form.email}
            onChange={handleChange}
          />
        )}
        <br />
        <button type="submit">{isLogin ? '로그인' : '가입하기'}</button>
      </form>
    </div>
  );
}

export default AuthForm;