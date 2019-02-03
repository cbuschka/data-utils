import {joinPath} from '../joinPath';

it('joins', () => {
    expect(joinPath('base', 'sub', 0, 'prop')).toEqual('base.sub[0].prop');
});
