import React, { Component } from 'react';

// css
import classes from './Signup.module.css';

class SignupPage extends Component {

    formSubmitHandler(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className={ classes.FormPage } >
                {/* <div className={ classes.FlashMessage }>
                    ... Flash Bar
                </div> */}
    
                <div className={ classes.FormContainer } >
                    <h2 style={{ textAlign: 'center' }} >Please Signup</h2>
                    <form action="POST" onSubmit={ this.formSubmitHandler } >
    
                        <div className={ classes.FormControls } >
                            <label className={ classes.FormInput__Label } htmlFor="email"> Email </label>
                            <input className={ classes.FormInput__Input } type="email" name="email" placeholder="Please enter a valid email" />
                        </div>
    
                        <div className={ classes.FormControls} >
                            <label className={ classes.FormInput__Label } htmlFor="Password"> Password </label>
                            <input className={ classes.FormInput__Input } type="Password" name="Password" />
                        </div>

                        <div className={ classes.FormControls} >
                            <label className={ classes.FormInput__Label } htmlFor="Password"> Confirm Password </label>
                            <input className={ classes.FormInput__Input } type="Password" name="Password" />
                        </div>
    
                        <div className={ classes.FormControls }>
                            <button className={ classes.FormButton }> Signup </button>
                        </div>
    
                    </form>
    
                </div>
            </div>
        );
    }
    
};

export default SignupPage;