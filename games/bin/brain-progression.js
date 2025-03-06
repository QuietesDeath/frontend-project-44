import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getProgression = (start, step, length) => {
  return Array.from({ length }, (_, i) => start + i * step);
};

const playGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your nickname? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');

  const progressionLength = getRandomInt(5, 10);
  const start = getRandomInt(1, 20);
  const step = getRandomInt(1, 10);
  const progression = getProgression(start, step, progressionLength);
  const hiddenIndex = getRandomInt(0, progressionLength - 1);
  const hiddenValue = progression[hiddenIndex];
  progression[hiddenIndex] = '..';

  console.log(`Question: ${progression.join(' ')}`);


  const userAnswer = Number(readlineSync.question('Your answer: '));

  if (userAnswer === hiddenValue) {
    console.log('Correct!');
  } else {
    console.log `'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenValue}'.`;
    console.log(`Let's try again, ${name}!`);
    return;
  }

  console.log(`Congratulations, ${name}!`);
};

playGame();