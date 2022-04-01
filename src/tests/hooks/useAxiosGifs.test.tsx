import React from 'react';
import { beforeEach, describe, expect, test, vi } from "vitest"
import {useAxiosGifs} from "../../hooks/useAxiosGifs";
import { renderHook } from "@testing-library/react-hooks"

describe('testing hook useAxiosGifs', () => {

    test("it should return initial state", async () => {
        const { result, waitForNextUpdate } = renderHook(() => useAxiosGifs("Messi"))
        const { data, loading } = result.current
        await waitForNextUpdate()

        expect(data).toEqual([])
        expect(loading).toBe(true)
    })


    test('it should return an array of img and loading in false',  async() => {
        const {result, waitForNextUpdate} = renderHook( () => useAxiosGifs('Messi'));
        await waitForNextUpdate();
        const {data, loading} = result.current;

        expect(data.length).toBe(10)
        expect(loading).toBe(false);
    });
});