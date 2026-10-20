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
async function randomNum(diff, numberType) {
  const computerChoice = Math.floor(100 * Math.random());

  if (diff === levelDiff.easy.name) {
    
  } else if (diff === levelDiff.medium.name) {

  } else if (diff === levelDiff.hard.name) {

  }
  
}

export {randomNum};
