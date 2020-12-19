import { times } from 'list';
import React from 'react';
import IterButton from './IterButton';
class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state =  {isToggleon : true};
      this.handleClick = this.handleClick.bind(this);
      
    }
    state = {
            loading : true,
            person : null,
            items : [],
            isLoaded : false,
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
      }
      // Search function 
    searchProduct = (e) => {
        if (!e.name) {
            this.setState({
                searchResults: null
            });
            return
        }
        let results = this.state.filter(name =>
            results.city.toLowerCase().trim().indexOf(e.city.value.toLowerCase().trim()) !== -1);
        this.setState({
            searchResults: results
        })
    }
    handleClick() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
      }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      let searchname= this.state.value;
      
    }
  
    render() {
        let searchname = this.state.value;
        let filtered = this.props.filtered;
        var { isLoaded, searchResults} = this.state
        let items = this.props.datafromparent;
        // Check for null
        if(!isLoaded) {
            return <div>Loading..</div>
          } else {
        return (
        <div>
          {/*Adding search form*/}
          <form  onSubmit={this.handleSubmit}>
              <label>
                 Search Last Name:  
                 <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
           </form>
        <div> 
          {/*Searching for names using map function*/}
          {items.filter(person => person.name.last == searchname ).map(filteredPerson => (
        <li>
          {/*Returning table with results*/}
          <table class = "table table-dark">
            <ul>
              <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Cellphone</th>
                    </tr>
              <tr>
                  <td key = {filteredPerson.id}>                        
                    {"        " + filteredPerson.name.first} | {filteredPerson.name.last}  
                  </td>
                  <td key = {filteredPerson.id}>
                  
                    {filteredPerson.gender} 
                  </td>
                  <td key = {filteredPerson.id}>
                  
                    {filteredPerson.registered.age} 
                  </td>
                  <td key = {filteredPerson.id}>
                  
                    {filteredPerson.email} 
                  </td>
                  <td key = {filteredPerson.id}>
                  
                    {filteredPerson.cell} 
                  </td>
                  <td key = {filteredPerson.id}>
                    <IterButton dataextra = {filteredPerson.location.street.name} photos = {filteredPerson.picture.large}></IterButton>                
                  </td>
              </tr>
            </ul>
          </table>
        </li>
        ))}
        </div>
        </div>        
       )      
    }
  }
}

  export default NameForm;