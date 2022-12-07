import { useState } from "react";
import TodoList from "./TodoList";

function App() {
  // Object destructuring
  const [todos, setTodos] = useState(["Todo 1", "Todo 2"]);
  return (
    <>
      <TodoList todoList={todos} />
      <input type="text" />
      <button>Add</button>
      <button>Clear</button>
      <div>Remaining todos: {todos.length}</div>
    </>
  );
}

export default App;
