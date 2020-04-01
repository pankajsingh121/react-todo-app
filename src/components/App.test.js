import React from 'react';
import { mount} from 'enzyme';
import { findByTestAttr, testStore } from '../../Utils'
import App from './App';
import { Provider } from 'react-redux';

const setUp = (initialState = {}) => {
    const store = testStore(initialState);
    return mount(<Provider store={store}>
        <App />
    </Provider>);

}

test('App renders without error', () => {
    const wrapper = setUp();
    const component = findByTestAttr(wrapper, 'component-app');
    expect(component.length).toBe(1);
})