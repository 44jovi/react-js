import { useState } from "react";
import TodoList from "./TodoList";

function App() {
  // Object destructuring
  const [todos, setTodos] = useState([{ id: 1, name: "Todo 1", done: false }]);
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
