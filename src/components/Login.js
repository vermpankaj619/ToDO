import React, { Component } from 'react'
import { Redirect} from 'react-router-dom'
import Navbar from "../components/navbar"

export default class Login extends Component {
 
  constructor(props) {
     
    super(props);
    const token = localStorage.getItem('token')
    let  LogedIn = true;
      if(token == null){
          LogedIn = false
      }

        
    this.state = {
        username:'',
        password:'',
        LogedIn
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const { username , password} = this.state
    if (username !== '' && password !=='')
    localStorage.setItem('token', 'epkfriugyfvbf0ivfjiubh')
    this.setState({
  LogedIn:true
    })
  }

  render() {
      if(this.state.LogedIn){
          return <Redirect to='/Todo'/>
      }
    return (
      <div>
      <Navbar/>
      <div class="container">
      <form onSubmit={this.handleSubmit}>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="text" placeholder='username' name='username' value={this.state.username} onChange={this.handleChange}/>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="text"  placeholder='password' name="password" value={this.state.password} onChange={this.handleChange} />
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form> 
</div>
</div>
     
    );
  }

}
  
