import {useState,useEffect} from 'react';

export const useCurrentTask = value => {
    const [currentTask,setcurrentTask] = useState(value);

    useEffect(()=>{
        setcurrentTask(value);
    },[value])
     
     return {currentTask,
             setcurrentTask,
             reset:()=>setcurrentTask(''),
            };
}


export const useTasks = initialTask => {
    const [tasks,setTasks] = useState(initialTask); 
    return {
        tasks,
        setTasks
    };
}