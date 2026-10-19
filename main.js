import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';


async function guessGame() {
  const rl = readline.createInterface({ input, output });
  console.log("Welcome to the Number Guessing Game! \nI'm thinking of a number between 1 and 100.\nYou have 5 chances to guess the correct number. ");

  const selectDiff = await rl.question('Please select the difficulty level: \n1. Easy (10 chances) \n2. Medium (5 chances) \n3. Hard (3 chances) \n\nEnter your choice: ');
  console.log(`You chose: ${selectDiff}`);

  rl.close();
}
guessGame();