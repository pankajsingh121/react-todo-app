import React from 'react';
export default ({currentTask,handleSubmit,setcurrentTask}) =>(
  <div data-test="component-todoForm">
    <form onSubmit={handleSubmit}>
              <input
                data-test="input-box"
                type="text"
                className="tdl-input"
                placeholder="Add a Task"
                value={currentTask}
                onChange={e => setcurrentTask(e.target.value)}
              />{
                  currentTask ?
              <button 
              data-test="submit-button"
              type="submit">Add Task</button>
              :""
              }
            </form>
            </div>
)