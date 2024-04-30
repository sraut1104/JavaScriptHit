
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
 
    console.log(number1 + number2);
}
// Ex1addTwoNumbers(); //NaN will print
// Ex1addTwoNumbers(3, 4); // 3 & 4 == arguments and // 7 will print
// Ex1addTwoNumbers(3, '4');  // 34
// Ex1addTwoNumbers(3, 'a');  // 3a
// Ex1addTwoNumbers(3, null);  // 3
 
const res = Ex1addTwoNumbers(3, 5); //By this Ex1addTwoNumbers(3, 5); 8 will print
console.log("Result: ", res); // as Ex1addTwoNumbers() function returns nothing that's why 'undefined' will store res constant

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));