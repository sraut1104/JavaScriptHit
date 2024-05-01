
let a = 10
const b = 20
var c = 30
// console.log(a); // OUTPUT: 10
// console.log(b); // OUTPUT: 20
// console.log(c);  // OUTPUT: 30

/* As all the variable works fine properly, so why let and const has introduced.var was sufficient.But var doesn't work according to block-scope */
// { } == This is scope in allmost all the programming language when it comes with functon, if-else and loop.But when it comes with object, then it is nort a scope, then it is object-declartion


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
if(true){
    let d = 10
    const e = 20
    var f = 30
}
// console.log(d); // OUTPUT: ReferenceError: d is not defined. 
// console.log(e); // OUTPUT: ReferenceError: e is not defined
// console.log(f);  // OUTPUT: 30    == which is the big problem, as f should not be accessed outside the if-block


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
var i = 300 //Global Scope
if(true){
    // Inside the curly braces is => Local Scope
    // Anything in Global Scope can be accessible in Local scope. 
    // But whatever declared in Local scope should not accessible outside the local scope.
    let g = 10
    const h = 20
    var i = 30 // i = 30
}
// console.log(g); // OUTPUT: ReferenceError: g is not defined. 
// console.log(h); // OUTPUT: ReferenceError: h is not defined
// console.log(i);  // OUTPUT: 30    == which is the big problem, as i=300 is in Global Scope.So here OUTPUT should be 300.But the scope of var is local as well as Global Scope.  


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
let j = 300 // Here j is in Global Scope. So it's value is totally independent from the value of j of below if-block 
if (true) {
    let j = 10
    // console.log("INNER j: ", j); // OUTPUT: INNER j:  10
}
// console.log("OUTER j: ", j); // OUTPUT: OUTER j: 300


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// NOTE:   Global Scope in the console of browser is diffferent from Global scope in code environment example which is executed through node




// ++++++++++++++++++++++++++++++++++++++++++++++++++  Part-2  +++++++++++++++++++++++++++++++++++++++++++++++++
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~    (Nested Scope)  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function one(){
    const username = "sudip"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); //ReferenceError: website is not defined. as website has declared inside Two()

    two()
}
// one()


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
if (true) {
    const username = "sudip"
    if (username === "sudip") {
        const website = " youtube"
        // console.log(username + website);    //OUTPUT: sudip youtube
    }
    // console.log(website); //ReferenceError: website is not defined
}
// console.log(username); //ReferenceError: username is not defined



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~   interesting   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function addOne(num){
    return num + 1
}
addOne(5)



// In JS variable is most powerful, as it can hold anything like json value, function etc.
const addTwo = function(num){ //This is an expression
        return num + 2
}
addTwo(5)  



// console.log(addThree(5)); //OUTPUT: 6
function addThree(num){
    return num + 1
}


addFour(5)  //ReferenceError: Cannot access 'addFour' before initialization
const addFour = function(num){ 
    return num + 2
}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// console.log("This line is before calling of addThreee() ⤵");
// console.log(addThreee(5)); //OUTPUT: 6
// console.log("After calling of addThreee() and below portion is the defination of addThreee() ⤵");
// function addThreee(num){
//     console.log("Entered to the adddThreee() ⤵");
//     console.log("End of the addThreee() and this is before return statement ⤵");
//     return num + 1
// }
// console.log("Line immidiate after the defination of addThreee() and this is outside of addThreee()");

/* OUTPUT:  This line is before calling of addThreee() ⤵
            Entered to the adddThreee() ⤵
            End of the addThreee() and this is before return statement ⤵
            6
            After calling of addThreee() and below portion is the defination of addThreee() ⤵
            Line immidiate after the defination of addThreee() and this is outside of addThreee() 

*/



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~     How to execute line by line code in JAVA SCRIPT     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // console.log("Below portion is the defination of onee() ⤵");
    // function onee(){
    //     console.log("Entered in the onee() ⤵");
    //     const username = "sudip"
    
    //     console.log("Below portion is the defination of twoo() ⤵");
    //     function twoo(){
    //         console.log("Entered in the twoo() ⤵");
    //         const website = "youtube"
    //         console.log(username);
    //         console.log("End of the twoo() ⤵");
    //     }
    //     // console.log(website); //ReferenceError: website is not defined. as website has declared inside Two()
    
    //     console.log("Outside of twoo() in the last stage of onee() and below line calling of onee() ⤵");
    //     twoo()
    //     console.log("End of the onee() ⤵");
    // }
    // console.log("Outside of onee() and below line calling of onee() ⤵");
    // onee()
    // console.log("This line is after the calling of onee() i.e. this line will execute when onee() will be executed");
    
    /* OUTPUT:  Below portion is the defination of onee() ⤵
                Outside of onee() and below line calling of onee() ⤵
                Entered in the onee() ⤵
                Below portion is the defination of twoo() ⤵
                Outside of twoo() in the last stage of onee() and below line calling of onee() ⤵
                Entered in the twoo() ⤵
                sudip
                End of the twoo() ⤵
                End of the onee() ⤵
                This line is after the calling of onee() i.e. this line will execute when onee() will be executed 
    */