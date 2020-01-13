import React, { Component } from 'react';

// material ui
import { Button as MaterialButton } from '@material-ui/core';
import { TextField as MaterialTextField } from '@material-ui/core';
import DropzoneArea from '../../UI/Form/DropzoneArea/DropzoneArea';

// css
import classes from './UploadForm.module.css';

class LoginPage extends Component {

    fileUploadHandler(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className={ classes.FormPage } >
    
                <div className={ classes.FormContainer } >
                    <h2 style={{ textAlign: 'center' }} >Upload a new stock images.</h2>
                    <form action="POST" onSubmit={ this.formSubmitHandler } >
    
                        <div className={ classes.FormControls } >
                            <div style={{ width: '80%', margin: '0 auto' }}>
                                <MaterialTextField 
                                    fullWidth
                                    label="Tags" 
                                    variant="outlined" />
                            </div>
                        </div>
    
 

                        <div className={ classes.FormControls} >
                            <div style={{ width: '80%', margin: '0 auto' }}>

                                <DropzoneArea />
                            </div>
                        </div>
    
                        <div className={ classes.FormControls  } >
                            <MaterialButton style={{ margin: '10px auto', display: 'block' }}  variant="contained" > Login </MaterialButton>
                        </div>
    
                    </form>
    
                </div>
            </div>
        );
    }
    
};

export default LoginPage;