import React, { useState } from "react";
import TodoItem from "./TodoItem";

function TodoContainer({ jobs, reload }) {
  const [editId, setEditId] = useState(-1);

  return (
    <div className="todo-container">
      {jobs.map((el) => (
        <TodoItem key={el.id} job={el} reload={reload}
          editId={editId} setEditId={setEditId}
        />
      ))}
    </div>
  );
}

export default TodoContainer;
