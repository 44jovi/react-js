import React from "react";

export default function TodoList({ todoList }) {
  return (
    <>
      <div>World's Best Ever Todo List</div>
      <div>
        {todoList[0]}
        <br></br>
        {todoList[1]}
      </div>
    </>
  );
}
