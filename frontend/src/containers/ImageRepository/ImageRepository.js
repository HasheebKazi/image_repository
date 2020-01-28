import React, { Component } from 'react';

// react components
import Toolbar from '../../components/Repository/Toolbar/Toolbar';
import ImageGallery from '../../components/Repository/ImageGallery/ImageGallery';


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