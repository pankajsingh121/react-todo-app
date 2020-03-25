import React from 'react';
import {mount} from 'enzyme';
import  {findByTestAttr,checkProps}  from '../../../Utils'
import TodoForm from './TodoForm';

/** 
 * @param {object} testValues -  props values for this specific test
 * @return {ReactWrapper} - Wrapper for Input component 
 */

 const setUp = (props={}) =>{
     
     return mount(<TodoForm {...props}/>);
 }

 describe('TodoForm component have props' , () => {
    let wrapper;
    beforeEach(() => {  
        let props={currentTask : "test"};     
        wrapper = setUp(props);
    });

    test('Should render without errors', () => {
        const component = findByTestAttr(wrapper, 'component-todoForm');
        expect(component.length).toBe(1);
    });

    test('Should render a Input  ', () => {
        const h1 = findByTestAttr(wrapper, 'input-box');
        expect(h1.length).toBe(1);
    });

    test('Should render a submit button', () => {
        const desc = findByTestAttr(wrapper, 'submit-button');
        expect(desc.length).toBe(1);
    });
 })

 describe('Have NO props', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = setUp({});
    });

    it('Should not render submit button', () => {
        const component = findByTestAttr(wrapper, 'submit-button');
        expect(component.length).toBe(0);
    });


});
