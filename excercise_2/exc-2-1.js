function camelToSnake(camel) {
  const snakeString = [];
  const letterArrays = camel.split("");
  for (let element of letterArrays) {
    if (element === element.toUpperCase()) {
      element = `_${element.toLowerCase()}`;
      snakeString.push(element);
    } else {
      snakeString.push(element);
    }
  }
  return snakeString.join("");
}

console.log(camelToSnake("someNewWordToTransformAndA")); //some_new_word_to_transform_and_a
