import React from 'react';

// react modules
import NavigationItems from '../../components/Navigation/NavigationItems';

// css
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.Header} >
            <NavigationItems />
        </header>
    );
}

export default Header;