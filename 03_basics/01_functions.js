
// Function Defination
function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("D");
    console.log("I");
    console.log("P");
}

///Function Execution
// sayMyName()  /// where sayMyName == referance and () == Execution


function Ex1addTwoNumbers(number1, number2){ // Here number1 & number2 == parameters
 
    // console.log(number1 + number2);
}
// Ex1addTwoNumbers(); //NaN will print
// Ex1addTwoNumbers(3, 4); // 3 & 4 == arguments and // 7 will print
// Ex1addTwoNumbers(3, '4');  // 34
// Ex1addTwoNumbers(3, 'a');  // 3a
// Ex1addTwoNumbers(3, null);  // 3
 
const res = Ex1addTwoNumbers(3, 5); //By this Ex1addTwoNumbers(3, 5); 8 will print
// console.log("Result: ", res); // as Ex1addTwoNumbers() function returns nothing that's why 'undefined' will store res constant

// How to get the valu of res
function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
    console.log("sUDIP"); //    It will not execute , as it appears after return statement.
}

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result); //Result:  8




function loginUserMessage(username){
    console.log("Entered logintUserMassage function ⤵");
    console.log(`Type of username is ${typeof username}`);
    if(!username){ // "" or empty String and undefined == 'false'. So !false == true
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Sudip Ji"))
/* OUTPUT:  Entered logintUserMassage function ⤵
            Type of username is string
            Sudip Ji just logged in */

// console.log(loginUserMessage("")) 
/* OUTPUT:  Entered logintUserMassage function ⤵
            Type of username is string
            PLease enter a username
            undefined */

            
// console.log(loginUserMessage())
/* OUTPUT:  Entered logintUserMassage function ⤵
            Type of username is undefined
            PLease enter a username
            undefined */



function logoutUserMessage(username = "sam"){ //Here "sam" is default value i.e. if-block will never execute
    console.log("Entered logoutUserMassage ⤵");
    console.log(`Type fo username is ${typeof username}`);
    if(!username){
        console.log("PLease enter a Uusername");
        return
    }
    return `${username} just logged out`
}
// console.log(logoutUserMessage("sudip the Bosss"))
/* OUTPUT:  Entered logoutUserMassage ⤵
            Type fo username is string
            sudip the Bosss just logged out */

// console.log(logoutUserMessage()); 
/* OUTPUT:  Entered logoutUserMassage ⤵
            Type fo username is string
            sam just logged out */

// console.log(logoutUserMessage("")) 
/* OUTPUT:  Entered logoutUserMassage ⤵
            Type fo username is string
            PLease enter a Uusername
            undefined */


//+++++++++++++++++++++++++++++++++++++++++++++++    Part-2    ++++++++++++++++++++++++++++++++++++++++++++++++++++

// Problem
function calculateCartPriceDemo1(num1){ //It always accept single value
    console.log("Entered calculateCartPriceDemo1 function ⤵");
    return num1
}
// console.log(`Demo-1 Prce = ${calculateCartPriceDemo1(200, 400, 500, 2000)}`)
/* OUTPUT:  Entered calculateCartPriceDemo1 function ⤵
            Demo-1 Prce = 200 
*/

// How to pass multiple values in function
function calculateCartPriceDemo2(...num1){ // Here ... is called rest operator or spread operator depending upon the usecase. But here ... == is called rest operator
    console.log("Entered calculateCartPriceDemo2 function ⤵");
    console.log("Demo-2 Prices are in below ⤵");
    return num1
} 
// console.log(calculateCartPriceDemo2(200, 400, 500, 2000))
/* OUTPUT:  Entered calculateCartPriceDemo2 function ⤵
            Demo-2 Prices are in below ⤵
            [ 200, 400, 500, 2000 ]     */
            

// How to pass multiple values in function
function calculateCartPriceDemo3(val1, val2, ...num1){ // val1=200, val2=400 & ...num1= [500, 2000]
    console.log("Entered calculateCartPriceDemo3 function ⤵");
    console.log("Demo-3 Prices are in below ⤵");
    return num1
} 
// console.log(calculateCartPriceDemo3(200, 400, 500, 2000))
/* OUTPUT:  Entered calculateCartPriceDemo3 function ⤵
            Demo-3 Prices are in below ⤵
            [ 500, 2000 ]     */

function calculateCartPriceDemo4(val1, val2, ...num1){ 
    console.log("Entered calculateCartPriceDemo3 function ⤵");
    console.log(`val1 = ${val1} and Type of val1 = ${typeof val1}`);
    console.log(`val2 = ${val2} and Type of val1 = ${typeof val1}`);
    console.log(`Type of num1 = ${typeof num1}`);
    console.log("num1 ⤵");
    return num1
} 
// console.log(calculateCartPriceDemo4(200, 400, 500, 2000))
/* OUTPUT:  Entered calculateCartPriceDemo3 function ⤵
            val1 = 200 and Type of val1 = number
            val2 = 400 and Type of val1 = number
            Type of num1 = object
            num1 ⤵
            [ 500, 2000 ]    */


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// How to pass an object to a function
const user = {
    username: "Sudip",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user) 
// OUTPUT: Username is Sudip and price is undefined 
//Undefined has come as in handleObject() defination we want access the 'price' key but in use object 'prices' key is present

// Direct passsing the object definaation 
// handleObject({
//     username: "sam",
//     price: 399
// }) 
//OUTPUT: Username is sam and price is 399

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// How to pass an array to a function
const myNewArray = [200, 400, 100, 600]

function returnSecondValueFromArray(getArray){
    return getArray[1]
}

// console.log(returnSecondValueFromArray(myNewArray)); //OUTPUT: 400

// Direct passsing the array
// console.log(returnSecondValueFromArray([200, 400, 500, 1000])); //OUTPUT: 400