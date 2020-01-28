import React, { Component } from 'react';

// css 
import classes from './Footer.module.css';

class Footer extends Component {

    // this state is only used for UI elements
    state = {
        targetedMsg: 'This is a message'
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className={ classes.Footer } >

                <div className={ classes.FooterNav } >
                    <div className={ classes.FooterNav__Items } >Todo's</div>
                    <div className={ classes.FooterNav__Items } >Github</div>
                    <div className={ classes.FooterNav__Items } >Blank</div>
                </div>

                <div className={ classes.Footer__Info } >
                    <div className={ classes.Footer__Message } >{ this.state.targetedMsg }</div>
                    <div className={ classes.Footer__CompanyInfo } >
                        <div>
                            <h3>Project Info</h3>
                            <div>
                                Full Stack stock image ecommerce shop. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            </div>
                        </div>
                    </div>
                </div>

                <div className={ classes.Footer__Social } >

                    <div style={{ textAlign: 'center' }}>
                        Copyright © 2020 Me Inc. All rights reserved.
                    </div>
                </div>
            </div>
        );
    }

}

export default Footer;