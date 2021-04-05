//prettier-ignore
const initialArray = [
  47, 46, 48, 31, 63, 47, 36, 48, 36, 49, 50, 31, 50, 59, 63,
  38, 35, 31, 50, 59, 63, 45, 36, 46, 38, 40, 35, 31, 45, 45,
  58, 53, 63, 47, 46, 35, 31, 48, 42, 46, 33, 63, 46, 50, 63,
  38, 40, 39, 45, 40, 63, 31, 63, 49, 31, 44, 46, 44, 51, 63,
  35, 36, 43, 31, 50, 59, 63, 38, 40, 39, 45, 59
];

const mappedObject = initialArray.reduce((accumulator, char) => {
  if (accumulator[char]) {
    accumulator[char] += 1;
  } else {
    accumulator[char] = 1;
  }
  return accumulator;
}, {});

const sortedArray = Object.entries(mappedObject).sort(([, x], [, y]) => y - x);

let ratio;

// Object with correct ratio letter code with letters:
/*
ratio = {
  63: "  ",
  31: "а",
  45: "н",
  46: "о",
  50: "т",
  35: "д",
  36: "е",
  38: "ж",
  40: "и",
  59: "ь",
  47: "п",
  48: "р",
  39: "з",
  44: "м",
  49: "с",
  33: "в",
  42: "к",
  43: "л",
  51: "у",
  53: "х",
  58: "ы",
};
*/

sortedArray.slice(0, 5).map((item) => {
  console.log(
    `Letter ${item[0]} ${ratio ? "= " + ratio[item[0]] : ""}: ${item[1]} times.`
  );
});

//Simple app for matching letters manually:
//
/*
const body = document.querySelector("body");
sortedArray.forEach(([key]) => {
  const div = document.createElement("div");
  div.innerText = key;
  const input = document.createElement("input");
  input.type = "text";
  input.value = ratio ? ratio[+key] || "" : "";
  input.id = `key${key}`;
  div.appendChild(input);
  body.appendChild(div);
});

const result = document.createElement("pre");
body.appendChild(result);

const calculate = () => {
  let phrase;
  phrase = initialArray.reduce((str, char) => {
    const input = document.getElementById(`key${char}`);
    if (input && input.value) {
      return str + input.value;
    } else {
      return str + "-";
    }
  }, "");
  result.innerText = phrase;
};

const button = document.createElement("button");
button.addEventListener("click", calculate);
button.innerText = "Calc";
body.appendChild(button);

calculate();
*/
