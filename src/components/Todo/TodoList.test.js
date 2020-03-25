import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../Utils'
import TodoList from './TodoList';

/** 
 * @param {object} testValues -  props values for this specific test
 * @return {ReactWrapper} - Wrapper for Input component 
 */


const setUp = (props = {}) => {

    return shallow(<TodoList {...props} />);

}

describe('if there are tasks ', () => {
    let wrapper;
    const tasks = [{ id: 1, value: 'test' }];
    let mockdeleteTask  = jest.fn();
    beforeEach(() => {
        wrapper = setUp({ tasks, deleteTask: mockdeleteTask });
    });

    test('TodoList component renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-todoList');
        expect(component.length).toBe(1);
    });

    test('renders "task-todoList" section ', () => {
        const taskTodoListNodes = findByTestAttr(wrapper, 'task-todoList');
        expect(taskTodoListNodes.length).toBe(1);
    })

    test('correct number og tasks', () => {
        const taskTodoListNodes = findByTestAttr(wrapper, 'task-todoList');
        expect(taskTodoListNodes.length).toBe(tasks.length);
    })
    test('Should emit callback on delete button click event' ,() =>{
            const button = findByTestAttr(wrapper, 'delete-button');
            button.simulate('click');
            const callback = mockdeleteTask.mock.calls.length;
            expect(callback).toBe(1);
    })
    test('render the "Done" text when task no completed' , () =>{
      const rederedText = findByTestAttr(wrapper,'toggle-button');
      expect(rederedText.text()).toBe('Done');
    });


});

describe('Checking PropTypes', () => {

    test('Should NOT throw a warning', () => {
        const expectedProps = {
            deleteTask: () => {

            },
            toggleDone: () => {

            }
        };
        checkProps(TodoList, expectedProps);

    });
});
