import readlineSync from 'readline-sync';

const getRandomNumber = (max) => Math.floor(Math.random() * max) + 1;

const getRandomOperator = () => {
    const operators = ['+', '-', '*'];
    return operators[getRandomNumber(operators.length) - 1];
};

const calculateResult = (num1, num2, operator) => {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        default:
            throw new Error('Unknown operator');
    }
};

const playGame = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your nickname? ');
    console.log(`Hello, ${name}!`);
    console.log('What is the result of the expression?');

    for (let i = 0; i < 3; i++) {
        const num1 = getRandomNumber(20);
        const num2 = getRandomNumber(20);
        const operator = getRandomOperator();
        const correctAnswer = calculateResult(num1, num2, operator);

        const answer = readlineSync.question(`Question: ${num1} ${operator} ${num2}\nYour answer: `);
        
        if (Number(answer) !== correctAnswer) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }

        console.log('Correct!');
    }

    console.log(`Congratulations, ${name}!`);
};

playGame();