import React, { Component } from 'react'
import { Link , Route} from 'react-router-dom'
import Navbar from '../components/navbar';
export default class Logout extends Component {
      constructor (props ) {
          super(props)
              localStorage.removeItem('token')
      }
     
    render() {
   
   

        return (
            <div>
            <Navbar/>
            <div class="container">
                <h1> You are logged out</h1>
                <Link to ="/"> Login agan </Link>
            </div>
            </div>
        )
    }
}
