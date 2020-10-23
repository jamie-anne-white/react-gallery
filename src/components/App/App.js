import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList'

class App extends Component {

  componentDidMount = () => {
    this.getGallery();
  }

  state = {
    galleryList: []
  }

  getGallery = () => {
    console.log('getGallery running');

    axios.get('/gallery')
    .then(response => {
      console.log(response.data);
      this.setState({
        galleryList: response.data
      })
    }).catch(error => {
      alert('error in get!')
    })
  }
  addLike = (picture) => {
    console.log('in add like');
    let id = picture.id
    console.log(id);
    axios.put(`/like/${id}`)
    .then(response => {
      this.getGallery();
    }).catch(error => {
      console.log(error);
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
        <GalleryList galleryList={this.state.galleryList} addLike={this.addLike} />
      </div>
    );
  }
}
export default App;