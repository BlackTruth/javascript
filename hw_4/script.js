function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

let arr = [];

function heapFilling() {
  // This number (1024 * 1024 * 108) depends on what is the element you push in the array and heap memory limit
  // I need to say that a single element of 32bit (integer) doesn't produce an array of the same size.
  // The array size is much greater. I believe the rest is occupied by system fields. But i don't say the actual number.
  // You can setup memory limit using the  following command:
  // node --max-old-space-size=64 hw_4/script.js
  // $ node -e 'console.log(`node heap limit = ${require("v8").getHeapStatistics().heap_size_limit / (1024 * 1024)} Mb`)'
  // node heap limit = 2096 Mb
  //https://www.mattzeunert.com/2016/07/24/javascript-array-object-sizes.html#:~:text=JavaScript%20uses%20double%2Dprecision%20(64,empty%20object%20as%2056%20bytes.
  for (let i = 0; i < 1024 * 1024 * 108; i++) {
    arr.push(1);
    // If you uncomment the next line of code and run in node.js, no heap overflow occurs...
    // I think when console.log is called, the engine optimizations have time to work.
    /*console.log(process.memoryUsage().heapUsed);*/
  }
}

// Caution! Calling the next part of the code will result in a stack overflow.
/*
try {
  console.log(
    "Recursive function factorial of a 100000 will cause a stack overflow: "
  );
  console.log(factorial(100000));
} catch (e) {
  console.error(e.message);
}
*/

//Caution! Calling the next function will result in a heap overflow.
heapFilling();
