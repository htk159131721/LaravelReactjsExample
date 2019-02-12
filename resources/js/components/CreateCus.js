import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App'
export default class CreateCus extends Component {
    constructor(props){
        super(props);
    }
    handleSubmit(){

    }
    render() {
      
        return ( 
            <App>
                <h1>Create An User</h1>
                <form onSubmit={this.handleSubmit}>
                  <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' className='form-control' id='name' placeholder='Name'
                      required />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' className='form-control' id='email' placeholder='Email'
                      required />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' className='form-control' id='password' placeholder='Password'
                      required />
                  </div>
                  <button type='submit' className='btn btn-primary'>Add User</button>
                </form>
            </App>
        );
    }
}


