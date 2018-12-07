import {get} from '../get.js';

it('get returns object root prop', () => {
    const data = {prop: 1};

    expect(get('prop', data, undefined)).toEqual(1);
});

it('get returns object sub prop', () => {
    const data = {prop: {sub: 1}};

    expect(get('prop.sub', data, undefined)).toEqual(1);
});

it('get returns default if object prop not present', () => {
    const data = {};

    expect(get('prop.sub', data, 1)).toEqual(1);
});
