//NOTE:  for of and for each are array specific loops

// ["", "", ""]  ///array containing Strings
// [{}, {}, {}]  /// array containg objects


// =========================================== for of loop ================================================
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Applying for of in Array ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}
/* OUTPUT:  1
            2
            3
            4
            5
 
*/

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}
/* OUTPUT:  Each char is H
            Each char is e
            Each char is l
            Each char is l
            Each char is o
            Each char is
            Each char is w
            Each char is o
            Each char is r
            Each char is l
            Each char is d
            Each char is !
*/



// ================================================= Maps =====================================================
/* NOTE-1:- The Map object holds key-value pairs(like object) and remembers the original insertion order of the keys(unlike object, i.e. object doesn't remember the original insertion order of the keys). Any value (both objects and primitive values) may be used as either a key or a value. */
/* NOTE-2:- What's the uniqueness about Map?
Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection.*/ 

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") ///Uniqueness i.e. It will not print again

// console.log(map);
/* OUTPUT:  
    Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}   */


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Aplying for of loop in Map ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
for (const key of map) {
    // console.log(key);  
}
/* OUTPUT:  
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ]   */

/// Destructuring the above OUTPUT array
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}
/* OUTPUT:  
IN :- India
USA :- United States of America
Fr :- France  */


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Applying for of loop in OBJECT ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
/* OUTPUT:  
for (const [key, value] of myObject) {
                           ^

TypeError: myObject is not iterable */



// for (const key of myObject) {
//     console.log(key);
    
// }
/* OUTPUT:  
for (const key of myObject) {
                  ^

TypeError: myObject is not iterable */


/// NOTE:- for of loop is not working for OBJECT
