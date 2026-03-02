function ToDoItem({ task }) {
  return (
    <div className="task">
      <span>{task.text}</span>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}

export default ToDoItem;