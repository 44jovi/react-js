import { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  // Object destructuring
  const [todos, setTodos] = useState([]);

  const todoName = useRef();

  // Empty dependencies array -> only run once when app is launched
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log("Local Storage Key: " + LOCAL_STORAGE_KEY);
    console.log("savedTodos: " + savedTodos);
    if (savedTodos) setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(event) {
    const name = todoName.current.value;
    // Avoid adding empty todos
    if (name === "") return;

    setTodos((previousTodos) => {
      return [...previousTodos, { id: uuidv4(), name: name, done: false }];
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
