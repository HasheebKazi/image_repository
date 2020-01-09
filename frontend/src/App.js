import React from 'react';

// react components
import Layout from './containers/Layout/Layout';
import ImageRepository from './containers/ImageRepository/ImageRepository';

// css
import classes from './App.module.css';

function App() {
    return (
        <div className={ classes.App }>
            <Layout>
                <ImageRepository />
            </Layout>
        </div>
    );
}

export default App;
