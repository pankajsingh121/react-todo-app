import React from 'react';
import { Link } from 'react-router-dom';
export default () => (
    <header data-test="component-header">

        <Link to='/'>
            Home
     </Link>
        <Link to="/todo">
            Todo
     </Link>
    </header>

)