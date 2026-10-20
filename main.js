#!/usr/bin/env node
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { randomNum } from './logic.js';

const rl = readline.createInterface({ input, output });
const diffOptions = ["Easy", "Medium", "Hard"];
async function guessGame() {

  console.log("\nWelcome to the Number Guessing Game! \nI'm thinking of a number between 1 and 100.\nYou have 5 chances to guess the correct number.\n ");

  let diff;
  let running = true;
  
  while (running) {
    const selectDiff = await rl.question('Please select the difficulty level: \n1. Easy (10 chances) \n2. Medium (5 chances) \n3. Hard (3 chances) \n\nEnter your choice: ');

    if (!diffOptions.includes(selectDiff)) {
      console.log(`Please input "Easy", "Medium", or "Hard"\n`)
    } else {
      if (selectDiff === 'Easy') {
        diff = selectDiff;
        console.log('\nGreat! You have selected the Easy difficulty level. \nLet\'s start the game!');
        running = false;

      } else if (selectDiff === 'Medium') {
        diff = selectDiff;
        console.log('\nGreat! You have selected the Medium difficulty level. \nLet\'s start the game!');
        running = false;

      } else if (selectDiff === 'Hard') {
        diff = selectDiff;
        console.log('\nGreat! You have selected the Hard difficulty level. \nLet\'s start the game!');
        running = false;
      }
    }
  }
  randomNum(diff);
}
guessGame();

export { rl }