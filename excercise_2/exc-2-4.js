function transformCsv(string) {
  const csvRows = string.split(";");
  const result = [];

  for (let row of csvRows) {
    const [id, name, age] = row.split(",").map((item) => item.trim());
    result.push({ id: Number(id), name, age: Number(age) });
  }

  return result;
}

const csvInput = "1,  Peter,  22;" + "2, Jim, 11,;" + "3, P eeter, 8";
console.log(transformCsv(csvInput));
// Output:
// [ { id: 1, name: 'Peter', age: 22 },
//   { id: 2, name: 'Jim', age: 11 },
//   { id: 3, name: 'P eeter', age: 8 } ]
