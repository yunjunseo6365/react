import './App.css';
import React, {useState} from 'react';
// import JSXSyntaxRules from './jsx_examples/JSXSyntaxRules';
// import JSXExpressions from './jsx_examples/JSXExpressions';
// import BasicJSX from './jsx_examples/BasicJSX';
// import Card from './components/Card';
// import Welcome from './components/Welcome';
// import ControlledForm from './components/ControlledForm';
// import UnControlledForm from './components/UnControlledForm';
import ConditionalComponent from './components/ConditionalComponent';
import Mailbox from './components/Mailbox';
import BackgroundExample from './components/BackgroundExample';

// Button 컴포넌트 정의
// function Button({text, onClick}){
//   return(
//     <button onClick={onClick}>
//       {text}
//     </button>
//   );
// }

function App() {
  //const [state, setState] = useState(initialState);
  
  //const [count, setCount] = useState(0);    // 예시
  // state : 현재 상태값
  // setState : state의 상태를 업데이트 하는 함수
  // initialState : 초기 상태값

  // 상태 업데이트 방법
  //setCount(5);                  // 직접 값 전달
  //setCount(count => count+1);   // 이전 상태 기반으로 업데이트

  //const [user, setUser] = useState({name: 'dooly', age:10000000});
  
  // name 만 dooly -> donur 로 부분 변경 업데이트
  //setUser(preUser => ({...preUser, name:'donur'}));

  // return (
  //   <div>
  //     <UnControlledForm />
  //     <hr />
  //     <ControlledForm />
  //     {/* <JSXExpressions /> */}
  //     {/* <Button text="클릭하세요" onClick={() => alert('버튼이 클릭되었습니다.')} />
  //     <Button text="저장" onClick={() => alert('저장 rest api 콜 할 예정')} /> 
  //     <hr /> */}
  //     {/* <Welcome name="희동이" age={3} isChild={true} /> */}
  //     {/* <Welcome /> */}

  //     {/* <div>
  //       <Card title="공지사항">
  //         <p>카드 내부 콘텐츠 입니다</p>
  //         <button>자세히 보기</button>
  //       </Card>

  //       <Card title="최근 게시물">
  //         <ul>
  //           <li>1번 게시물</li>
  //           <li>2번 게시물</li>
  //           <li>3번 게시물</li>
  //         </ul>
  //       </Card>
  //     </div> */}
  //   </div>
  // );
  const isLoggedIn = true;
  const unreadMessage = "안녕하세요 반갑습니다";

  return(
    <div>
      <ConditionalComponent isLoggedIn={isLoggedIn}/>
      <Mailbox unreadMessage={unreadMessage} />
      {/* <img src={process.env.REACT_APP_PUBLIC_URL+'/may2.jpg'} alt="메이" /> */}
      <BackgroundExample />
    </div>
  );
}

export default App;