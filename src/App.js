import logo from './logo.svg';
import React from 'react';
import './App.css';
import AddTripButton from './AddTripButton.js';
import { render } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './mystyle.scss';
import './mystyle2.scss';
import $ from 'jquery';
import Popper from 'popper.js';
import Bottom from './Bottom.js';
import Head from './Head.js';
import Form from './Form.js'
import axios from 'axios';
import Home from './Home.js';
import Colors from './Colors.js';
import ReactTable from 'react';
import Buttons from './Buttons.js';
import Search from './Search.js';
import MyComponents from './MyComponents.js';
import Login from "./LoginUsername";
import NameForm from './NameForm.js';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {apiResponse:""};
    this.handleClick = this.handleClick.bind(this);
    this.state = {isToggleOn: true};
    

  }
  updateSearch(event) {
    this.setState({search: event.target.value.substr(0,20)});
  }
  
  callAPI(){
    fetch("http://localhost:9000/TestAPI")
    .then(res => res.text())
    .then(res => this.setState({apiResponse: res}));
  }

  componentWillMount() {
    this.callAPI();
  }
  state = {
    loading : true,
    person : null,
    items : [],
    isLoaded : false,
    searchResults: null,
  }
  
  async componentDidMount() 
  {
   
    fetch('https://api.randomuser.me/?results=25')
      .then(res => res.json())
      .then(json => {
             this.setState({
               isLoaded: true,
               items: json.results,
             })
      });

    const url = "https://api.randomuser.me/?results=25";

   
     const response = await fetch(url);
     const data = await response.json();
     const pinakas = this.state;
     console.log(pinakas)
  }
 
  triggerAddTripState = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isAddTripState: true
    })
  }
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  
  
render(){
  
  
  
  
  
  var { isLoaded, items} = this.state;
  if(!isLoaded) {
    return <div>Loading..</div>
  } else {
    return (
   
     
     <div className = 'App'>
       

       <div class="container theme-showcase" role="main">
       <Head></Head>
       <body>
       
      <NameForm datafromparent = {this.state.items} filtered = {this.nameEl}></NameForm>
       
      <table class = "table table-dark">
       <ul>
         <tr>
           <th>Name</th>
           <th>Gender</th>
           <th>Age</th>
           <th>Email</th>
           <th>Cellphone</th>
           </tr>
         {items.map(item => (
           <tr>
          <td key = {item.id}>
            <button class ="btn btn-secondary btn-lg active" onClick = {this.handleClick}> 
            {this.state.isToggleOn ? '' : item.location.street.name + "   "}
            {this.state.isToggleOn ? '' : item.location.street.number}
            <img src = {item.picture.thumbnail}></img>
            
          
            
             </button>
          
           {"        " + item.name.first} | {item.name.last}  
          </td>
          <td key = {item.id}>
          
            {item.gender} 
          </td>
          <td key = {item.id}>
          
            {item.registered.age} 
          </td>
          <td key = {item.id}>
          
          {item.email} 
        </td>
        <td key = {item.id}>
          
          {item.cell} 
        </td>
          </tr>
         ))};
       </ul>
       </table>
      
       </body>
       </div>
       <Bottom></Bottom>
     </div>
    );
  }
}
  

 
  
}

export default App;
