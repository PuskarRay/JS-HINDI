const score = 400
console.log(score);


const balance = new Number(100)
console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2));


const otherNumber = 123.8966
//console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));

//*****************Maths*****************************

console.log(Math);

console.log(Math.abs(-4)); // Absolute
console.log(Math.round(4.5));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.sqrt(4));
console.log(Math.min(1,5,9,2));
console.log(Math.max(1,5,9,2));

console.log(Math.random()); //Always gives value that lies between 0 and 1 
console.log(Math.random()*10); // As 0.051 also lies bet 0&1 : thats why we add 1 to avoid those case 
console.log(Math.ceil(Math.random()*10+1));

const min=10
const max=20

console.log(Math.floor(Math.random() * (max - min + 1))+min)