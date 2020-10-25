import React, {Component} from 'react';
import './GalleryItem.css';
import Button from '@material-ui/core/Button';


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
        <> <div className='gallery-block'>
            {this.state.isPhoto
                ? <img
                        src={this.props.picture.path}
                        onClick={this.flipView}
                        alt={this.props.picture.description}/>
                : <p onClick={this.flipView}>{this.props.picture.description}</p>}
            <p>{this.props.picture.likes}
                likes!</p>
            <Button variant="contained" color="primary" onClick={() => this.props.addLike(this.props.picture)}>Like</Button>
            <Button variant="contained" color="primary"
                className="btn btn-danger btn-sm"
                onClick={() => this.props.deleteImage(this.props.picture.id)}>Delete</Button>
            <br/>
        </div> 
        </>
  );
}
}
export default GalleryItem;