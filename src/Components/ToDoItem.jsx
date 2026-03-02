function ToDoItem({ task,deleteTask,toggleTaskCompletion }) {
  return (
    <div className="task">
      <span
      className={task.completed ? "completed" : ""}
      onClick={() => toggleTaskCompletion(task.id)}
      >{task.text}</span>
      <button >Edit</button>
      <button onClick={()=>deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default ToDoItem;