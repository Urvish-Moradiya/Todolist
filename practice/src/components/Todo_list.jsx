import React, { useState } from 'react';
import '../assets/Todolist.css';

export const Todo_list = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
  

    const addTodo = () => {
      if (inputValue.trim() !== '') {
        setTodos([...todos, 
          { 
            id: Date.now(), 
            text: inputValue, 
            completed: false 
          }
        ]);
        setInputValue('');
      }
    };
  
    const toggleTodo = (id) => {
      setTodos( todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };
  
    const deleteTodo = (id) => {
      setTodos(todos.filter(todo => todo.id !== id));
    };
    
  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      
      <div className="input-container">
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter a new todo" onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <span onClick={() => toggleTodo(todo.id)}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
              Delete
            </button>
          </li>
        ))}
      </ul>

      <div className="todo-stats">
        Total Todos: {todos.length}
        <br />
        Completed: {todos.filter(todo => todo.completed).length}
      </div>
    </div>
  );

}
