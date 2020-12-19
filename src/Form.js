import logo from './logo.svg';
import React from 'react';
import './App.css';
import { render } from '@testing-library/react';
import App from './App';
class Form extends React.Component{

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  
    render() {
      
        return (
            <form className="form-inline">
  <div className="form-group mb-2">
    <label htmlFor="staticEmail2" className="sr-only">Email</label>
  </div>
  <div className="form-group mx-sm-3 mb-2">
    <label htmlFor="inputPassword2" className="sr-only">Search</label>
    <input type="text" className="form-control" id="inputPassword2" placeholder="Employee Name"  />
  </div>
  <button type="submit" className="btn btn-primary mb-2">Search</button>
</form>

        );
    }
}
export default Form;