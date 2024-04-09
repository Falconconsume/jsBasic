var anotherObj = {
  a: 1,
  _b: 2,
  _c: 4,
  _d: () => {},
  e: () => {},
};

Object.keys(anotherObj).forEach(
  (key) => key.charAt(0) == "_" && delete anotherObj[key]
);
console.log(anotherObj); //{ a: 1, e: [Function: e] }
