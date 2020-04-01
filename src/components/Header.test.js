import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr,testStore} from '../../Utils'
import Header from './Header';

const setUp = (initialState={})=>{
    const store= testStore(initialState);
    return  shallow(<Header.WrappedComponent store={store}/>);
    
}

test('Header renders without error' , () =>{
      const wrapper = setUp();    
      const component= findByTestAttr(wrapper,'component-header');
      expect(component.length).toBe(1);
})