# javascript

### _Homework №1_

- Create an HTML file with a script, where need to implement
  different examples of type coercion.
  
### _Homework №2_

```javascript
function randn_bm() {
    let u = 0, v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v) * 2 | 0;
}
```

- Using provided function generate 10 numbers. Create object with the keys related to the generated numbers and value as a quantity of corresponding number. Display numbers distribution as a table using template literal string.

- Example of object: {0: 5, 1: 3, 2: 2}

### _Homework №3_

- Implement function ```range(min,max)``` that can return sum of integer numbers in range ```[min,max]```

- Consider edge cases: result is greater than ```Number.MAX_SAFE_INTEGER```, argument is not a number, ```min > max```, etc.

- *For performance reason add memoization mechanism

- Push code to repo “Sum of Row”

### _Homework №4_

- Implement function that leads to the stack overflow issue

- Implement function that can affect memory leak issue

- Push code to repo “memory management”

### _Homework №5_

- Describe base class Entity that can store name

- Implement child classes Stuff, Box, User. Box can store some stuff[]. Every box belongs to user

- Add example of usage of these classes, e.g., create some instances, display data related to them

- Push code to repo “user stuff”

