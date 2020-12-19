import logo from './logo.svg';
import React from 'react';
import './App.css';
import { render } from '@testing-library/react';
import App from './App';
import Api from './Api.js';
class Table extends React.Component{

    render() {
        
 
        
        return (
            <body>
            <div className="row">
              <div className="col-xs-12">
                <div className="table-responsive">
                  <table className="table table-condensed table-hover table-bordered">
                    <tbody><tr className="warning">
                        <th>A/A</th>
                        <th>Name</th>                                
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Cell Phone</th>
                      </tr>
                    </tbody>
                   <div>
              
              <a className="btn btn-xs btn-default btn-block" title="Usernames">
                <span className="glyphicon glyphicon-eye-open" />   {this.state.loading || !this.state.person ?  (
        <div>loading...</div>
      ) : (
        <div>{this.state.person.name.first}</div>

      )}
              </a>
                                              
            </div>
            </table></div></div></div>
            </body>
        );
    }
}
export default Table;