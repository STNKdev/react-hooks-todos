import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todos, deleteItem}) {
  return (
    <ul>
      {todos.map(item => <TodoItem key={item.id} deleteItem={deleteItem} {...item} /> )}
    </ul>
  )
}
