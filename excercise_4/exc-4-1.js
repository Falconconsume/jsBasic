let obj = {
  a: 2,
  b: "22",
  c: false,
  d: "b",
  f: 3.14,
  g: 42,
};

let count = 0;

for (let key in obj) {
  if (Number(obj[key]) === obj[key]) {
    ++count;
  }
}

console.log(count); // 3
