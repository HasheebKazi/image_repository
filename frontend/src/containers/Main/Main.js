import React, { Component } from 'react';

// react components
import ImageRepository from '../../components/Repository/ImageRepository';

// css
import classes from './Main.module.css';


class Main extends Component {
    state = {

    }

    render() {
        return (
            <main className={ classes.MainWrapper } >


                <ImageRepository />

            </main>
        );
    }
}

export default Main;