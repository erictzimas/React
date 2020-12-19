import React from 'react';

class Api2 extends React.Component {
  componentDidMount() {
    const apiUrl = 'https://api.randomuser.me/?results=25';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
  }
  render() {
    return <h1>my Component has Mounted, Check the browser 'console' </h1>;
  }
}
export default Api2;