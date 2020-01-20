import React, { Component } from 'react';

// material ui
import { Button as MaterialButton } from '@material-ui/core';
import { TextField as MaterialTextField } from '@material-ui/core';

// internal packages
// import axiosServerInstance from '../../../util/axios_instance';
import axios from 'axios';

// css
import classes from './UploadForm.module.css';

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null,
            name: ''
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
        this.onNameChange = this.onNameChange.bind(this)

    }

    componentDidMount() {

    }

    onFormSubmit(e) {
        e.preventDefault(); // Stop form submit
        this.fileUpload(this.state.file, this.state.name)
        .then((response) => {
            console.log(response.data);
        }).catch(err => { 
            console.log(err) 
        });
    }

    onChange(e) {
        this.setState({ file: e.target.files[0] })
    }

    onNameChange(event) {
        this.setState({ name: event.target.value });
    }

    fileUpload(file, name) {
        const formData = new FormData();
        formData.set('image', 'name');
        formData.append('image', file, {
            filename: `image.png`,
            contentType: 'application/octet-stream',
            mimeType: 'application/octet-stream'   
        });
        formData.append('name', name);

        const payload = {
            method: 'POST',
            data: {
                data: formData
            },
            url: 'http://localhost:4000/uploads',
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json',
            }
        }
        return axios(payload);
    }

    render() {
        return (
            <div className={classes.FormPage} >

                <div className={classes.FormContainer} >
                    <h2 style={{ textAlign: 'center' }} >Upload a new stock images.</h2>
                    <form>

                        <div className={classes.FormControls} >
                            <div style={{ width: '80%', margin: '0 auto' }}>
                                <MaterialTextField
                                    fullWidth
                                    required
                                    label="Image Name"
                                    value={ this.state.name }
                                    onChange={ this.onNameChange }
                                    variant="outlined" />
                            </div>
                        </div>

                        <div className={classes.FormControls} >
                            <div style={{ width: '80%', margin: '0 auto' }}>
                                <MaterialTextField
                                    name="tags"
                                    fullWidth
                                    label="Tags"
                                    variant="outlined" />
                            </div>
                        </div>

                        <div className={classes.FormControls} >
                            <input
                                className={classes.FileInput}
                                type="file"
                                accept="image/png, image/jpeg, image/jpg"
                                onChange={this.onChange}
                            />
                        </div>


                        <div className={classes.FormControls} >
                            <MaterialButton onClick={this.onFormSubmit } style={{ margin: '10px auto', display: 'block' }} variant="contained" > Upload </MaterialButton>
                        </div>

                    </form>

                </div>
            </div>
        );
    }

};

export default LoginPage;