import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';


// react modules
import NavigationBar from '../Navigation/NavigationBar';

// css
import classes from './Header.module.css';

class Header extends Component {

    onSignin = () => {
        this.props.onLogin();
    }

    onSignout = () => {
        this.props.onLogin();
    }

    render() {
        return (
            <header className={classes.Header} >
                <NavigationBar 
                    isAuthenticated={ this.props.isAuthenticated } 
                    loginHandler={ this.onSignin }
                    signoutHandler={ this.onSignout } />
            </header>
        );
    }
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.loggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin: () => dispatch({ type: actionTypes.LOGIN })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);