import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import axios from 'axios'
import {Link} from 'react-router-dom'
import CustomerRow from './CustomerRow'
export default class ShowlistCustomers extends Component {

    constructor(props){
      super(props);
      this.state = {
        Customers: []
      }
    }
    componentDidMount(state) {
        axios.get(window.Laravel.baseUrl + '/api/getCustomers')
        .then(response => {
            this.setState({
                Customers: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })
  }

  fetchRows ()  {
      if(this.state.Customers instanceof Array){
       return this.state.Customers.map( (object, i) => {
          return <CustomerRow obj = {object} key={i} index={i} />
        })
      }
    }
    render() {
    
        return ( 
              <App>
                <h1>Users</h1>
                <div className='clearfix'>
                  <Link className='btn btn-success pull-right' to='/customers/create'>Add User</Link>
                </div><br />
                <table className='table table-hover'>
                  <thead>
                    <tr>
                      <td>ID</td>
                      <td>Name</td>
                      <td>Email</td>
                      <td>Actions</td>
                    </tr>
                  </thead>
                  <tbody>
                    {this.fetchRows()}
                  </tbody>
                </table>
              </App>
        );
    }
}


