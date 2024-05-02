// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~    Concept of this  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const user = {
    username: "sudip",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
// user.welcomeMessage() 
/*OUTPUT:   sudip , welcome to website
            {
              username: 'sudip',
              price: 999,
              welcomeMessage: [Function: welcomeMessage]
            }
*/

// user.username = "sam"
// user.welcomeMessage() 
/*OUTPUT:   sam , welcome to website
            {
                username: 'sam',
                price: 999,
                welcomeMessage: [Function: welcomeMessage]
            } 
*/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// console.log(this); // OUTPUT:  {}
/* NOTE: In node-environment,this will refers to 'empty object or {}' buut in the browser's console this referss to the window, as in browser Golobal object is window */


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~   Concept of arrow function   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function greenChai(){
    let username = "sudip"
    console.log(this);  // See the OUTPUT by running it
    console.log(this.username); //OUTPUT: undefined
}
// greenChai()


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const masalaChai = function () {
    let username = "sudip"
    console.log(this);  // See the OUTPUT by running it
    console.log(this.username); //OUTPUT: undefined
}
// masalaChai();


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  Function in ES6 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const adrakChai =  () => { // Arrow Function
    let username = "sudip"
    console.log(this);  // OUTPUT: {} or empty object
    console.log(this.username); //OUTPUT: undefined
}
// adrakChai()


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  Pure Charcha in Arrow Function  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Syntax of Arrow Funtion: () => {}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~   Basics Structure of Arrow Function  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~   Exlicit Return Arrow Function  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const addTwoEx1 = (num1, num2) => {
    return num1 + num2
}
// console.log(addTwoEx1(3, 4)) //OUTPUT: 7

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~   Implicit Return Arrow Function  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const addTwoEx2 = (num1, num2) =>  num1 + num2
// console.log(addTwoEx2(3, 4)) //OUTPUT: 7

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/* NOTE: In Arrow Function, after fat arrow  
- If code is wrapped by curly braces, then we have to write return keyword
- But code is wrapped by paranthesis, then we don't need to write return keyword.*/

const addTwoEx3 = (num1, num2) => ( num1 + num2 )
// console.log(addTwoEx3(3, 4)) //OUTPUT: 7

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~   Benifit of Paranthesis  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const wrongReturnObject = () => {username: "hitesh"}
// console.log(wrongReturnObject()) // OUTPUT: undefined

const returnObject = () => ({username: "hitesh"})
// console.log(returnObject()) // OUTPUT: { username: 'hitesh' }


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~   Use of Arrow Functon  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach( function {})
// myArray.forEach( () => {})
// myArray.forEach( () => ())