import React from 'react';

export default ({tasks,deleteTask,toggleDone}) =>(
    tasks.map((task, index) => 
    (
     <div key={task.id} className="tdl-task">
       <span className={task.completed ? "is-completed" : ""}>{task.value}</span>
       <button onClick={() => deleteTask(task.id)}>Delete</button>
       <button onClick={() => toggleDone(index)}>{task.completed ? "Undo" : "Done"}</button>
     </div>
   )
 )
)