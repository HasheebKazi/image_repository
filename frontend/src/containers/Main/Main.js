import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// react components
import ImageRepository from '../../components/Repository/ImageRepository';
import LoginPage from '../../components/Authentication/Login/Login';
import SignupPage from '../../components/Authentication/Signup/Signup';
import ImageUploadPage from '../../components/Shop/UploadForm/UploadForm';

// css
import classes from './Main.module.css';


class Main extends Component {
    state = {

    }

    render() {
        return (
            <main className={ classes.MainWrapper } >
                <Switch>
                    <Route path="/main" component={ ImageRepository } exact />

                    {/* <Route path="/collection" component={  } exact /> */}
                    <Route path="/upload" component={ ImageUploadPage } exact />

                    <Route path="/login" component={ LoginPage } exact />
                    <Route path="/Signup" component={ SignupPage } exact />

                    <Route path="/" component={ ImageRepository } />
                    
                </Switch>
            </main>
        );
    }
}

export default Main;