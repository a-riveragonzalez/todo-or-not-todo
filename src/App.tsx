import React, {useState} from "react";
import "./App.css";

// react functional component for typescript
const App: React.FC = () => {

  interface TodoInt {
    name: string, 
    priority: number,
    task: string
  }

  const [userTodo, setUserTodo] = useState<{currentTodo: TodoInt}>({
    currentTodo : {
      name: "",
      priority: 0, 
      task: ""
    }
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
    // console.log(event.target.value);

    setUserTodo({
      currentTodo: {
        ...userTodo.currentTodo,
        [event.target.name]: event.target.value,
      }
    })
  }

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
          value={userTodo.currentTodo.name}
          onChange={handleChange}
        />
        <label htmlFor="priority">Priority from 1-4</label>
        <input 
          id="priority" 
          type="number" 
          name="priority" 
          value={userTodo.currentTodo.priority}
          onChange={handleChange}
        />
        <label htmlFor="task">Task :</label>
        <input 
          id="task" 
          type="text" 
          name="task" 
          value={userTodo.currentTodo.task}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
