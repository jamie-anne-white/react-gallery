import React, { Component } from 'react';


class GalleryItem extends Component {

  state = {
    isPhoto: true
}

//toggles between photo and description
flipView = () => {
    this.setState({
        isPhoto: !this.state.isPhoto
    })
}


render() {
  console.log(this.props);
  return (
      <>
          {this.state.isPhoto ?
              <img src={this.props.picture.path} onClick={this.flipView} />
              : <p onClick={this.flipView}>{this.props.picture.description}</p>}
          <p>This photo has {this.props.picture.likes} likes.</p>
          <button onClick={() => this.props.addLike(this.props.picture)}>Like</button>
      </>
  );
}
}
export default GalleryItem; 