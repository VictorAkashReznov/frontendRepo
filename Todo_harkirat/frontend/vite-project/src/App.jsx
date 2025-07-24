import { useState } from "react";
import CreateTodo from "./components/CreateTodo";
import "./App.css";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);
  fetch("http://localhost:3000/todos").then(async (result) => {
    let json = await result.json();
    setTodos(json.todos);
  });

  return (
    <>
      <div>
        <span>hello world</span>
        <CreateTodo />
        <Todos todos={todos} />
      </div>
    </>
  );
}

export default App;
