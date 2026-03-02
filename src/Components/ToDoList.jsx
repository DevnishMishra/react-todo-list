import ToDoItem from "./ToDoItem";

function ToDoList({ tasks,deleteTask,toggleTaskCompletion }) {
  return (
    <div>
      {tasks.map((task) => (
        <ToDoItem key={task.id} task={task} deleteTask={deleteTask} toggleTaskCompletion={toggleTaskCompletion} />
      ))}
    </div>
  );
}

export default ToDoList;