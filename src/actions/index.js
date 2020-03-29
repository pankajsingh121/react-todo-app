import axios from 'axios';

import {AUTH_ERROR,AUTH_USER} from './types'

     



export const signIn = (email,password,callback) => async dispatch => {
    try{
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
        const response = data.find(user => user.email === email && user.website ===password);
        if(!response){
            dispatch({type:AUTH_ERROR , payload : 'Invalid User credentials!'})
        } 
        dispatch({type:AUTH_USER , payload : JSON.stringify(response)}) ;
        localStorage.setItem('token' ,JSON.stringify(response)); 
        callback();      
    }
    catch(err){
        dispatch({type:AUTH_ERROR , payload : 'Invalid User credentials!'})

    }
}

export const signOut = ()=>{
    localStorage.removeItem('token');
    return{
        type:AUTH_USER,
        payload:''
    }
}
