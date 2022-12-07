import TodoList from "./TodoList";

function App() {
  return (
    <>
      <TodoList />;
      <input type="text" />
      <button>Add</button>
      <button>Clear</button>
      <div>Remaining todos:</div>
    </>
  );
}

export default App;
