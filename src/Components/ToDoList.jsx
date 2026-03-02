import ToDoItem from "./ToDoItem";

function ToDoList({ tasks }) {
  return (
    <div>
      {tasks.map((task) => (
        <ToDoItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default ToDoList;