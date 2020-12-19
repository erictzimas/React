import React, { Component } from 'react'
import axios from 'axios';
const API_URL = 'https://api.randomuser.me/?results=25'

class Search extends Component {
 state = {
   query: '',
 }

 handleInputChange = () => {
   this.setState({
     query: this.search.value
   })
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
   getInfo = () => {
    axios.get(`${API_URL}&prefix=${this.state.query}&limit=7`)
      .then(({ data }) => {
        this.setState({
          results: data.data // MusicGraph returns an object named data, 
                             // as does axios. So... data.data                             
        })
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } 
    })
  }

 render() {
  
   return (
     <form>
       <input
         placeholder="Search for..."
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
       <p>{this.state.query}</p>
     </form>
   )
 }
}

export default Search