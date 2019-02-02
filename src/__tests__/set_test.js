import {set} from '../set.js';

it('set adds object root prop', () => {
    const data = {};

    set('prop', data, 1)

    expect(data.prop).toEqual(1);
});

it('set modifies object root prop', () => {
    const data = {prop: 1};

    set('prop', data, 2)

    expect(data.prop).toEqual(2);
});

it('set adds object sub prop', () => {
    const data = {};

    set('prop.sub', data, 1)

    expect(data.prop.sub).toEqual(1);
});


it('set modified object sub prop', () => {
    const data = {prop: {sub: 1}};

    set('prop.sub', data, 2)

    expect(data.prop.sub).toEqual(2);
});

it('set adds object as array item', () => {
    const data = {prop: {sub: []}};

    set('prop.sub[0].value', data, 2)

    expect(data.prop.sub[0].value).toEqual(2);
});

it('set adds value as array item', () => {
    const data = {prop: {sub: []}};

    set('prop.sub[0]', data, 2)

    expect(data.prop.sub[0]).toEqual(2);
});
