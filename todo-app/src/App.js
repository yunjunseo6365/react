import './App.css';
import React, {useState} from 'react';
import Todoitem from './components/Todoitem';
import AddTodoForm from './components/AddTodoForm';
import classNames from 'classnames';
import { CATEGORIES } from './constants/categories';

function App() {

  const [filter, setFilter] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('general');

  const [todos, setTodos] = useState([
    {id:1, text:'리액트 공부하기', importance: '중간', completed: false, category: 'general'},
    {id:2, text:'useState 이해하기', importance: '중간', completed: true, category: 'general'},
    {id:3, text:'ToDoList 만들기', importance: '중간', completed: false, category: 'general'}
  ]);

  //자동으로 배열 꺼내서 렌더링
  const handleToggle = (id) => {    // id -> key에 해당하는 값. 유일한 값
    setTodos(
      todos.map((todo) => 
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    );
  };

  // 새 할 일 추가 함수
  const addTodo = (text, importance) =>{
    // 배열 내 리스트 추가 틀 작성
    const newTodo = {
      id: Date.now(),
      text: text,
      importance: importance,
      completed: false,
      category: selectedCategory
    }
    // setTodos로 배열 새로 만들기
    setTodos([...todos, newTodo]);
  }

  // 할 일 리스트 삭제 함수
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  // 전체 미완료 완료 (필터 구현 함수)
  const filteredTodos = todos.filter((todo)=> {
    if (filter === 'all') return true;
    else if (filter === 'active') return !todo.completed;
    else if (filter === 'completed') return todo.completed; 
    return true;
  });

  return (
    <div className='app'>
      <h1>To Do List</h1>

      {/* 카테고리 선택 추가 */}
      <div className='category-selector'>
        {CATEGORIES.map((category) => (
          <button key={category.id}
                  className={`category-btn ${selectedCategory === category.id ? 'selected' : ''}`}
                  onClick={() => setSelectedCategory(category.id)} >
             {category.icon}
             <span>{category.name}</span>
          </button>
        ))}
      </div>

      {/* 새 할일 입력, 중요도 선택, 추가버튼 */}
      <AddTodoForm onAdd={addTodo} /> 

      {/* 전체:all  / 미완료:active / 완료:completed */}
      <div className='filters'>
        {['all', 'active', 'completed', 'importance'].map((filterType) => (
          <button key={filterType}
            className={classNames({active: filter === filterType})}
            onClick={() => setFilter(filterType)}>
              {filterType === 'all' ? '전체': 
                filterType ==='active' ? '미완료' : 
                  filterType === 'completed' ? '완료': '중요'
              }
          </button>
        ))}
      </div>

      <ul className='todo-list'>
        {filteredTodos.map(todo => (
          <Todoitem todo={todo} onToggle={handleToggle} onDelete={deleteTodo} />
        ))}
      </ul>
    </div>
  );
}

export default App;