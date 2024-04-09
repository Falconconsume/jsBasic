var changes = "+++-+---++--+-+-++";

function countOfChages(str) {
  let amountOfChangedSymbol = 0;
  const arrayLetters = str.split("");

  for (let i = 1; i < arrayLetters.length; i++) {
    if (arrayLetters[i] !== arrayLetters[i - 1]) {
      amountOfChangedSymbol += 1;
    }
  }
  return amountOfChangedSymbol;
}

console.log(countOfChages(changes)); //10
