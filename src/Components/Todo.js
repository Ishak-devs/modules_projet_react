import React, { useState } from 'react'

const Todo = () => {
  const [todos, setTodos] =  useState([
    { id: 1, todos: 'hello world'},
    { id: 2, todos: 'hello world2'},
    { id: 3, todos: 'hello world3'}
   ])

   console.log(todos.length);

  return (
    <div>{todos.legth}</div>
  )
}

export default Todo