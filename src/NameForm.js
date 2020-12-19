import { times } from 'list';
import React from 'react';
class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state =  {isToggleon : true};
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
         console.log(filtered)
        var { isLoaded, searchResults} = this.state
        let items = this.props.datafromparent;
        console.log(items)
        if(!isLoaded) {
            return <div>Loading..</div>
          } else {
      return (
          <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Last Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Search" />
        </form>
         <div>

         
         <div>
          {items.filter(person => person.name.last == searchname ).map(filteredPerson => (
     <li>
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
         <button class ="btn btn-secondary btn-lg active" onClick = {this.handleClick}> 
         {this.state.isToggleOn ? '' : filteredPerson.location.street.name + "   "}
         {this.state.isToggleOn ? '' : filteredPerson.location.street.number}
         <img src = {filteredPerson.picture.thumbnail}></img>
         
       
         
          </button>
       
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
       </tr>
   
    </ul>
    </table>
             </li>
        ))}
        </div>
        </div>
        
       )
       </div>
      );
      
    }
  }
}

  export default NameForm;