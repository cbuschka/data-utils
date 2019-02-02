import {split as splitPath} from './paths/split';

export const set = (path, target, value) => {
    const parts = splitPath(path);
    let curr = target;
    for (let i = 0; i < parts.length - 1; ++i) {

        if (!curr.hasOwnProperty(parts[i])) {
            curr[parts[i]] = Number.isInteger(parts[i]) ? [] : {};
        }
        curr = curr[parts[i]];
    }
    curr[parts[parts.length - 1]] = value;

    return target;
};
