import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>Todo or not Todo</h1>
      </header>
      <form>
        <label htmlFor="name">Name :</label>
        <input 
          id="name" 
          type="text" 
          name="name" 
          value=""
        />
        <label htmlFor="priority">Priority from 1-4</label>
        <input 
          id="priority" 
          type="number" 
          name="priority" 
          value=""
        />
        <label htmlFor="task">Task :</label>
        <input 
          id="task" 
          type="text" 
          name="task" 
          value=""
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
