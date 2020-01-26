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

    inputChangeHandler = (input, value) => {
        this.setState({ [input]: value });
      };

    // formSubmitHandler(event) {
    //     event.preventDefault();
    //     // this.setState({ authLoading: true });
    //     fetch('http://localhost:5040/auth/signup', {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             email: authData.signupForm.email.value,
    //             password: authData.signupForm.password.value,
    //             name: authData.signupForm.name.value
    //         })
    //     })
    //         .then(res => {
    //             if (res.status === 422) {
    //                 throw new Error(
    //                     "Validation failed. Make sure the email address isn't used yet!"
    //                 );
    //             }
    //             if (res.status !== 200 && res.status !== 201) {
    //                 console.log('Error!');
    //                 throw new Error('Creating a user failed!');
    //             }
    //             return res.json();
    //         })
    //         .then(resData => {
    //             console.log(resData);
    //             this.setState({ isAuth: false, authLoading: false });
    //             this.props.history.replace('/');
    //         })
    //         .catch(err => {
    //             console.log(err);
    //             this.setState({
    //                 isAuth: false,
    //                 authLoading: false,
    //                 error: err
    //             });
    //         });
    // }

    render() {
        return (
            <div className={classes.FormPage} onSubmit={ (event) => this.onSubmit(event) } >
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
                                value={this.state.email} 
                                onChange={ this.inputChangeHandler } />
                        </div>

                        <div className={classes.FormControls} >
                            <label className={classes.FormInput__Label} htmlFor="Password"> Password </label>
                            <input className={classes.FormInput__Input} 
                                type="Password" 
                                name="Password" 
                                value={this.state.password} />
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