const apples: number = 5;
const speed: string = 'fast';
const hasName: boolean = true;
const nothingMuch: null = null;
const nothing: undefined = undefined;

// Built-in objects
const now: Date = new Date();

// Array
let colors: string[] = [ 'red', 'green', 'blue' ];
let myNumbers: number[] = [ 1, 2, 3 ];
let thruths: boolean[] = [ true, true, false ];

// Classes
class Car {}
let car: Car = new Car();;

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
};

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;
for(let i = 0; i < words.length; i++) {
  if(words[i] === 'green') {
    foundWord = true;
  }
}
