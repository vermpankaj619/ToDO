import React, { Component } from 'react'
import Login from './components/Login';
import Logout from './components/Logout';
import Todo from './components/Todo'
import {BrowserRouter ,Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
   <Switch>
   <Route exact path="/" component={Login}/>
   <Route exact  path="/Todo" component={Todo}/>
   <Route exact path="/Logout" component={Logout}/>
  </Switch>

</BrowserRouter>
    
    )
  }
}
