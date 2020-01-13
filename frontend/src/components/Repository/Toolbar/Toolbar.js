import React from 'react';

// css
import classes from './Toolbar.module.css';

const Toolbar = (props) => {
    return (
        <div className={classes.Toolbar} >
            {/* ... image repo controls
            ... search by
            ... filter by
            ... sort by  */}
            <div className={classes.Filter} >
                <div className={classes.Toolbar__Filter} >Filters: </div>
                <ul className={classes.Toolbar__Options}>
                    <li>Cats</li>
                    <li>Dogs</li>
                </ul>
            </div>

            <div className={classes.Sort} >
                <div className={classes.Toolbar__Sort} >Sort By: </div>
                <ul className={classes.Toolbar__Options}>
                    <li>Most Recent</li>
                    <li>Price</li>
                </ul>
            </div>

        </div>
    );
};

export default Toolbar;

