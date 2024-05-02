// +++++++++++++++++++++++++++++++++++  Immediately Invoked Function Expressions (IIFE)  +++++++++++++++++++++++++++++++++++++++++++
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~   Normal Function Ddefination and Call ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function normalChai(){
    console.log(`normal DB CONNECTED one`);
}

normalChai();


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/* NOTE: Synatx of IIFE
()() == Here Function Defination will occur in beteen 1st Paranthesis and 2nd Paranthesis is Functon Execution  
*/
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


(function masalaChai(){
    // named IIFE
    console.log(`masala DB CONNECTED Two`);
})();  // Semicolon(;) is necessary. To understand Go through below concept




// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~    How to Write Two IIFE One by One  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//To see error Comment all the code expect below two immediately invoke functtion code

// (function masalaaChai(){
//     // named IIFE
//     console.log(`masalaa DB CONNECTED Three`);
// })()

// (function masalaAurChai(){ // TypeError: (intermediate value)(...) is not a function
//     // named IIFE
//     console.log(`masalaAur DB CONNECTED Four`);
// })()

/* NOTE: 
-- To write 'two IIFE one by one', we have to end 1st IIFE by applying semicolon(;), after that we have to write 2nd IIFE
-- Though Immediately Invoked Function invokes immidiately, but it doesn't know in which context it has to stop.That's why in this case we have to end this by explicitly using  semi-colon(;) i.e. jS will not add it automatically */



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/* NOTE: 
-- IIFE is that whic invokes immediately
-- and To avoid 'Global Scope Pollution' we use IIFE
*/
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


( () => {
    // Unnammed-IIFE
    console.log(`DB CONNECTED Five`);
} )();


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  Hot to Pass Parameter to IIFE   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

( (name) => {
    // Unnammed-IIFE
    console.log(`DB CONNECTED Six ${name}`);
} )('sudip')

