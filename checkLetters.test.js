import { equal } from "assert";
import { checkLetters } from "./checkLetters";
import { test, expect } from "@jest/globals";

test.skip("if input guess matches made up secret word", () => {
  const guess1 = "leksak";
  const secret1 = "hemlig";
  expect(checkLetters(guess1, secret1)).toStrictEqual([
    { letter: "l", status: "misplaced" },
    { letter: "e", status: "correct" },
    { letter: "k", status: "incorrect" },
    { letter: "s", status: "incorrect" },
    { letter: "a", status: "incorrect" },
    { letter: "k", status: "incorrect" },
  ]);
});

test("if input guess matches made up secret word, 2nd test", () => {
  const guess2 = "spring";
  const secret2 = "staket";
  expect(checkLetters(guess2, secret2)).toEqual([
    { letter: "s", status: "correct" },
    { letter: "p", status: "incorrect" },
    { letter: "r", status: "incorrect" },
    { letter: "i", status: "incorrect" },
    { letter: "n", status: "incorrect" },
    { letter: "g", status: "incorrect" },
  ]);
});

test("if input guess matches made up secret word, 3rd test", () => {
  const guess3 = "stänkare";
  const secret3 = "atletisk";
  expect(checkLetters(guess3, secret3)).toEqual([
    { letter: "s", status: "misplaced" },
    { letter: "t", status: "correct" },
    { letter: "ä", status: "incorrect" },
    { letter: "n", status: "incorrect" },
    { letter: "k", status: "misplaced" },
    { letter: "a", status: "misplaced" },
    { letter: "r", status: "incorrect" },
    { letter: "e", status: "misplaced" },
  ]);
});
