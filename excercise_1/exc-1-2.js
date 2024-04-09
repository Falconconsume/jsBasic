const input2 = [1, 2, 4, 6, 9, 11, 11, 12];
const input3 = [1, 2, 4, 6, 9, 11, 11, 12, 13];

function findMedian(arr) {
  const middleIndex = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
    return (arr[middleIndex - 1] + arr[middleIndex]) / 2;
  } else {
    return arr[middleIndex];
  }
}

console.log(findMedian(input2)); // 7.5
console.log(findMedian(input3)); // 9
