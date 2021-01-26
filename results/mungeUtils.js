export function makeSeenArray(anArrayOfObjects) {
    const seenArray = [];

    for (let item of anArrayOfObjects) {
        seenArray.push(item.seen);
    }
    return seenArray;
}


export function makeCaughtArray(anArrayOfObjects) {
    const caughtArray = [];

    for (let item of anArrayOfObjects) {
        caughtArray.push(item.caught);
    }
    return caughtArray;
}


export function makeLabelArray(anArrayOfObjects) {
    const labelArray = [];

    for (let item of anArrayOfObjects) {
        labelArray.push(item.name);
    }
    return labelArray;
}