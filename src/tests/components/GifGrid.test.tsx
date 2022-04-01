import React from 'react';
import { beforeEach, describe, expect, test, vi } from "vitest"
import {GifGrid} from "../../components/GifGrid";
import {shallow} from 'enzyme'
import {useAxiosGifs} from "../../hooks/useAxiosGifs";
vi.mock('../../hooks/useAxiosGifs')


describe('testing GifGrid', () => {

    const category = 'Messi'

    test('it should show the component correctly',  () => {
        // @ts-ignore
        useAxiosGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
    })

    test('it should show  items when it loads images useAxiosGif',  () => {

        const gifs = [{
            id:'ABC',
            url:'https://localhost:8080/imagen.jpg',
            title:'testing'
        }];

        // @ts-ignore
            useAxiosGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        let wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
    })
});