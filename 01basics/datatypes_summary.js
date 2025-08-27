/* Primitive

7 types: String, Number, Boolean, null, Undefined, Symbol, BigInt

Reference (
Non Primitive)

Array, Objects, functions
*/

const score = 100.90
console.log(score);
console.log(typeof score);

const isLoggedIn = false
console.log(typeof (isLoggedIn));

// bigInt -> repersent as "n"
const bigNumber = 2345678987654n
console.log(typeof bigNumber);

// symbol datatypes
const id = Symbol('123')
console.log(typeof id);


//reference (Non Primitive)

//Array, Objects, Functions

const NumArray = ["shaktiman", "naagraj", "doga" ] //array defined 

let myObject = {
    name : "rajnish",
    age: 22,
}


let raj;
console.log(typeof raj); // undefined


const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof myFunction);

console.log(typeof NumArray );

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive),Heap(Non Permititve)

let muYoutubeaname = "rajnishsinghdotcom"

let anothername =  muYoutubeaname
anothername  = "chaiaurcode"


console.log(muYoutubeaname);
console.log(anothername);

let userone = {
    email: "user@google.com",
    upi: "user@ybl"
}

let usertwo = userone
usertwo.email = "rajnishsingh@123.com"

console.log(userone.email);
console.log(usertwo.email);








