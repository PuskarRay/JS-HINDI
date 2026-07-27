// Primitive 
// 7 types : string ,number , boolean , null,  undefined , symbol,BigInt

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id ==  anotherId);

const bigNumber = 6874366463164n

//Reference(Non-primitive)

//Array ,Objects , Functions 

const heros =["saktiman","coder","loser"];


//object
let myObj = {
    name:"hitesh",
    age:22,
}


//function
const myFunction = function(){
    console.log("Hello World");
    
}


//**********************************Memory

//Stack(Primitive) , Heap (Non-primitive)

let myYoutubename = "hiteshchaiaurcode"

let anotherName = myYoutubename  // copy of values 
anotherName = "chaiaurcode"


console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email:"user@gmail.com",
    upi:"upi@ybl"
}

let userTwo = userOne // pass by reference

userTwo.email = "hitesh@google.com"

console.log(userOne);
console.log(userTwo);

