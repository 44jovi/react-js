import { useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  // Object destructuring
  const [todos, setTodos] = useState([
    { id: 1, name: "Example 1", done: true },
    { id: 2, name: "Example 2", done: false },
  ]);

  const todoName = useRef();

  function addTodo(event) {
    const name = todoName.current.value;
    // Avoid adding empty todos
    if (name === "") return;

    setTodos((previousTodos) => {
      return [...previousTodos, { id: uuidv4(), name: name, done: true }];
    });

    // Reset input box to empty
    todoName.current.value = null;
  }

  return (
    <>
      <div>World's Best Ever Todo List</div>
      <hr></hr>
      <TodoList todoList={todos} />
      <input ref={todoName} type="text" />
      <button onClick={addTodo}>Add</button>
      <button>Clear</button>
      <div>Remaining todos: {todos.length}</div>
    </>
  );
}

export default App;
