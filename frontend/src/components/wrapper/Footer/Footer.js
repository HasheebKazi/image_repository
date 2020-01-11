import React, { Component } from 'react';

import axios from 'axios';

// css 
import classes from './Footer.module.css';

class Footer extends Component {

    // this state is only used for UI elements
    state = {
        targetedMsg: ''
    }

    componentDidMount() {
        axios.get('http://localhost:4000/msg')
        .then(res => {
            console.log(res.data);
            if (res.data) {
                this.setState({ targetedMsg: res.data['msg'] });
            } else {
                this.setState({ targetedMsg: 'no data' });
            }
        }).catch(error => {
            this.setState({ targetedMsg: 'error' });
            console.log(error);
        })
    }

    render() {
        return (
            <div className={ classes.Footer }>
                <div>
                    ... Dummy Links and Icons
                </div>
                <div>
                    ... Dummy Links and Icons
                </div>
                <div>
        <           p>{ this.state.targetedMsg }</p>
                </div>
            </div>
        );
    }

}

export default Footer;