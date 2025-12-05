let value = 3 
let negvalue = -value 

console.log(negvalue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(5%2);  // remainder

console.log(2**3); // exponentiation 2*2*2      

// +=, -=, *=, /=, %=, **=

let st1 = "Hello "
let st2 = "World"

let st3 = st1 + st2
console.log(st3);

st3 += "!!!"
console.log(st3);

console.log( 1 + 2);
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");

// + operator is used for both addition and concatenation
console.log( "Hello " + 5);         
console.log( "Hello " + true);      
console.log( "Hello " + null);
console.log( "Hello " + undefined); 
console.log( "Hello " + {});
console.log( "Hello " + []);
console.log( "Hello " + function(){} );
console.log( "Hello " + Symbol("id") );  // TypeError
// Symbol cannot be converted to string         
console.log( "Hello " + NaN );      
// NaN is converted to string "NaN"
console.log( "Hello " + -0 );
console.log( "Hello " + Infinity );
console.log( "Hello " + -Infinity );
// -0, Infinity, -Infinity are converted to string "-0", "Infinity", "-Infinity"
console.log( "Hello " + BigInt(123) );
// BigInt is converted to string "123"
// Other than + operator, all other arithmetic operators are only for mathematical operations
console.log( "5" - 2);
console.log( "5" * 2);
console.log( "5" / 2);
console.log( "5" % 2);
console.log( "5" ** 2);

// In above cases, string operands are converted to numbers for mathematical operations

// 01_basic/03_conversion.js
// let score = 33
// let score = "33abc"
let score = null        

let num1 , num2, num3;
num1 = num2 = num3 =  2 + 2; 

let gameCounter = 100;
gameCounter += 1;
console.log(gameCounter);





