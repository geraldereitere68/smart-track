/*
FILENAME: SophisticatedCode.js
CONTENT: This code implements a sophisticated web application using JavaScript.
*/

// Define global variables
const MAX_ATTEMPTS = 5;
const MIN_SCORE = 0;
const MAX_SCORE = 100;

// Initialize the application
window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#form');
  const input = document.querySelector('#input');
  const submitBtn = document.querySelector('#submit-btn');
  const resultsContainer = document.querySelector('#results-container');
  const attemptsContainer = document.querySelector('#attempts-container');
  const scoreContainer = document.querySelector('#score-container');

  let score = MAX_SCORE;
  let attempts = MAX_ATTEMPTS;

  submitBtn.addEventListener('click', () => {
    const guess = Number(input.value);
    if (isNaN(guess) || guess < MIN_SCORE || guess > MAX_SCORE) {
      alert('Invalid guess! Please enter a number between 0 and 100.');
      return;
    }

    attempts--;

    if (guess === generateRandomNumber()) {
      resultsContainer.textContent = 'Congratulations! You guessed the correct number.';
      submitBtn.setAttribute('disabled', 'true');
    } else {
      if (attempts === 0) {
        resultsContainer.textContent = 'Sorry, you failed to guess the correct number.';
        submitBtn.setAttribute('disabled', 'true');
      } else if (guess < generateRandomNumber()) {
        resultsContainer.textContent = 'Too low! Try again.';
      } else {
        resultsContainer.textContent = 'Too high! Try again.';
      }

      score -= Math.round(MAX_SCORE / MAX_ATTEMPTS);
      scoreContainer.textContent = `Score: ${score}`;
    }

    attemptsContainer.textContent = `Attempts left: ${attempts}`;
  });

  function generateRandomNumber() {
    return Math.floor(Math.random() * (MAX_SCORE - MIN_SCORE + 1)) + MIN_SCORE;
  }
});

// Other utility functions...
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1 || n === 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// More complex code...
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  setAge(age) {
    if (age < 0) {
      throw new Error('Age cannot be negative.');
    }
    this.age = age;
  }

  toString() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

const john = new Person('John Doe', 30);
john.setAge(31);
console.log(john.toString());

const calculateFactorial = (num) => {
  console.log(`Factorial of ${num}: ${factorial(num)}`);
};

calculateFactorial(5);

const calculateFibonacci = (num) => {
  console.log(`Fibonacci sequence up to ${num}:`);
  for (let i = 0; i <= num; i++) {
    console.log(fibonacci(i));
  }
};

calculateFibonacci(10);

// And many more lines of sophisticated code...