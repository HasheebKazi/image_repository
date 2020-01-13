import React, { Component } from 'react'
import { DropzoneArea as DzA } from 'material-ui-dropzone'

class DropzoneArea extends Component {
    state = {
            files: []
    };

    handleChange(files) {
        this.setState({ files: files });
    }
    render() {
        return (<DzA onChange={ this.handleChange.bind(this) } />);
    }
}

export default DropzoneArea;