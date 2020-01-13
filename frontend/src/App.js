import React from 'react';

// react components
import Layout from './HOC/Layout/Layout';
import Main from './containers/Main/Main';

// css
import classes from './App.module.css';

function App() {
    return (
        <div className={ classes.App }>
            <Layout>
                <Main />
            </Layout>
        </div>
    );
}

export default App;
