
import readlineSync from 'readline-sync';
import { randomInt } from 'crypto'; // Если ваш окружение недостаточно имеет crypto, просто используйте Math.random

const getRandomNumber = () => randomInt(1, 100); // Случайное число от 1 до 99

const isEven = (num) => num % 2 === 0;

const startGame = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your nickname? ');
    console.log(`Hello, ${userName}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let correctAnswers = 0;

    while (correctAnswers < 3) {
        const question = getRandomNumber();
        console.log(`Question: ${question}`);

        const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

        const correctAnswer = isEven(question) ? 'yes' : 'no';

        if (userAnswer !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }

        console.log('Correct!');
        correctAnswers += 1;
    }

    console.log(`Congratulations, ${userName}!`);
};

startGame();
