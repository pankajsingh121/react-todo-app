import React from 'react';
export default ({currentTask,handleSubmit,setcurrentTask}) =>(
    <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="tdl-input"
                placeholder="Add a Task"
                value={currentTask}
                onChange={e => setcurrentTask(e.target.value)}
              />{
                  currentTask ?
              <button type="submit">Add Task</button>
              :""
              }
            </form>
)