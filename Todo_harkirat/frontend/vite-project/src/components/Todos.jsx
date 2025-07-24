/*
todos=[
{ title:"go to gym", 
  description:"good for health",
  completed:False },
]

*/

export function Todos({ todos }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button>{todo.completed ? "Completed" : "Mark as Completed"}</button>
        </div>
      ))}
    </div>
  );
}
