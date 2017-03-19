import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Links from './components/Links'
import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';

const Routes = () => (
    <Router>
        <div>
            <Links />
            <Switch>
                <Route
                    exact
                    path="/"
                    component={App}/>
                <Route
                    path="/about"
                    component={About}/>
                <Route
                    component={NotFound}/>
            </Switch>
        </div>
    </Router>
);

export default Routes;
