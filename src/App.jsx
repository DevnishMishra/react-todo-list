import Header from "./Components/Header";
import ToDoList from "./Components/ToDoList";
import "./index.css";
import { useState } from "react";

function App() {
  const[tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  // const tasks = [
  //   { id: 1, text: "Sample Task", completed: false }
  // ];
  function addTask(){
    if(input.trim() === "") return; // Prevent adding empty tasks
    const newTask={
      id:Date.now(),
      text:input,
      completed:false
    }
    setTasks([...tasks,newTask]);
    setInput(""); // Clear input after adding task
  }
  return (
    <div className="container">
      <Header />

      <div className="input-section">
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Enter task..." />
        <button onClick={addTask}>Add</button>
      </div>

      <ToDoList tasks={tasks} />
    </div>
  );
}

export default App;