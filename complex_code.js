// Filename: complex_code.js

/* 
This code demonstrates a complex simulation of a car racing game.
It includes multiple classes, functions, and logic to handle the game mechanics.
*/

class Car {
  constructor(name, topSpeed) {
    this.name = name;
    this.topSpeed = topSpeed;
  }

  accelerate() {
    // Some complex acceleration logic
    console.log(`${this.name} is accelerating...`);
  }

  brake() {
    // Some complex braking logic
    console.log(`${this.name} is braking...`);
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.car = null;
  }

  chooseCar(car) {
    this.car = car;
  }

  startRace() {
    console.log(`${this.name} is starting the race with ${this.car.name}!`);
    // Some complex race logic and simulation
  }

  finishRace() {
    console.log(`${this.name} has finished the race!`);
    // Some complex finish logic and calculations
  }
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate random car names and top speeds
const cars = [];
for (let i = 1; i <= 10; i++) {
  const car = new Car(`Car ${i}`, getRandomNumber(100, 200));
  cars.push(car);
}

// Create players and assign random cars
const players = [];
for (let i = 1; i <= 4; i++) {
  const player = new Player(`Player ${i}`);
  const randomCarIndex = getRandomNumber(0, cars.length - 1);
  player.chooseCar(cars[randomCarIndex]);
  cars.splice(randomCarIndex, 1);
  players.push(player);
}

// Start the race
console.log("Race starting...");
for (const player of players) {
  player.startRace();
}

// Simulate race progress
setTimeout(() => {
  for (const player of players) {
    player.car.accelerate();
  }
}, 2000);

setTimeout(() => {
  for (const player of players) {
    player.car.brake();
  }
}, 4000);

// Simulate race finish
setTimeout(() => {
  for (const player of players) {
    player.finishRace();
  }
}, 6000);
