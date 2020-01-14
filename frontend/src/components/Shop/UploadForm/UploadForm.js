import React, { Component } from 'react';

// material ui
import { Button as MaterialButton } from '@material-ui/core';
import { TextField as MaterialTextField } from '@material-ui/core';
import DropzoneArea from '../../UI/Form/DropzoneArea/DropzoneArea';

// internal packages
// import axiosServerInstance from '../../../util/axios_instance';
import axios from 'axios';

// css
import classes from './UploadForm.module.css';

class LoginPage extends Component {

    componentDidMount() {

    }

    onImageUpload(event) {
        event.preventDefault();
        console.log('here');
        const data = {
            test: 'test payload'
        };

        axios.post('http://localhost:4000/uploads', { data: data })
        .then(reponse => {
            console.log(reponse.data);
        })
        .catch(error => {
            console.log(error);
        });

    }

    render() {
        return (
            <div className={ classes.FormPage } >
    
                <div className={ classes.FormContainer } >
                    <h2 style={{ textAlign: 'center' }} >Upload a new stock images.</h2>
                    <form>
    
                        <div className={ classes.FormControls } >
                            <div style={{ width: '80%', margin: '0 auto' }}>
                                <MaterialTextField 
                                    fullWidth
                                    label="Tags" 
                                    variant="outlined" />
                            </div>
                        </div>
    
 

                        {/* <div className={ classes.FormControls} >
                            <div style={{ width: '80%', margin: '0 auto' }}>

                                <DropzoneArea />
                            </div>
                        </div> */}
    
                        <div className={ classes.FormControls  } >
                            <MaterialButton onClick={ this.onImageUpload }  style={{ margin: '10px auto', display: 'block' }}  variant="contained" > Upload </MaterialButton>
                        </div>
    
                    </form>
    
                </div>
            </div>
        );
    }
    
};

export default LoginPage;