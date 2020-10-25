import React, {Component} from 'react';
import Button from '@material-ui/core/Button';


class GalleryForm extends Component {

    state = {
        newImage: {
            newPath: '',
            newDescription: ''
        }
    }

    handleChangeFor = (event, propertyName) => {
        this.setState({
            newImage: {
                ...this.state.newImage,
                [propertyName]: event.target.value
            }
        })
    }

    handleSubmit = (event) => {
        //send image to addImage on app.js
        this
            .props
            .addImage(this.state);
        //clear inputs
        this.setState({
            newImage: {
                newPath: '',
                newDescription: ''
            }
        })
    }

    render() {
        return (
            <div>
                <label>Image path:
                </label>
                <input
                    type='text'
                    value={this.state.newImage.newPath}
                    onChange={(event) => this.handleChangeFor(event, 'newPath')}/>
                <label>Image description:
                </label>
                <input
                    type='text'
                    name="image description"
                    value={this.state.newImage.newDescription}
                    onChange={(event) => this.handleChangeFor(event, 'newDescription')}/>
                <Button variant="contained" color="primary" onClick={this.handleSubmit}>Add Image</Button>
            </div>
        );
    }
}

export default GalleryForm;