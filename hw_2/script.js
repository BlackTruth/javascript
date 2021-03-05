function randn_bm() {
    let u = 0,
        v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    return (Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v) * 2) | 0;
}

function fillAndGroupRandom(count, randomFunc) {
    const resultObject = {};
    let wCount = count + 1;

    while ((wCount -= 1)) {
        const elem = randomFunc();
        if (elem in resultObject) {
            resultObject[elem] += 1;
        } else {
            resultObject[elem] = 1;
        }
    }
    return resultObject;
}

function drawTable(obj) {
    console.log(obj);
    console.log("+---------+---------+");
    console.log("|  Number | Count   |");
    console.log("+---------+---------+");
    Object.getOwnPropertyNames(obj)
        .sort((x, y) => x - y)
        .forEach((prop) => {
            console.log(
                `|${String(prop).padStart(8)} | ${String(obj[prop]).padEnd(8)}|`
            );
        });
    console.log("+---------+---------+");
}

drawTable(fillAndGroupRandom(10, randn_bm));
