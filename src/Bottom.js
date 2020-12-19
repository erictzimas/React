import logo from './logo.svg';
import React from 'react';
import './App.css';
import { render } from '@testing-library/react';
import App from './App';
class Bottom extends React.Component{

    render() {
        return (
        <footer className="navbar-inverse">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <p className="text-center">© Eric Tzimas Dev.</p>
        </div>
      </div>
    </div>
  </footer>
        );
    }
}
export default Bottom;