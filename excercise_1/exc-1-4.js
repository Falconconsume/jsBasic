input5 = [1, 4, 2, 1, 2, 2, 2, 3, 9, 8, 33];

function findUnique(arr) {
  const counts = {};
  for (let i = 0; i < arr.length; i++) {
    counts[arr[i]] = (counts[arr[i]] || 0) + 1;
  }
  let maxCounts = 0;
  let values = [];
  for (var key in counts) {
    if (counts.hasOwnProperty(key)) {
      if (counts[key] > maxCounts) {
        maxCounts = counts[key];
      } else if (counts[key] <= 1) {
        maxCounts = counts[key];
        values.push(Number(key));
      }
    }
  }
  return values;
}

console.log(findUnique(input5)); // [ 3, 4, 8, 9, 33 ]
