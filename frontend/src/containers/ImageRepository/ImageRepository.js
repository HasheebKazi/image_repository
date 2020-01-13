import React, { Component } from 'react';

// react components
import Toolbar from '../../components/Repository/Toolbar/Toolbar';
import ImageGallery from '../../components/Repository/ImageGallery/ImageGallery';

// css
import classes from './ImageRepository.module.css';


class ImageRepository extends Component {
    state = {

    }

    render() {
        return (
            <main className={ classes.MainWrapper } >

                <Toolbar />

                <ImageGallery />

            </main>
        );
    }
}

export default ImageRepository;