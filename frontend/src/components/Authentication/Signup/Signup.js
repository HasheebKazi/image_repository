import React, { Component } from 'react';

// css
import classes from './Signup.module.css';

class SignupPage extends Component {

    state = {
        email: {
            value: 'test@test.com'
        },
        password: {
            value: '123456'
        }
    };

    inputChangeHandler = (event, type) => {
        const updatedValue = {
            value: event.target.value
        }
        this.setState({ [type]: updatedValue });
      };

    formSubmitHandler = (event) => {
        event.preventDefault();
        // this.setState({ authLoading: true });
        fetch('http://localhost:5090/auth/signup', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email.value,
                password: this.state.password.value
            })
        })
            .then(res => {
                if (res.status === 422) {
                    throw new Error(
                        "Validation failed. Make sure the email address isn't used yet!"
                    );
                }
                if (res.status !== 200 && res.status !== 201) {
                    console.log('Error!');
                    throw new Error('Creating a user failed!');
                }
                return res.json();
            })
            .then(resData => {
                console.log(resData);
                this.setState({ isAuth: false, authLoading: false });
                this.props.history.replace('/');
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    isAuth: false,
                    authLoading: false,
                    error: err
                });
            });
    }

    render() {
        return (
            <div className={classes.FormPage} onSubmit={ (event) => this.formSubmitHandler(event) } >
                {/* <div className={ classes.FlashMessage }>
                    ... Flash Bar
                </div> */}

                <div className={classes.FormContainer} >
                    <h2 style={{ textAlign: 'center' }} >Please Signup</h2>
                    <form action="POST" onSubmit={this.formSubmitHandler} >

                        <div className={classes.FormControls} >
                            <label className={classes.FormInput__Label} htmlFor="email"> Email </label>
                            <input className={classes.FormInput__Input} 
                                type="email" 
                                name="email" 
                                value={this.state.email.value} 
                                onChange={ event => { this.inputChangeHandler(event, 'email' ) } } />
                        </div>

                        <div className={classes.FormControls} >
                            <label className={classes.FormInput__Label} htmlFor="Password"> Password </label>
                            <input className={classes.FormInput__Input} 
                                type="Password" 
                                name="Password" 
                                value={this.state.password.value}
                                onChange={ event => { this.inputChangeHandler(event, 'password' ) } } />
                        </div>

                        {/* <div className={classes.FormControls} >
                            <label className={classes.FormInput__Label} htmlFor="Password"> Confirm Password </label>
                            <input className={classes.FormInput__Input} type="Password" name="Password" />
                        </div> */}

                        <div className={classes.FormControls}>
                            <button type="submit" className={classes.FormButton}> Signup </button>
                        </div>

                    </form>

                </div>
            </div>
        );
    }

};

export default SignupPage;