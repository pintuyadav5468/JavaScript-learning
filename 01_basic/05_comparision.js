console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);

console.log(2 == "2");
console.log(2 === "2");
console.log(2 != "2");
console.log(2 !== "2");

// Comparing different types 
console.log(2 > "1");       // true, "1" is converted to 1
console.log("01" == 1);    // true, "01" is converted to 1
console.log(false == 0);   // true, false is converted to 0
console.log(false === 0);  // false, different types

// Special cases
console.log(null > 0);     // false
console.log(null == 0);    // false
console.log(null >= 0);    // true

console.log(undefined > 0);    // false
console.log(undefined < 0);    // false
console.log(undefined == 0);   // false
console.log(undefined >= 0);  // false
console.log(undefined <= 0);  // false          
console.log(undefined === 0); // false
console.log(undefined !== 0); // true           
console.log(undefined == undefined); // true
console.log(NaN == NaN);         // false
console.log(NaN === NaN);        // false
console.log(NaN != NaN);         // true
console.log(NaN !== NaN);        // true                    
console.log(NaN > 0);           // false
console.log(NaN < 0);           // false
console.log(NaN >= 0);          // false
console.log(NaN <= 0);          // false                    
console.log(NaN + 1);           // NaN
console.log(isNaN(NaN));        // true
console.log(isNaN("hello"));    // true
console.log(isNaN(123));        // false

console.log(Number.isNaN(NaN));        // true
console.log(Number.isNaN("hello"));    // false
console.log(Number.isNaN(123));        // false             

console.log(0 === -0);      // true
console.log(0 == -0);       // true
console.log(1 / 0 === 1 / -0); // false                     
console.log(Object.is(0, -0));    // false
console.log(Object.is(NaN, NaN));  // true      
console.log(Object.is(0, 0));      // true
console.log(Object.is(-0, -0));    // true
console.log(Object.is(0, -0));     // false     
console.log(Object.is(NaN, 0 / 0)); // true
console.log(Object.is(NaN, Number.NaN)); // true
console.log(Object.is(42, 42));    // true
console.log(Object.is(42, "42"));  // false
console.log(Object.is({}, {}));    // false


//summary data types  
// 1 Primitive types: number, string, boolean, null, undefined, symbol, bigint

// refeence types or non-primitive types 
// 2 Object types: objects, arrays, functions


// 3 Special numeric values: NaN, Infinity, -Infinity, +0, -0


const score = 100;
const scoreValue = 100.3

const isloggedIn = false
const outsideTemp = null
let userEmail; // undefined

const id = Symbol('12345');
const anotherId = Symbol('12345');

console.log(id === anotherId); // false

const bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber);


//arrays , objects , functions

const heroes = ["spiderman", "ironman", "thor"]; // array

let myObj ={
            name: "pintu",
            age:22,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber);
// console.log(typeof function);


