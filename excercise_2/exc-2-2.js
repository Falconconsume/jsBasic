function snakeToCamel(snake) {
  const camelCaseString = [];
  const letterArrays = snake.split("_");
  for (let element of letterArrays) {
    const upperCaseLetter = element.charAt(0).toUpperCase() + element.slice(1);
    camelCaseString.push(upperCaseLetter);
  }
  return camelCaseString.join("");
}

console.log(snakeToCamel(" some_new_word_to_transform_and_a")); // someNewWordToTransformAndA
