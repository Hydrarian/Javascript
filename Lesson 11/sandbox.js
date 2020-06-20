//Numbers
let radius = 10;
const pi = 3.14;

console.log(radius, pi);

//math operators +, -, *, /, **, %
console.log(10 / 2);

let result = radius % 3;
console.log(result);

result = pi * radius **2;
console.log(result);

//order of operation - B I D M A S
result = 5 * (10 - 3 ) ** 2;

let likes = 10;
likes = likes + 1;
likes++;
likes--;

//short notation
likes += 10;
likes -= 10;
likes *= 10;
likes /= 10;

// NaN - not a number
console.log(5 / 'hello');


//Lesson 12
const title = 'Best reads of 2020';
const author = 'Mario';
likes = 30;

//concatenation way (messy one)
let stringaRisultante = 'THe blog called ' + title + ' by ' + author + 'has ' + likes + ' likes.';

//template string way
stringaRisultante = `The blog called ${title} by ${author} has ${likes} likes.`
console.log(stringaRisultante);

//html template
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>`;

console.log(html);