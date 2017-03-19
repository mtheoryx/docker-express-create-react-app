import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';

import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';

const Links = () => (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </nav>

);

const Routes = () => (
    <Router>
        <div>
            <Links />
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/about" component={About}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </Router>
);

export default Routes;
