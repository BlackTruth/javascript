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

- Describe base class Entity that can store name​

- Implement child classes Stuff, Box, User. Box can store some stuff[]. Every box belongs to user​

- Add example of usage of these classes, e.g., create some instances, display data related to them​

- Push code to repo “user stuff”

### _Homework №6_

- Given array of numbers is encrypted Russian phrase. Find most frequent letters in text.

- ```
  [47, 46, 48, 31, 63, 47, 36, 48, 36, 49, 50, 31, 50, 59, 63, 38, 35, 31, 50, 59, 63, 45, 36, 46, 38, 40, 35, 31, 45, 45, 58, 53, 63, 47, 46, 35, 31, 48, 42, 46, 33, 63, 46, 50, 63, 38, 40, 39, 45, 40, 63, 31, 63, 49, 31, 44, 46, 44, 51, 63, 35, 36, 43, 31, 50, 59, 63, 38, 40, 39, 45, 59]
  ```
- *Decrypt phrase using [link](https://dpva.ru/Guide/GuideUnitsAlphabets/Alphabets/FrequencyRuLetters/)

- Push code to repo “Leo Tolstoy”
