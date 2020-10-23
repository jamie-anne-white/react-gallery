
import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.jsx'
import './GalleryList.css'



class GalleryList extends Component {



    render() {
        console.log(this.props);
      return (
      <>
            <div className="gallery">

              {this.props.galleryList.map( (picture) => {
          return (
            //   <GalleryItem key={picture.id} picture={picture} galleryList={this.props.galleryList}/>
            <GalleryItem key={picture.id} 
            picture={picture}
            addLike={this.props.addLike}/>
          )
      })}
  
        </div>
        </>
          
      );
    }
  }

  export default GalleryList; 