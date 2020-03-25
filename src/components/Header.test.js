import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr} from '../../Utils'
import Header from './Header';

const setUp = ()=>{
    return  shallow(<Header/>);
    
}

test('Header renders without error' , () =>{
      const wrapper = setUp();
      const component= findByTestAttr(wrapper,'component-header');
      expect(component.length).toBe(1);
})