import React from 'react';
import {Link} from 'react-router-dom';
export default () => (
    <header>
     <Link to='/'>
         Home
     </Link>
     <Link to="/todo">
         Todo
     </Link>
    </header>

)