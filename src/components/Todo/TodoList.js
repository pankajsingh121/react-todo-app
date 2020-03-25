import React from 'react';
import propTypes from 'prop-types';

const TodoList= ({ tasks, deleteTask, toggleDone }) => {
  return (
    <div data-test="component-todoList">
      {
        tasks.map((task, index) =>
          (
            <div key={task.id} className="tdl-task" data-test="task-todoList">
              <span className={task.completed ? "is-completed" : ""}>{task.value}</span>
              <button onClick={() => deleteTask(task.id)} data-test="delete-button">Delete</button>
              <button onClick={() => toggleDone(index)} data-test="toggle-button">{task.completed ? "Undo" : "Done"}</button>
            </div>
          )
        )
      }
    </div>
  );
}
TodoList.propTypes = {
  toggleDone:propTypes.func,
  deleteTask:propTypes.func
}


export default TodoList;