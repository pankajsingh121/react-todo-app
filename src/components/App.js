import  React from "react";

export default class App extends React.Component
{
  constructor(props) {
    super(props);

    this.state = {
      currentTask: "",
      tasks: []
    };
  }

   handleSubmit = (evt) => {
    evt.preventDefault();
    this.setState({
      currentTask: "",
      tasks: [
        ...this.state.tasks,
        {
          id: this._timeInMilliseconds,
          value: this.state.currentTask,
          completed: false
        }
      ]
    });
  }

  deleteTask = (id) => {
    const tasks = this.state.tasks.filter(
      (task) => task.id !== id
    );
    this.setState({ tasks });
  }

 toggleDone = (index) => {
    let task = this.state.tasks.splice(index, 1);
    task[0].completed = !task[0].completed;
    const tasks = [...this.state.tasks, ...task];
    this.setState({ tasks });
  }

    renderTasks = () => {
    return this.state.tasks.map((task, index) => 
       (
        <div key={task.id} className="tdl-task">
          <span className={task.completed ? "is-completed" : ""}>{task.value}</span>
          <button onClick={() => this.deleteTask(task.id)}>Delete</button>
          <button onClick={() => this.toggleDone(index)}>{task.completed ? "Undo" : "Done"}</button>
        </div>
      )
    );
  }

   render() {
    console.log(this.state);
    const {currentTask}= this.state;
    return (
      <div>
        <h1>React Todo App</h1>
        <form onSubmit={ this.handleSubmit}>
          <input
            type="text"
            className="tdl-input"
            placeholder="Add a Task"
            value={this.state.currentTask}
            onChange={e => this.setState({ currentTask: e.target.value })}
          />{
              currentTask ?
          <button type="submit">Add Task</button>
          :""
          }
        </form>
        <section className="container">{this.renderTasks()}</section>
      </div>
    );
  }

   _timeInMilliseconds = () => {
    const date = new Date();
    return date.getTime();
  }
}

