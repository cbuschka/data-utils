const EOF = {};

export const split = (string) => {

    const path = [];
    let prevPos = 0;
    let state = 0; // 0=in text, 1=in array index, 2 = after array index
    for (let pos = 0; pos < string.length + 1; ++pos) {
        const c = string[pos] || EOF;
        switch (state) {
            case 0:
                if (c === '.') {
                    if (prevPos === pos) {
                        throw new Error("Double dot at " + pos + ".");
                    }
                    path.push(string.substring(prevPos, pos));
                    prevPos = pos + 1;
                } else if (c === '[') {
                    path.push(string.substring(prevPos, pos));
                    prevPos = pos + 1;
                    state = 1;
                } else if (c === EOF) {
                    if (prevPos < pos) {
                        path.push(string.substring(prevPos, pos));
                    }
                } else {
                    // ignored
                }
                break;
            case 1:
                if (c === ']') {
                    if (prevPos === pos) {
                        throw new Error("Empty array index at " + pos + ".");
                    }
                    path.push(parseInt(string.substring(prevPos, pos)));
                    prevPos = pos + 1;
                    state = 2;
                } else if (c === EOF) {
                    throw new Error("Dangling array index at " + pos + ".");
                } else {
                    // ok
                }
                break;
            case 2:
                if (c === '.') {
                    prevPos = pos + 1;
                    state = 0;
                } else if (c === '[') {
                    prevPos = pos + 1;
                    state = 1;
                } else if (c === EOF) {
                    state = 0;
                    //  ok
                } else {
                    throw new Error(". or [ expected at " + pos + ".");
                }
                break;
            default :
                throw new Error("Unknown state " + state + " while at pos " + pos + ".");
        }
    }

    if (state !== 0) {
        throw new Error();
    }


    return path;
};
