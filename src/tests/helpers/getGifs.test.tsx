import React from 'react';
import {describe, expect, test} from "vitest"
import {getGifs} from "../../helpers/getGifs";

describe('testing getGifs', () => {
    test('it should return 10 elements', async () => {
      const gifs =  await getGifs('Messi');
      expect(gifs.length).toBe(10);
    })

    test('it should test fail', async () => {
      const gifs =  await getGifs('');
      expect(gifs.length).toBe(0);
    })
})