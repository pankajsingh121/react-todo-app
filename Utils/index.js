import checkPropTypes from 'check-prop-types';


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
