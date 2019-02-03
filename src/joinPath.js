const isNonEmptyString = (s) => {
    return /.+/.test(s);
};
const isInteger = function (x) {
    return Number.isInteger(x) || /^[0-9]+$/.test(x);
};

export function joinPath(...args) {
    const parts = [];
    for (let i = 0; i < args.length; ++i) {
        const arg = args[i];
        if (isInteger(arg)) {
            parts.push('[' + arg + ']');
        } else if (isNonEmptyString(arg)) {
            if (parts.length > 0) {
                parts.push('.');
            }
            parts.push(arg);
        } else {
            throw new Error("Invalid path part: '" + arg + "'.'");
        }
    }

    return parts.join('');
}
