import React from 'react';
import {mount} from 'enzyme';
import  {findByTestAttr,checkProps}  from '../../../Utils'
import Todo from './index';


const setUp = () =>{
     
    return mount(<Todo/>);
}

test('Should render without errors', () => {
    const wrapper=setUp();
    const component = findByTestAttr(wrapper, 'component-todoForm');
    expect(component.length).toBe(1);
});
