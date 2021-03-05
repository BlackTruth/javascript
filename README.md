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
