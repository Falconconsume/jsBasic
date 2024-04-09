var input6 = { a: 1, b: 2, ccc: "abl", d: true };

function objectToString(obj) {
  let arrayString = [];
  for (let key in obj) {
    const objString = `${key} -> ${obj[key]}`;
    arrayString.push(objString);
  }
  return arrayString.join("; ");
}

console.log(objectToString(input6)); //(a -> 1; b -> 2; ccc -> abl; d -> true)
