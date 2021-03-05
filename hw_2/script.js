function randn_bm() {
    let u = 0,
        v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    return (Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v) * 2) | 0;
}

function fillArrayWithRandom(count, randomFunc) {
    let arr = [];
    let wCount = count + 1;

    while (wCount -= 1) {
        arr.push(randomFunc());
    }
    console.log(arr);
    return arr;
}

function groupArray(arr) {
    const resultObject = {};

    arr.forEach((elem) => {
        if (elem in resultObject) {
            resultObject[elem] += 1;
        } else {
            resultObject[elem] = 1;
        }
    });
    return resultObject;
}

function groupRandom(count, randomFunc) {
    const arr = fillArrayWithRandom(count, randomFunc);
    return groupArray(arr);
}

console.log(groupRandom(10, randn_bm));
