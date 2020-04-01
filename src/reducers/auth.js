import { AUTH_USER, AUTH_ERROR } from '../actions/types';

const token = localStorage.getItem('token');
//console.log(token);
const initial_state = {
    ...(token) && {authenticated: token},
    ...(!token) && {authenticated: ''},
    ...{errorMessage: ''}
}


export default (state=initial_state, action) => {
    switch (action.type) {
        case AUTH_USER:
            return { ...state, authenticated: action.payload };
        case AUTH_ERROR:
            return {...state, errorMessage:action.payload};
        default:
            return state
    }
}