import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const easy = 10;
const medium = 5;
const hard = 3;

async function guessGame() {
  const rl = readline.createInterface({ input, output });
  console.log("\nWelcome to the Number Guessing Game! \nI'm thinking of a number between 1 and 100.\nYou have 5 chances to guess the correct number.\n ");

  const selectDiff = await rl.question('Please select the difficulty level: \n1. Easy (10 chances) \n2. Medium (5 chances) \n3. Hard (3 chances) \n\nEnter your choice: ');
  
  if (Number(selectDiff) === 1) {
    console.log('\nGreat! You have selected the Easy difficulty level. \nLet\'s start the game!');
  } else if (Number(selectDiff) === 2 ) {
    console.log('\nGreat! You have selected the Medium difficulty level. \nLet\'s start the game!');
  } else if (Number(selectDiff) === 3) {
    console.log('\nGreat! You have selected the Hard difficulty level. \nLet\'s start the game!');
  }

  rl.close();
}
guessGame();