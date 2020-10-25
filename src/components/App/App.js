import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList'
import GalleryForm from '../GalleryForm/GalleryForm.jsx'
import Button from '@material-ui/core/Button';


class App extends Component {

    componentDidMount = () => {
        this.getGallery();
    }

    state = {
        galleryList: []
    }

    getGallery = () => {
        console.log('getGallery running');

        axios
            .get('/gallery')
            .then(response => {
                console.log(response.data);
                this.setState({galleryList: response.data})
            })
            .catch(error => {
                alert('error in get!')
            })
    }
    addLike = (picture) => {
        console.log('in add like');
        let id = picture.id
        console.log(id);
        axios
            .put(`/gallery/like/${id}`)
            .then(response => {
                this.getGallery();
            })
            .catch(error => {
                console.log(error);
            })
    }

    addImage = (newImage) => {
        console.log('in addImage');
        console.log(newImage);

        //TO DA SERVER send to server
        axios
            .post('/gallery', newImage)
            .then(response => {
                this.getGallery();
            })
            .catch(error => {
                console.log('post error', error);
            })
    }

    deleteImage = (id) => {
        console.log('ready to delete', id);
        // send delete request to server   axios.delete(`/gallery/${id}`)
        // .then((response) => {     this.getGallery();   }).catch((error) => {
        // console.log(error);   })
        axios
            .delete(`/gallery/${id}`)
            .then((response) => {
                this.getGallery();
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Gallery</h1>
                </header>

                <br/>
                <GalleryForm addImage={this.addImage}/> {/* <GalleryList galleryList={this.state.galleryList} addLike={this.addLike} /> */}
                <GalleryList
                    galleryList={this.state.galleryList}
                    addLike={this.addLike}
                    deleteImage={this.deleteImage}/>

                <Button variant="contained" color="primary">
                Hello World
                </Button>
            </div>
        );
    }
}
export default App;