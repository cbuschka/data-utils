export const get = (path, target, defaultValue = undefined) => {
    const parts = path.split(/\./);
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
    return curr[parts[parts.length - 1]] || defaultValue;
};
