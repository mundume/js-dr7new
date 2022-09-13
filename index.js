// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//primitive
const name = 'john';
//appDiv.textContent = typeof name

const age = 45;
//appDiv.textContent = age

const car = null;
//appDiv.textContent =typeof car;

let test;

const syn = Symbol();
//appDiv.textContent = typeof syn;
//appDiv.textContent = typeof test

//reference types objects

const hobbies = 'code sleep food love';
//appDiv.textContent = typeof hobbies;
console.log(hobbies.replace('code', 'food'));



//arrays 
const array = [1,2,4,5,3,5,7]

array.push(3)//addd on to the end of an array
array.unshift(120)//add elements at the start of an array
array.pop()//remove element from the end and start

array.shift()//remove from the start of the array


console.log(array)
