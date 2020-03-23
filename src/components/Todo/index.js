import  React  from "react";
import {useCurrentTask,useTasks} from '../hooks';
import TodoForm  from './TodoForm';
import TodoList from './TodoList';

export default function Todo()  {
    const {currentTask,setcurrentTask,reset} = useCurrentTask("");
    const {tasks,setTasks} = useTasks([]);
     
   const handleSubmit = (evt)=>{
        evt.preventDefault();        
        let task =[...tasks,
                       {
                           id: _timeInMilliseconds(),
                           value: currentTask,
                           completed: false
                        }
                   ];
        setTasks(task);     
        reset(); 

    }

    const _timeInMilliseconds = () => {
            const date = new Date();
            return date.getTime();
          }

   const deleteTask = (id) => {
            const task = tasks.filter(
              (task) => task.id !== id
            );
            setTasks(task);
          }

   const toggleDone = (index) => {
                let task = tasks.splice(index, 1);
                task[0].completed = !task[0].completed;
                const taskDone = [...tasks, ...task];
                setTasks(taskDone);
              }

    
      
        return (
          <div>
            <h1>React Todo App</h1>
            <TodoForm
            handleSubmit={handleSubmit}
            currentTask={currentTask}
            setcurrentTask={setcurrentTask}                      
            />
            <section className="container">
                <TodoList
                 tasks={tasks} 
                 deleteTask={deleteTask}
                 toggleDone={toggleDone}/>
                 </section>
          </div>
        );
    

}

