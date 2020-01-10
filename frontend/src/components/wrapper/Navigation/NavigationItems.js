import React from 'react';
import { NavLink } from 'react-router-dom';

// css
import classes from './NavigationItems.module.css';

const NavationItems = (props) => {
    return (
        <nav className={classes.Nav} >
            <ul className={classes.Nav__Left} >
                <li className={classes.Nav__Item} >
                    <NavLink className={classes.Nav__Link} to='/'>Pictures</NavLink>
                </li>
                <li className={classes.Nav__Item} >
                    <NavLink className={classes.Nav__Link} to='/search'>Search</NavLink>
                </li>
            </ul>

            <div className={classes.Logo} >
            </div>

            <ul className={classes.Nav__Right} >
                <li className={classes.Nav__Item} >
                    <NavLink className={classes.Nav__Link} to='/login'>Login</NavLink>
                </li>
                <li className={classes.Nav__Item} >
                    <NavLink className={classes.Nav__Link} to='/signup'>Signup</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavationItems;