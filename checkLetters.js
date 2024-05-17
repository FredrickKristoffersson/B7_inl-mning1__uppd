// const guessingWord = "postav";
// const secretWord = "pastor";

// skapar funktion som testar inkommande gissning mot hemligt förbestämt ord
export function checkLetters(guess, secretWord) {
  const letterArray = guess.split("").map((letter, index) => {
    if (letter === secretWord[index]) {
      return { letter: letter, status: "correct" };
    } else if (secretWord.includes(letter)) {
      return { letter: letter, status: "misplaced" };
    } else {
      return { letter: letter, status: "incorrect" };
    }
  });
  return letterArray;
}
// console.log(checkLetters(guessingWord, secretWord));
