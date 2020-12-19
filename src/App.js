import React from 'react';
import './App.css';
import { render } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './mystyle.scss';
import './mystyle2.scss';
import $ from 'jquery';
import Popper from 'popper.js';
import Bottom from './Bottom.js';
import Head from './Head.js';
import axios from 'axios';
import NameForm from './NameForm.js';
import IterButton from './IterButton';
// Adding constructor
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {apiResponse:""};
    this.handleClick = this.handleClick.bind(this);
    this.state = {isToggleOn: true};
  }
// Calling server api
  callAPI(){
    fetch("http://localhost:9000/TestAPI")
    .then(res => res.text())
    .then(res => this.setState({apiResponse: res}));
  }

  componentWillMount() {
    this.callAPI();
  }
// Setting state
  state = {
    loading : true,
    person : null,
    items : [],
    isLoaded : false,
    searchResults: null,
  }
  // Fetching data from api as component mounts
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
  }
// Handling button click
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  } 

render(){
  // Getting state values
  var { isLoaded, items} = this.state;
  // Check for null
  if(!isLoaded) {
    return <div>Loading..</div>
  } else {
    return (
  <div className = 'App'>
    <div class="container theme-showcase" role="main">
 {/*Adding header*/}
    <Head></Head>
      <body>
        {/*Adding search function*/}
         <NameForm datafromparent = {this.state.items} filtered = {this.nameEl}></NameForm>
         {/* Creating table with API data*/}
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
                  <td key = {item.id}>
                     <IterButton dataextra = {item.location.street.name} photos = {item.picture.large}></IterButton>
                  </td>
          </tr>
         ))};
       </ul>
       </table>
    </body>
  </div>
  {/*Adding footer*/}
  <Bottom></Bottom>
</div>
    );
  }
} 
}

export default App;
