const points2 = [5, 6, 3, 2, 1, 8, 4, 6, -2, 2, -55];

function getNthSmallest(arr, n) {
  arr.sort((a, b) => a - b);
  return arr[n];
}

console.log(getNthSmallest(points2, 4)); //2
