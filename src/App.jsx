import Header from "./Components/Header";
import ToDoList from "./Components/ToDoList";
import "./index.css";

function App() {
  const tasks = [
    { id: 1, text: "Sample Task", completed: false }
  ];

  return (
    <div className="container">
      <Header />

      <div className="input-section">
        <input type="text" placeholder="Enter task..." />
        <button>Add</button>
      </div>

      <ToDoList tasks={tasks} />
    </div>
  );
}

export default App;