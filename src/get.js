import {splitPath} from './splitPath';

const isUndefined = (x) => {
    return typeof x === 'undefined';
};

export const get = (path, target, defaultValue = undefined) => {
    const parts = splitPath(path);
    let curr = target;
    for (let i = 0; i < parts.length - 1; ++i) {
        if (curr === undefined) {
            return defaultValue;
        }
        if (!curr.hasOwnProperty(parts[i])) {
            return defaultValue;
        }
        curr = curr[parts[i]];
    }
    const value = curr[parts[parts.length - 1]];
    return !isUndefined(value) ? value : defaultValue;
};
