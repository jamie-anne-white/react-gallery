import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './GalleryForm.css'


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
            <div if="formDiv">
                <TextField id="pathInput" variant="outlined"
                    label='Image url' value={this.state.newImage.newPath}
                    onChange={(event) => this.handleChangeFor(event, 'newPath')} />
                
                <TextField id="descInput" variant="outlined"
                    multiline rowsMax={4}
                    label='Image description'
                    value={this.state.newImage.newDescription}
                    onChange={(event) => this.handleChangeFor(event, 'newDescription')} />

                <Button variant="contained" color="primary" onClick={this.handleSubmit}>Add Image</Button>
            </div>
        );
    }
}

export default GalleryForm;