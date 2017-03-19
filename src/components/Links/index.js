import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

const Links = () => (
    <nav className="Links">
        <NavLink
            exact
            activeClassName="active"
            to="/">
            Home
        </NavLink>
        <NavLink
            activeClassName="active"
            to="/about">
            About
        </NavLink>
    </nav>
);

export default Links;
