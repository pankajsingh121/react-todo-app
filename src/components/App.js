import  React from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from './Header';
import Landing from './Landing'
import Todo from './Todo';
import LoginForm from './auth/LoginForm';
export default class App extends React.Component
{
 
   render() {
    
    return (
      <div data-test="component-app">
       <Router>
       <div className="root">
         <Header/>
         <Switch>
         <Route exact path="/" component={Landing}/>
         <Route  path="/login" component ={LoginForm}/>
         <Route  path="/todo" render={()=><Todo />}/>
         </Switch>

         <footer>&copy;{new Date().getFullYear()}</footer>
       </div>
       </Router>
      </div>
    );
  }


}

