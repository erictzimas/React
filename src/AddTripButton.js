import logo from './logo.svg';
import React from 'react';
import './App.css';
import { render } from '@testing-library/react';
import App from './App';

const AddTripButton = props => {
  return <button onClick={props.addTrip}>Add a trip</button>
}

export default AddTripButton
