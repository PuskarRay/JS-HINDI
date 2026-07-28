//Dates - is a object

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2023, 0, 23) // Months starts from 0
console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2023, 0, 23 , 5 , 3) 
console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("01-14-2023")
console.log(myCreatedDate2.toLocaleString());


////*************Timestamp */

let myTimeStamp = Date.now()
console.log(myTimeStamp); // Gives values in miliseconds
console.log(myCreatedDate2.getTime())
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday:"long",

})

console.log(newDate);
