import React from "react";
import Todo from "./Todo";

export default function TodoList({ todoList }) {
  return (
    <>
      <div>
        {todoList.map((todo) => {
          return <Todo key={todo.id} todo={todo} />;
        })}
      </div>
    </>
  );
}
