import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  state = {
    galleryList: []
  }

  getGallery = () => {
    axios.get('/gallery')
    .then(response => {
      this.setState({
        galleryList: response.data
      })
    }).catch(error => {
      alert('error in get!')
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
  }
}
export default App;