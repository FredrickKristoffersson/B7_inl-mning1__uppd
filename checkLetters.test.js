import { checkGuess } from "./checkLetters";
import { test, expect } from "@jest/globals";

test("if input guess matches made up secret word", () => {
  const guess1 = "leksak";
  const secret1 = "hemlig";
  expect(checkGuess(guess1, secret1)).toStrictEqual([
    { letter: "l", result: "misplaced" },
    { letter: "e", result: "correct" },
    { letter: "k", result: "incorrect" },
    { letter: "s", result: "incorrect" },
    { letter: "a", result: "incorrect" },
    { letter: "k", result: "incorrect" },
  ]);
});

test("if input guess matches made up secret word, 2nd test", () => {
  const guess2 = "spring";
  const secret2 = "staket";
  expect(checkGuess(guess2, secret2)).toEqual([
    { letter: "s", result: "correct" },
    { letter: "p", result: "incorrect" },
    { letter: "r", result: "incorrect" },
    { letter: "i", result: "incorrect" },
    { letter: "n", result: "incorrect" },
    { letter: "g", result: "incorrect" },
  ]);
});

test("if input guess matches made up secret word, 3rd test", () => {
  const guess3 = "stänkare";
  const secret3 = "atletisk";
  expect(checkGuess(guess3, secret3)).toEqual([
    { letter: "s", result: "misplaced" },
    { letter: "t", result: "correct" },
    { letter: "ä", result: "incorrect" },
    { letter: "n", result: "incorrect" },
    { letter: "k", result: "misplaced" },
    { letter: "a", result: "misplaced" },
    { letter: "r", result: "incorrect" },
    { letter: "e", result: "misplaced" },
  ]);
});

// test för denna inlämningsuppgift
test("if input guess matches made up secret word, 4th test", () => {
  const guess4 = "HALLÅ";
  const secret4 = "CYKLA";
  expect(checkGuess(guess4, secret4)).toEqual([
    { letter: "H", result: "incorrect" },
    { letter: "A", result: "misplaced" },
    { letter: "L", result: "incorrect" },
    { letter: "L", result: "correct" },
    { letter: "Å", result: "incorrect" },
  ]);
});
