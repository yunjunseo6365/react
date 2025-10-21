import './App.css';
// import JSXSyntaxRules from './jsx_examples/JSXSyntaxRules';
// import JSXExpressions from './jsx_examples/JSXExpressions';
// import BasicJSX from './jsx_examples/BasicJSX';
import Card from './components/Card';
import Welcome from './components/Welcome';

// Button 컴포넌트 정의
// function Button({text, onClick}){
//   return(
//     <button onClick={onClick}>
//       {text}
//     </button>
//   );
// }

function App() {
  return (
    <div>
      {/* <JSXExpressions /> */}
      {/* <Button text="클릭하세요" onClick={() => alert('버튼이 클릭되었습니다.')} />
      <Button text="저장" onClick={() => alert('저장 rest api 콜 할 예정')} /> 
      <hr /> */}
      {/* <Welcome name="희동이" age={3} isChild={true} /> */}
      {/* <Welcome /> */}
      <div>
        <Card title="공지사항">
          <p>카드 내부 콘텐츠 입니다</p>
          <button>자세히 보기</button>
        </Card>

        <Card title="최근 게시물">
          <ul>
            <li>1번 게시물</li>
            <li>2번 게시물</li>
            <li>3번 게시물</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}

export default App;