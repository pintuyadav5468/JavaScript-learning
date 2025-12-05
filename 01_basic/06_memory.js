// stack and heap memory types 
// In stack primitive datatypes  gets copy 
// In heap non primitive datatypes stores  gets referance 


let myYoutubeName = "pintuyadav5468";

let anotherName = myYoutubeName 
anotherName = "roy5468"

console.log(myYoutubeName);

console.log(anotherName);

let userOne ={
    email : "roy@gmail.com",
    upi:"roy@sbi"
}

let userTwo = userOne; 
userTwo.email =  "roy@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);


