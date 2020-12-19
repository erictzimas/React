import logo from './logo.svg';
import React from 'react';
import './App.css';
import { render } from '@testing-library/react';
import App from './App';
class Api extends React.Component{
    state = {
        loading : true,
        person : null
      }
      async componentDidMount() {
         const url = "https://api.randomuser.me/?results=25";
         const response = await fetch(url);
         const data = await response.json();
         this.setState({person: data.results, loading: false});
         console.log(data.results[0]);
      }
 render() {
     var arr = [];
     arr = this.state.person;
     return (
         <div>h</div>
     )
 }    
}
export default Api;
