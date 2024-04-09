var input4 = [1, 2, 2, 4, 6, 9, 11, 12, 11, 666];

function findModus(arr) {
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
        values = [Number(key)];
      } else if (counts[key] === maxCounts) {
        maxCounts = counts[key];
        values.push(Number(key));
      }
    }
  }
  return values;
}

console.log(findModus(input4)); // [2, 11]
