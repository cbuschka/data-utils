import {setIm} from '../setIm.js';

it('setIm adds prop to new root', () => {
    const data = {};

    const result = setIm('prop', data, 1);

    expect(result).not.toBe(data);
    expect(result['prop']).toEqual(1);
    expect(data['prop']).toBeUndefined();
});

it('setIm adds props to sub objects', () => {
    const data = {old: 2, old2: {}, old3: {}};

    const result = setIm('old3.new', data, 1);

    expect(result).not.toBe(data);
    expect(result['old']).toEqual(2);
    expect(result['old2']).toBe(data.old2);
    expect(result['old3']).not.toBe(data["old3"]);
    expect(result['old3']['new']).toEqual(1);
});

it('setIm adds props to arrays', () => {
    const data = {old: 2, old2: [], old3: []};

    const result = setIm('old3[0]', data, 1);

    expect(result).not.toBe(data);
    expect(result['old']).toEqual(2);
    expect(result['old2']).toBe(data.old2);
    expect(result['old3']).not.toBe(data["old3"]);
    expect(result['old3'].length).toEqual(1);
    expect(result['old3'][0]).toEqual(1);
});

it('setIm problem 1', () => {

    const root = {};
    const newRoot = setIm('group4.photos[0].irgendein_photo', root, 'bla');

    // expect(JSON.stringify(newRoot)).toBe('');
    expect(newRoot).not.toBe(root);
    expect(newRoot.group4.photos.length).toBe(1);
});
