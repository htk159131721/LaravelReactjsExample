import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import {Link} from 'react-router-dom'
export default class CustomerRow extends Component {

    constructor(props){
      super(props);
      
    }
   fcHandelDel(e){
      e.preventDefault();
      
   }
    render() {
    
        return ( 
            <tr>
              <td>
                {this.props.obj.id}
              </td>
              <td>
                {this.props.obj.name}
              </td>
              <td>
                {this.props.obj.level}
              </td>
              <td>
                <Link className='btn btn-primary' to={'/users/edit/' + this.props.obj.id}>Edit</Link>
              </td>
              <td>
                <button className='btn btn-danger' onClick={this.fcHandleDel}>Delete</button>
              </td>
            </tr> 
        );
    }
}


