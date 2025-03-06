import readlineSync from 'readline-sync';


const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
};


const game = () => {
    console.log('Welcome to the Brain Games!');
    
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    const rounds = 3;
    for (let i = 0; i < rounds; i++) {
        const number = Math.floor(Math.random() * 100); 
        const correctAnswer = isPrime(number) ? 'yes' : 'no';

        console.log(`Question: ${number}`);
        
        const userAnswer = readlineSync.question('Your answer: ');
        
        if (userAnswer.toLowerCase() === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
};

game();