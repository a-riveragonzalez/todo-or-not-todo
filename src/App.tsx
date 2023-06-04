import React, {useState} from "react";
import "./App.css";

// react functional component for typescript
const App: React.FC = () => {

  interface TodoInt {
    name: string;
    priority: number;
    task: string;
  }

  interface AllTodosInt {
    currentTodo: TodoInt; 
    // inside the array there will be objects with the shape of TodoInt
    allTodos: Array<TodoInt>;
  }

  const [userTodo, setUserTodo] = useState<AllTodosInt>({
    currentTodo : {
      name: "",
      priority: 0, 
      task: ""
    }, 
    allTodos: []
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
    // console.log(event.target.value);

    setUserTodo({
      ...userTodo,
      currentTodo: {
        ...userTodo.currentTodo,
        [event.target.name]: event.target.value,
      }
    })
  }

  const handleSubmit = (event: React.SyntheticEvent) : void => {
    event.preventDefault();

    setUserTodo({
      currentTodo: {
        name: "",
        priority: 0, 
        task: ""
      },
      allTodos: [
        ...userTodo.allTodos, 
        userTodo.currentTodo,
      ]
    })
  }

  // to add all todo's onto the page 
  const todosList = userTodo.allTodos.map

  console.log(userTodo)

  return (
    <>
      <header>
        <h1>Todo or not Todo</h1>
      </header>
      <form onSubmit={handleSubmit}>
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
