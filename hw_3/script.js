function checkValueForMaxSafeInteger(result) {
  if (result > Number.MAX_SAFE_INTEGER) {
    return new Error("The value is greater than Number.MAX_SAFE_INTEGER");
  } else {
    return result;
  }
}

function range(min, max) {
  if (arguments.length !== 2) {
    throw new Error("Function has a different number of arguments than two");
  }

  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    throw new Error("Arguments are not Integer");
  }

  if (min > max) {
    throw new Error(
      `Minimum value (${min}) is greater than maximum value (${max})`
    );
  }

  return checkValueForMaxSafeInteger(((min + max) * (max - min + 1)) / 2);
}

const memoize = (func) => {
  let cache = {};
  return (...args) => {
    let n = JSON.stringify(args);
    if (n in cache) {
      console.log("Fetching from cache:");
    } else {
      let result = func(...args);
      console.log("Result was calculated:");
      cache[n] = result;
    }
    if (cache[n] instanceof Error) {
      throw cache[n];
    }
    return cache[n];
  };
};

const memoizedRange = memoize(range);

console.log("memoizedRange(-11, 11)");
console.log(memoizedRange(-11, 11));
console.log("memoizedRange(-11, 11)");
console.log(memoizedRange(-11, 11));
console.log("memoizedRange(5, 11)");
console.log(memoizedRange(5, 11));
console.log("memoizedRange(5, 11)");
console.log(memoizedRange(5, 11));

// Code for testing error cases
//
// try {
//   console.log("memoizedRange(1, -1)");
//   console.log(memoizedRange(1, -1));
// } catch (e) {
//   console.error(e.message);
// }
// try {
//   console.log('memoizedRange(-11, "1")');
//   console.log(memoizedRange(-11, "1"));
// } catch (e) {
//   console.error(e.message);
// }
// try {
//   console.log("memoizedRange(1, 1.2)");
//   console.log(memoizedRange(1, 1.2));
// } catch (e) {
//   console.error(e.message);
// }
// try {
//   console.log("memoizedRange({}, 10)");
//   console.log(memoizedRange({}, 10));
// } catch (e) {
//   console.error(e.message);
// }
// try {
//   console.log("memoizedRange(1, 11, 12)");
//   console.log(memoizedRange(1, 11, 12));
// } catch (e) {
//   console.error(e.message);
// }
// try {
//   console.log("memoizedRange(1)");
//   console.log(memoizedRange(1));
// } catch (e) {
//   console.error(e.message);
// }
// try {
//   console.log("memoizedRange()");
//   console.log(memoizedRange());
// } catch (e) {
//   console.error(e.message);
// }
// try {
//   console.log("memoizedRange(1, 99999999999)");
//   console.log(memoizedRange(1, 99999999999));
// } catch (e) {
//   console.error(e.message);
// }
// try {
//   console.log("memoizedRange(1, 99999999999)");
//   console.log(memoizedRange(1, 99999999999));
// } catch (e) {
//   console.error(e.message);
// }
