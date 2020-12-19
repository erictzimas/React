import React from 'react';
import './App.css';
import { render } from '@testing-library/react';
import axios from 'axios';

class IterButton extends React.Component{ 
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.state =  {isToggleon : true};
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick() { 
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
      }
      
      render() {
        var datarr = this.props.dataextra;
        var photos = this.props.photos;
// Check for null
        if(!datarr && !datarr.length){
            return (
                <div>Could not find more data.</div>
            );
        } else {
        return(
          <div>
            {/*Creating button and passing address and picture if toggled*/}
            <button onClick = {this.handleClick} class="btn btn-dark" > More</button>
            {this.state.isToggleOn ?  "Address: " + datarr + "   " : '' }
            <img src = {this.state.isToggleOn ?   photos  : '' }></img>

          </div>
        );
      }
    }
}
export default IterButton;