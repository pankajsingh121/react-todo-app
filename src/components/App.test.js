import React from 'react';
import {mount} from 'enzyme';
import {findByTestAttr} from '../../Utils'
import App from './App';

const setUp = ()=>{
    return  mount(<App />);
    
}

test('App renders without error' , () =>{
      const wrapper = setUp();
      const component= findByTestAttr(wrapper,'component-app');
      expect(component.length).toBe(1);
})