export function checkGuess(guess, correctWord) {
  // Array som håller koll på vilka bokstäver i det korrekta ordet som redan matchats
  const correctMatches = Array(correctWord.length).fill(false);

  // Räknar antal förekomster av varje bokstav i det korrekta ordet
  const letterCount = {};
  correctWord.split("").forEach((letter) => {
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  });

  // Första passet: Skapa resultat array med "correct" och "pending"
  let resultArray = guess.split("").map((letter, index) => {
    if (letter === correctWord[index]) {
      correctMatches[index] = true;
      letterCount[letter]--;
      return { letter: letter, result: "correct" };
    } else {
      return { letter: letter, result: "pending" };
    }
  });

  // Andra passet: Uppdatera "misplaced" och "incorrect"
  resultArray = resultArray.map((item, guessIndex) => {
    if (item.result === "pending") {
      let foundMisplaced = false;
      for (
        let correctIndex = 0;
        correctIndex < correctWord.length;
        correctIndex++
      ) {
        if (
          !correctMatches[correctIndex] &&
          item.letter === correctWord[correctIndex] &&
          letterCount[item.letter] > 0
        ) {
          foundMisplaced = true;
          correctMatches[correctIndex] = true;
          letterCount[item.letter]--;
          break;
        }
      }
      if (foundMisplaced) {
        return { letter: item.letter, result: "misplaced" };
      } else {
        return { letter: item.letter, result: "incorrect" };
      }
    } else {
      return item;
    }
  });

  return resultArray;
}

// Exempelanvändning:
const guess = "hallå";
const correctWord = "cykla";
const result = checkGuess(guess, correctWord);
console.log(result);
