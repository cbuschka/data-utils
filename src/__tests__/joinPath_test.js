import {joinPath} from '../joinPath';

it('joins', () => {
    expect(joinPath('base', 'sub', 0, 'prop')).toEqual('base.sub[0].prop');
});

it('join ignores empty string', () => {
    expect(joinPath('base', '', 0, 'prop')).toEqual('base[0].prop');
});
