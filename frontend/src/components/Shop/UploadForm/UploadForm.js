import React, { Component } from 'react';

// react components
import Image from '../../UI/Image/Image';

// internal packages
// eslint-disable-next-line
import { generateBase64FromImage } from '../../../util/image';

// css
import classes from './UploadForm.module.css';

class FileUploadPage extends Component {

    state = {
        email: {
            value: 'test@test.com'
        },
        imagePreview: null,
        error: false,
        file: null
    }

    componentDidMount() {

    }

    inputChangeHandler = (event, type) => {
        const updatedValue = {
            value: event.target.value
        }
        this.setState({ [type]: updatedValue });
    };

    imageUploadHandler = (event) => {
        event.preventDefault();
        // note we can't use JSON to send textual and file data, instead we use another format
        // Set up data (with image!)
        // first we create a form object and then append data to it
        const formData = new FormData();
        formData.append('email', this.state.email); // use the append method to add 
        formData.append('file', this.state.file); // we can append files too


        let url = 'http://localhost:5090/repo/stockimage';
        let reqConfig = {
            method: 'POST',
            body: formData, // setting the body to a valid form will also set the correct headers,
            // headers: {
            //     Authorization: 'Bearer ' + this.props.token
            // }
        };

        fetch(url, reqConfig).then(res => {
            if (res.status !== 200 && res.status !== 201) {
                throw new Error('Creating or editing a post failed!');
            }
            return res.json();
        }).then(resData => {
            console.log(resData);
        }).catch(err => {
            console.log(err);
            this.setState({
                error: true
            });
        });
    };

    postInputChangeHandler = (event) => {
        if (event.target.files) {
            generateBase64FromImage(event.target.files[0])
            .then(b64 => {
                this.setState({ imagePreview: b64 });
            })
            .catch(e => {
                this.setState({ imagePreview: null });
            });
            this.setState({ file: event.target.file });
        }
    };

    fileInputChangeHandler = (event, type) => {
        const updatedValue = {
            value: event.target.value
        }
        this.setState({ [type]: updatedValue });
    };

    render() {
        return (
            <div className={classes.FormPage} >

                <div className={classes.FormContainer} >
                    <h2 style={{ textAlign: 'center' }} >Upload a new stock images.</h2>

                    <form onSubmit={this.imageUploadHandler} >

                        <div className={classes.FormControls} >
                            <label className={classes.FormInput__Label} htmlFor="email"> Email </label>
                            <input className={classes.FormInput__Input}
                                type="email"
                                name="email"
                                value={this.state.email.value}
                                onChange={event => { this.inputChangeHandler(event, 'email') }} />
                        </div>

                        <div className={classes.FormControls} >
                            <label className={classes.FormInput__Label} htmlFor="image"> File </label>
                            <input className={classes.FormInput__Input}
                                type="file"
                                name="image"
                                onChange={ this.postInputChangeHandler } />
                        </div>

                        {!this.state.imagePreview && <p>Please choose an image.</p>}
                        {this.state.imagePreview && (
                            <div className={ classes.center }>
                                <div className={ classes.new_post__preview_image } >
                                        <Image imageUrl={this.state.imagePreview} contain left />
                                </div>
                            </div>
                        )}

                        <div className={classes.FormControls}>
                            <button className={classes.FormButton} type="submit" > Submit </button>
                        </div>

                    </form>

                </div>
            </div>
        );
    }

};

export default FileUploadPage;