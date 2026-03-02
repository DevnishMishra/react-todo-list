import ToDoItem from "./ToDoItem";

function ToDoList({ tasks,deleteTask,toggleTaskCompletion,editTask }) {
  return (
    <div>
      {tasks.map((task) => (
        <ToDoItem key={task.id} task={task}
         deleteTask={deleteTask} 
         toggleTaskCompletion={toggleTaskCompletion} 
         editTask={editTask}/>
      ))}
    </div>
  );
}

export default ToDoList;