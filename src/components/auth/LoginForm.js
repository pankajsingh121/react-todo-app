import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'

const LoginForm = ({ errorMessage, signIn,history }) => {
    const [email, setEmail] = useState('Sincere@april.biz');
    const [password, setPassword] = useState('hildegard.org')
    const [isLoading, setIsloading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsloading(true);
        signIn(email, password,() => {            
            setIsloading(false);
            history.push('/todo')  ;
        }).catch(showError);
    }

    const showError = err => {
        console.error(err);
        setIsloading(false)
    }

    
    return (
        <div className="container">
            <h1 style={{textAlign:"center"}}>Log In</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="email">Email</label>
                    <input autoComplete="off"
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label htmlFor="password">password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </fieldset>

                <button
                    disabled={isLoading}
                    type="submit">
                    {isLoading ? 'Sending' : 'Log In'}</button>

                <div>{errorMessage}</div>
            </form>

        </div>
    )
}

const mapStateToProps = state => ({
    errorMessage: state.auth.errorMessage
});


export default connect(mapStateToProps, actions)(LoginForm)