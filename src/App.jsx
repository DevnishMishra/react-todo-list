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
  //Delete Task
  function deleteTask(id){
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };
  //Toggle Task Completion
  function toggleTaskCompletion(id){
    const updatedTasks = tasks.map(task => {
      if(task.id === id){
        return {...task, completed: !task.completed};
      }
      return task;
    });
    setTasks(updatedTasks);
  } 
  const editTask = (id, newText) => {
  setTasks(
    tasks.map(task =>
      task.id === id
        ? { ...task, text: newText }
        : task
    )
  );
};
  return (
    <div className="container">
      <Header />

      <div className="input-section">
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Enter task..." />
        <button onClick={addTask}>Add</button>
      </div>

      <ToDoList tasks={tasks} 
      deleteTask={deleteTask} 
      toggleTaskCompletion={toggleTaskCompletion}
      editTask={editTask}
      
      />
    </div>
  );
}

export default App;