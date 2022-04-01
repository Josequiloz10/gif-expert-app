import React from 'react';
import { beforeEach, describe, expect, test, vi } from "vitest"
import GifExpertApp from "../GifExpertApp";
import {shallow} from 'enzyme'

describe('testing GifGrid', () => {

    test('it should show the component correctly',  () => {
       const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('it should show a listof categories',  () => {
       const categories = ['Dragon ball', 'Dark'];
       const wrapper = shallow(<GifExpertApp defaultCategory={categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
});