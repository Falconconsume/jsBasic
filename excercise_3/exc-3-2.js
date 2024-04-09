function acceptThreeFunctions(func1, func2, func3, num = 42) {
  const result1 = func1(num);
  const result2 = func2(num);
  const result3 = func3(num);

  return Math.max(result1, result2, result3);
}

console.log(
  acceptThreeFunctions(
    (a) => a * 2,
    (b) => b * 3,
    (c) => c * 4
  )
); // 168
