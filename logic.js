import { rl } from './main.js'; 

let levelDiff = {
  easy: {
    name: 'Easy',
    chances: 10
  },
  medium: {
    name: 'Medium',
    chances: 5
  },
  hard: {
    name: 'Hard',
    chances: 3
  }
}

async function randomNum(diff) {
  const computerChoice = Math.floor(100 * Math.random());
  let running = true;
  let attempts;

  if (diff === levelDiff.easy.name) {
    attempts = levelDiff.easy.chances;
  } else if (diff === levelDiff.medium.name) {
    attempts = levelDiff.medium.chances;
  } else if (diff === levelDiff.hard.name) {
    attempts = levelDiff.hard.chances;
  }

  while (running) {
    const numberType = await rl.question('\nEnter your choice: ')
    if (Number(numberType) > computerChoice) {
      console.log(`Incorrect! The number is less than ${numberType}`)
      attempts--;
    } else if (numberType < computerChoice) {
      console.log(`Incorrect! The number is greater than ${numberType}`)
      attempts--;
    } 

    if (Number(numberType) === computerChoice) {
      console.log(`Congratulations! You guessed the correct number in ${attempts} attempts`)
      running = false;
      rl.close(); 
    }

    if (attempts === 0) {
      console.log('Game over!')
      running = false;
      rl.close();  
    }
  }
}

export {randomNum};
