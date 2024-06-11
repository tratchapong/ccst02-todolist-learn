import React from 'react'

function TodoItem() {
  return (
    <div className="todo-item">
      <input type="text" disabled/>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  )
}

export default TodoItem