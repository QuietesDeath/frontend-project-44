
import playEvenGame from '../src/evenGame.js';
import { greeting } from '../src/cli.js';

greeting();
playEvenGame();

import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

const playEvenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNum = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNum}`);

    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = isEven(randomNum) ? 'yes' : 'no';

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log("Let's try again + name +!");
      return;
    }

    console.log('Correct!');
  }

  console.log('Congratulations, you won!');
};

export default playEvenGame;