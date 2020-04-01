import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import reducers from '../src/reducers';
import thunk from 'redux-thunk';

/**
 * Return node with given data-test atttribute
 * @param {ShalloWrapper} wrapper - Enzyme Shalow
 * @param {*} attr 
 */

export const findByTestAttr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(
        component.propTypes,
        expectedProps,
        'props', 
        component.name);
    expect(propsErr).toBeUndefined();
};

export const testStore = (initialState) => {
    const createStoreWithMiddleware =  createStore(reducers,applyMiddleware(thunk));    
    return createStoreWithMiddleware;
};
