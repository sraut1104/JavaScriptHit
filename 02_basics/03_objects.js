/* Object declaration ka do tarikhe hai- 
    1. literal ka tarah
    2. constructor ki tarah  */
/* singleton 
- object ko jab 'literal' ki tarah declaration katrte, tab 'singleton' nhi banta    
- object ko jab 'constructor' ki tarah declaration katrte, tab 'singleton' nhi banta     */
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Sudip",
    "full name": "Sudip Raut",
    [mySym]: "mykey1",
    age: 18,
    location: "Kolkata",
    email: "sudip@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "sudip@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "sudip@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());