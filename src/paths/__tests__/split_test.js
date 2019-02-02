import {split} from '../split.js';

it('split returns single part', () => {
    expect(split('a')).toEqual(['a']);
});

it('split returns all parts', () => {
    expect(split('a.b.c')).toEqual(['a', 'b', 'c']);
});
