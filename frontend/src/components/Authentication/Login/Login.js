import React, { Component } from 'react';

// css
import classes from './Login.module.css';

class LoginPage extends Component {

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

    loginHandler = (event, authData) => {
        event.preventDefault();
        this.setState({ authLoading: true });
        fetch('http://localhost:5090/auth/login', {
            method: 'POST',
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
                    throw new Error('Validation failed.');
                }
                if (res.status !== 200 && res.status !== 201) {
                    console.log('Error!');
                    throw new Error('Could not authenticate you!');
                }
                return res.json();
            })
            .then(resData => {
                console.log(resData);
                this.setState({
                    isAuth: true,
                    token: resData.token,
                    authLoading: false,
                    userId: resData.userId
                });
                localStorage.setItem('token', resData.token);
                localStorage.setItem('userId', resData.userId);
                const remainingMilliseconds = 60 * 60 * 1000;
                const expiryDate = new Date(
                    new Date().getTime() + remainingMilliseconds
                );
                localStorage.setItem('expiryDate', expiryDate.toISOString());
                // this.setAutoLogout(remainingMilliseconds);
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    isAuth: false,
                    authLoading: false,
                    error: err
                });
            });
    };

    render() {
        return (
            <div className={ classes.FormPage } >

                <div className={ classes.FormContainer } >
                    <h2 style={{ textAlign: 'center' }} >Please Login</h2>
                    <form onSubmit={ this.loginHandler } >

                        <div className={ classes.FormControls } >
                            <label className={ classes.FormInput__Label } htmlFor="email"> Email </label>
                            <input className={ classes.FormInput__Input }
                                type="email"
                                name="email"
                                value={ this.state.email.value }
                                onChange={ event => { this.inputChangeHandler(event, 'email') } } />
                        </div>

                        <div className={classes.FormControls} >
                            <label className={classes.FormInput__Label} htmlFor="Password"> Password </label>
                            <input className={classes.FormInput__Input}
                                type="Password"
                                name="Password"
                                value={this.state.password.value}
                                onChange={event => { this.inputChangeHandler(event, 'password') }} />
                        </div>

                        <div className={classes.FormControls}>
                            <button className={classes.FormButton}> Login </button>
                        </div>

                    </form>

                </div>
            </div>
        );
    }

};

export default LoginPage;