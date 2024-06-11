import React from 'react'
import TodoItem from './TodoItem'

function TodoContainer() {
  return (
    <div className='todo-container'>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  )
}

export default TodoContainer