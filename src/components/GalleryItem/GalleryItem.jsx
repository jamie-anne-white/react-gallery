import React, { Component } from 'react';


class GalleryItem extends Component {



  render() {
      console.log(this.props);
    return (
        <>
    <img src={this.props.picture.path} />
    <p>{this.props.picture.description}</p>
    <p>This photo has {this.props.picture.likes} likes.</p>
    </>
    );
  }
}
export default GalleryItem; 