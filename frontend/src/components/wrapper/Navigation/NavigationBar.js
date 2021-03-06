import React from 'react';
import { NavLink } from 'react-router-dom';

// css
import classes from './NavigationBar.module.css';

const NavationBar = (props) => {

    let leftNavItems = [ <div className={classes.Nav__Item} key="ln_main" >
        <NavLink className={classes.Nav__Link} to='/main'> Shop </NavLink>
    </div> ];

    let rightNavItems = [];

    if (props.isAuthenticated) {
        
        leftNavItems.push(
            <div className={classes.Nav__Item} key="ln_collections" >
                <NavLink className={classes.Nav__Link} to='/collections'> Shop </NavLink>
            </div>);
        leftNavItems.push(
            <div className={classes.Nav__Item} key="ln_upload" >
                <NavLink className={classes.Nav__Link} to='/upload'> Upload </NavLink>
            </div>);
        leftNavItems.push(
            <div className={classes.Nav__Item} key="ln_manage_stock_photos" >
                <NavLink className={classes.Nav__Link} to='/upload'> My COllection </NavLink>
            </div>);

        rightNavItems.push(                    
            <div className={ classes.Nav__Item } key="rn_Signout" >
                <NavLink className={classes.Nav__Link} to='/login' onClick={ props.signoutHandler } > Signout </NavLink>
            </div>);

    } else {

        rightNavItems.push(                    
            <div className={ classes.Nav__Item } key="rn_login" >
                <NavLink 
                className={ classes.Nav__Link } 
                to='/login' 
                onClick={ props.signoutHandler } > { /* temporary prop to auto login once the signin button is clicked */ }
                    Login 
                </NavLink>
            </div>);

        rightNavItems.push(
            <div className={ classes.Nav__Item } key="rn_signup" >
                <NavLink className={ classes.Nav__Link } to='/signup'> Signup </NavLink>
            </div>);
    }

    return (
        <nav className={ classes.Nav } >

            <div className={ classes.Nav__Left } >
                <div className={ classes.Nav__FlexContainerL } >
                    {leftNavItems}
                </div>
            </div>

            {/* <div className={classes.Logo} >
            </div> */}

            <div className={ classes.Nav__Right } >
                <div className={ classes.Nav__FlexContainerR } >
                    { rightNavItems }
                </div>
            </div>
        </nav>
    );
}

export default NavationBar;