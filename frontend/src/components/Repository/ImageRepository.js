import React, { Component } from 'react';

// react components
import Toolbar from './Toolbar/Toolbar';
import ImageGallery from './ImageGallery/ImageGallery';


class ImageRepository extends Component {
    state = {

    }

    render() {
        return (
            <React.Fragment>
                <Toolbar />
                <ImageGallery />
            </React.Fragment>
        );
    }
}

export default ImageRepository;