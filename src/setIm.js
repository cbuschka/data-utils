import {split as splitPath} from './paths/split';

const isArray = Array.isArray || function (x) {
    return typeof x === 'object' && typeof x.length !== 'undefined';
};

const isInteger = function (x) {
    return Number.isInteger(x);
}

const assign = function (o) {
    const newO = isArray(o) ? [] : {};
    for (let key in o) {
        if (!o.hasOwnProperty(key)) {
            continue;
        }
        newO[key] = o[key];
    }

    return newO;
};

export const setIm = (path, target, value) => {
    const parts = splitPath(path);
    const result = assign(target);
    let curr = result;
    for (let i = 0; i < parts.length - 1; ++i) {
        if (!curr.hasOwnProperty(parts[i])) {
            curr[parts[i]] = isInteger(parts[i + 1]) ? [] : {};
        } else {
            curr[parts[i]] = assign(curr[parts[i]]);
        }
        curr = curr[parts[i]];
    }
    curr[parts[parts.length - 1]] = value;

    return result;
};
