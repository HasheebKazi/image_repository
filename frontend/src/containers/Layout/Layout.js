import React, { Component } from 'react';

// react modules
import MainHeader from '../Header/Header';
import MainFooter from '../Footer/Footer';

// css
import classes from './Layout.module.css';

// assets
// import FakeLogo from '../../assets/images/fake-logo-1.png';

class Layout extends Component {

    state = {
    }

    render() {
        return (
            <React.Fragment>
                <MainHeader />

                <main className={ classes.MainContent }> { this.props.children } </main>
                
                <MainFooter />
            </React.Fragment>
        );
    }

}

export default Layout;
