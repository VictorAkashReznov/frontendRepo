import { useState } from "react";

function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <input
        placeholder="title"
        type="text"
        style={{ margin: 10, padding: 10 }}
        onChange={(element) => setTitle(element.target.value)}
      ></input>
      <br></br>
      <input
        placeholder="description"
        type="text"
        style={{ margin: 10, padding: 10 }}
        onChange={(element) => setDescription(element.target.value)}
      ></input>
      <br></br>
      <button
        type="button"
        style={{ margin: 10, padding: 10 }}
        onClick={async () => {
          await fetch("http://localhost:3000/todo", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title,
              description,
            }),
          }).then(async (result) => {
            const json = await result.json();
            console.log(json);
            alert("your job is add and its id is ", json._id);
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
export default CreateTodo;
