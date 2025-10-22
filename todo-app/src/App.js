import './App.css';
import React, {useState} from 'react';
import Title from './components/Title';
import Todoitem from './components/Todoitem';
import AppTodoForm from './components/AddTodoForm';

function App() {

  // 리액트 공부하기(미완료)
  // useState 이해하기(완료)
  // ToDoList 만들기(미완료)
  const [todos, setTodos] = useState([
    {id:1, text:'리액트 공부하기', completed: false},
    {id:2, text:'useState 이해하기', completed: true},
    {id:3, text:'ToDoList 만들기', completed: false}
  ]);
  
  // 클릭 시 기존 배열을 기반으로 completed값만 반전시킨 새 객체로 만듦
//   const handleToggle = (clickedId) =>{
//     const updateTodos = todos.map(todo =>(
//       todo.id === clickedId ?  {...todo, completed: !todo.completed} : todo
//     ));
//     // 새 배열로 상태가 업데이트되어 리렌더링 세팅
//     setTodos(updateTodos);
// };

  const handleToggle = (id) => {    // id -> key에 해당하는 값. 유일한 값으로 
    setTodos(
      todos.map((todo) => 
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    );
  };



  return (
    <div className='app'>
      <Title title="To Do List"></Title>
      
      <AppTodoForm />
      <ul className='todo-list'>
        {todos.map(todo => (
          <Todoitem todo={todo} onToggle={handleToggle} />
        ))}
      </ul>

      {/* <Button /> */}
    </div>
  );
}

export default App;