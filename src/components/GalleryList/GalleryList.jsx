
import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.jsx'



class GalleryList extends Component {



    render() {
        console.log(this.props);
      return (
      <>
              {this.props.galleryList.map( (picture) => {
          return (
              <GalleryItem key={picture.id} picture={picture} galleryList={this.props.galleryList}/>
          )
      })}
  
        </>
          
      );
    }
  }

  export default GalleryList; 