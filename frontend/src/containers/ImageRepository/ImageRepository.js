import React, { Component } from 'react';

// css
import classes from './ImageRepository.module.css';

class ImageRepository extends Component {
    state = {

    }

    render() {
        return (
            <main className={ classes.MainWrapper }>
                <div>
                    ... image repo controls
                </div>
                <div>
                    ... image repo 
                </div>
            </main>
        );
    }
}

export default ImageRepository;