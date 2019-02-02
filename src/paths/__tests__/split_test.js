import {split} from '../split.js';

it('split returns single part', () => {
    expect(split('a')).toEqual(['a']);
});

it('split returns all parts', () => {
    expect(split('a.b.c')).toEqual(['a', 'b', 'c']);
});

it('split returns array parts', () => {
    expect(split('a.b[1]')).toEqual(['a', 'b', 1]);
});

it('split returns array embedded parts', () => {
    expect(split('a.b[1][2].c')).toEqual(['a', 'b', 1, 2, 'c']);
});

it('split detects double dot', () => {
    expect(() => split('a..c')).toThrow(Error);
});

it('split detects empty array index', () => {
    expect(() => split('a[]')).toThrow(Error);
});

it('split detects dangling array index', () => {
    expect(() => split('a[1')).toThrow(Error);
});

it('split detects missing dot', () => {
    expect(() => split('a[1]b')).toThrow(Error);
});
