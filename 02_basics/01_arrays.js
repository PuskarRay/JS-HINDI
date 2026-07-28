//Array

const myArr = [0,1,2,3,4,5]
const myHeroes = ["spiderman","ironman","thor"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);


//Array methods 

myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr);

myArr.unshift(9) // Add value in the beginning of the array
console.log(myArr);

myArr.shift() // just like pop
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(9)); // value not exist therefore gives -1
console.log(myArr.indexOf(3));


const newArr = myArr.join() // changes the array to string
console.log(myArr);
console.log(typeof newArr);

//slice , splice 
console.log("A ",myArr);
const myn1 = myArr.slice(1,3) 

console.log(myn1);
console.log("B ",myArr);

const myn2  = myArr.splice(1,3) // manipulates original array
console.log("C ",myn2);
console.log(myArr);

