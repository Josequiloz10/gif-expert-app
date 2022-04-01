import React from 'react';
import {describe, expect, test} from "vitest"
import {shallow} from 'enzyme'
import GifGridItem from "../../components/GifGridItem";


describe('testing gridItems', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/imagen.jpg'
    const wrapper =  shallow(<GifGridItem title={title} url={url}/>)

    test('It should show the basic grid', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('It should have a paragraph with the title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title)
    })

    test('It should have an image equal to url and alt from the props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('It should have the class animate__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect(className?.includes('animate__fadeIn')).toBe(true);
    })
})