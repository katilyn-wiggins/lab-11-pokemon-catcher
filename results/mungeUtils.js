


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


export function makeHpArray(anArrayOfObjects) {
    const hpArray = [];

    for (let item of anArrayOfObjects) {
        hpArray.push(item.hp);
    }
    return hpArray;
}


export function makeHeightArray(anArrayOfObjects) {
    const heightArray = [];

    for (let item of anArrayOfObjects) {
        heightArray.push(item.height);
    }
    return heightArray;
}

export function makeSpeedArray(anArrayOfObjects) {
    const speedArray = [];

    for (let item of anArrayOfObjects) {
        speedArray.push(item.speed);
    }
    return speedArray;
}

export function makeAttackArray(anArrayOfObjects) {
    const attackArray = [];

    for (let item of anArrayOfObjects) {
        attackArray.push(item.attack);
    }
    return attackArray;
}
