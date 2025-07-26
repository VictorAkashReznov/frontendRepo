import React, { useState } from "react";

import "./App.css";

function App() {
  const [title1, setTitle1] = useState("Akash");
  const [title2, setTitle2] = useState("Abhinav");

  return (
    <div>
      <Heading title={title1}></Heading>
      <Heading title={title2}></Heading>
      <Heading title={"Ayush "}></Heading>
      <Heading title={"Aman "}></Heading>
      <button
        onClick={() => {
          setTitle1(Math.random());
        }}
      >
        Press this button
      </button>
    </div>
  );
}

const Heading = React.memo(function ({ title }) {
  return (
    <>
      <div>{title}</div>
    </>
  );
});
// function Heading({ title }) {
//   return (
//     <>
//       <div>{title}</div>
//     </>
//   );
// }
export default App;
