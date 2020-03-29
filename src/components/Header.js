import React from 'react';
import { Link,withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import * as actions from '../actions';

const Header = ({ authenticated ,signOut,history}) => (
    <header data-test="component-header">

        <Link to='/'>
            Home
     </Link>
        {authenticated != '' &&
            <Link to="/todo">
                Todo
     </Link>
        }
        {authenticated == '' ?
        (
            <Link to='/login'>
                Log In
     </Link>
        )
     :(
     <a onClick={()=>{
         signOut();
         history.push('/')
        
        }
    }>Logout</a>
     )
        }

    </header>

)

const mapStateToProps = state => ({
    authenticated: state.auth.authenticated
});

export default withRouter(connect(mapStateToProps,actions)(Header));