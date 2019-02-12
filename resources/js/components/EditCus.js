import React, { Component } from 'react';
import ReactDOM from 'react-dom';
export default class EditCus extends Component {
    render() {
      
        return ( 
                <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                            <th>STT</th>
                            <th>Name</th>
                            <th>Level</th>
                            <th>
                                <label>
                                    <input type="checkbox" defaultValue={0} />
                                    Check All
                                </label>
                            </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Nguyen Van A</td>
                          <td>High</td>
                          <td>
                            <div className="checkbox">
                              <label>
                                <input type="checkbox" defaultValue={1} />
                                Delete
                              </label>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                </div>
        );
    }
}


