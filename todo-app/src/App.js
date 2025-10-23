import './App.css';
import React, {useState} from 'react';
import Title from './components/Title';
import Todoitem from './components/Todoitem';
import AddTodoForm from './components/AddTodoForm';

function App() {

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

  //자동으로 배열 꺼내서 렌더링
  const handleToggle = (id) => {    // id -> key에 해당하는 값. 유일한 값으로 
    setTodos(
      todos.map((todo) => 
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    );
  };

  // 새 할 일 추가 함수
  const addTodo = (text) =>{
    // 배열 내 리스트 추가 틀 작성
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    }
    // setTodos로 배열 새로 만들기
    setTodos([...todos, newTodo]);
  }

  // 할 일 리스트 삭제 함수
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }


  return (
    <div className='app'>

      <Title title="To Do List"></Title>
      
      <AddTodoForm onAdd={addTodo} />

      <ul className='todo-list'>
        {todos.map(todo => (
          <Todoitem key={todo.id} todo={todo} onToggle={handleToggle} onDelete={deleteTodo} />
        ))}
      </ul>
    </div>
  );
}

export default App;