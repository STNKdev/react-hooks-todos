import React, { useState, useEffect } from 'react'
import TodoList from './TodoList'


export default function App() {

  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState('');
  const [countId, setCountId] = useState(1);

  useEffect(() => {
    let todosList = JSON.parse(localStorage.getItem('todos')) || [];
    if (todosList.length !== 0) {
      //todosList = JSON.parse(todosList);
      setTodos(todosList);
      setCountId(todosList[todosList.length - 1].id + 1);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (event) => {
    if (event.key === 'Enter') {
      setTodos([
        ...todos,
        {
          id: countId,
          title: todoTitle,
          completed: false
        }
      ]);
      setCountId(countId + 1);
      setTodoTitle('');
    }
  };

  const deleteTodo = (id) => {
    const todosTodos = todos.filter(item => item.id !== id);
    setTodos(todosTodos);
  };

  return (
      <div className="container">
        <h1>Список</h1>

        <div className="input-field">
          <input
              type="text"
              value={todoTitle}
              onChange={(event) => setTodoTitle(event.target.value)}
              onKeyPress={addTodo}
          />
          <label>Описание задачи</label>
        </div>

        <TodoList todos={todos} deleteItem={deleteTodo} />
      </div>
  );
}
