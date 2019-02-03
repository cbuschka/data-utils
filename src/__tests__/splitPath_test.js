import {splitPath} from '../splitPath';

it('split returns single part', () => {
    expect(splitPath('a')).toEqual(['a']);
});

it('split returns all parts', () => {
    expect(splitPath('a.b.c')).toEqual(['a', 'b', 'c']);
});

it('split returns array parts', () => {
    expect(splitPath('a.b[1]')).toEqual(['a', 'b', 1]);
});

it('split returns array embedded parts', () => {
    expect(splitPath('a.b[1][2].c')).toEqual(['a', 'b', 1, 2, 'c']);
});

it('split detects double dot', () => {
    expect(() => splitPath('a..c')).toThrow(Error);
});

it('split detects empty array index', () => {
    expect(() => splitPath('a[]')).toThrow(Error);
});

it('split detects dangling array index', () => {
    expect(() => splitPath('a[1')).toThrow(Error);
});

it('split detects missing dot', () => {
    expect(() => splitPath('a[1]b')).toThrow(Error);
});

it('split arrays indexes are ints', () => {

    const path = splitPath('group4.photos[0].irgendein_photo');

    expect(path[0]).toBe('group4');
    expect(path[1]).toBe('photos');
    expect(path[2]).toBe(0);
    expect(Number.isInteger(path[2])).toBe(true);
    expect(path[3]).toBe('irgendein_photo');
});
