/* Object declaration ka do tarikhe hai- 
    1. literal ka tarah
    2. constructor ki tarah  */

/* singleton 
- object ko jab 'literal' ki tarah declaration katrte hai, tab 'singleton' nhi banta    
- object ko jab 'constructor' ki tarah declaration katrte hai, tab 'singleton' nhi banta     */

// Object.create //One of the method by which we can create object

// object literals

// Defining a Symbol
const mySym = Symbol("key1")


const JsUser = {
    // Behind the scene, all keys are treated as String
    name: "Sudip",
    "full name": "Sudip Raut",
    [mySym]: "mykey1", //Adding 'symbol' as 'key'
    age: 18,
    location: "Kolkata",
    email: "sudip@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// Accessing values of anObject 

// 1st Method
// console.log(JsUser.email)

// 2nd Method
// console.log(JsUser["email"])
// console.log(JsUser["full name"])

// console.log(JsUser[mySym])

// Changing the values of anObject 
// JsUser.email = "sudip@chatgpt.com"

// Locking or freezing of an object
// Object.freeze(JsUser)
// JsUser.email = "sudip@microsoft.com" // This change will not propagate after freezing object
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting());
console.log(JsUser.greeting); // Here function will not print, it will return back
// console.log(JsUser.greetingTwo());