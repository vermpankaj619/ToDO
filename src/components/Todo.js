import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Redirect} from 'react-router-dom'
import Mainpage from './Todo/Mainapge'
import Navbar from '../components/navbar'
export default class Todo extends Component {

   constructor(props) {
       super(props)
       const token = localStorage.getItem('token')

      let  LogedIn = true;
        if(token == null){
            LogedIn = false
        }
        this.state ={
            LogedIn
        }
             
    }
 
   


    render() {
        console.log(this.state.List)
        if(this.state.LogedIn === false){
            return <Redirect to='/'/>
        }
        return (
            <div>
            <Navbar/>
            <div className="container">
            
           
         
            
            <Mainpage  />

        </div>
        <div className="container">
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><Link to="/logout">Logout</Link></button>
        </div>
        </div>

            
        )
    }
}
