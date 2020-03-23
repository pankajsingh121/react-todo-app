import  React from "react";
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './Header';
import Landing from './Landing'
import Todo from './Todo';

export default class App extends React.Component
{
 
   render() {
    
    return (
      <div>
       <BrowserRouter>
       <div className="root">
         <Header/>
         <Route exact path="/" component={Landing}/>
         <Route  path="/todo" render={()=><Todo />}/>
         <footer>&copy;{new Date().getFullYear()}</footer>
       </div>
       </BrowserRouter>
      </div>
    );
  }


}

