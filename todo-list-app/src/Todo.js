import React from "react";

export default function Todo({ todo, toggleTodoStatus }) {
  function todoCheckboxClick() {
    toggleTodoStatus(todo.id);
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={todoCheckboxClick}
        ></input>
        {todo.name}
      </label>
    </div>
  );
}
