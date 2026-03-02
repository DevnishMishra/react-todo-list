import { useState } from "react"; 
function ToDoItem({ task,deleteTask,toggleTaskCompletion,editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  function handleSave(){
    editTask(task.id, newText);
    setIsEditing(false);
  };
  return (
    <div className="task">
      {isEditing ? (
        <>
          <input type="text" value={newText} onChange={(e) => setNewText(e.target.value)} />
          <button onClick={handleSave}>Save</button>
          </>
      ):(
        <>
      <span
      className={task.completed ? "completed" : ""}
      onClick={() => toggleTaskCompletion(task.id)}
      >{task.text}</span>
      <button onClick={()=>setIsEditing(true)}>Edit</button>
      <button onClick={()=>deleteTask(task.id)}>Delete</button>
    </>)}
    </div>
    
  )
}

export default ToDoItem;