import React from 'react';
import { beforeEach, describe, expect, test, vi } from "vitest"
import {AddCategory} from "../../components/AddCategory";
import {shallow} from 'enzyme'


describe('testing AddCategory', () => {
    const setCategories = vi.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach(() =>{
       vi.clearAllMocks();
       wrapper = shallow(<AddCategory setCategories={setCategories}/>)
    })
    
    test('it should show the component correctly',  () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('it should change text box',  () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change',{target:{value}});
    })

    test('it should not post the info on submit',  () => {
        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });
        expect(setCategories).not.toHaveBeenCalled();
    })

    test('it should call setCategories and clean the text box',  () => {

        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change',{target:{value}});

        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1)
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function))

        expect(input.prop('value')).toBe('');
    })

})