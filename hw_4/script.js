function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

let arr = [];

function heapFilling() {
  // For example one element of array = 8 bit, 8 bit * 1024 * 1024 ~= 1MB then 108 it coefficient for heap overflow
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
/*heapFilling();*/
