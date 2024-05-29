// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ what is returned by the for each loop? ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const coding = ["js", "ruby", "java", "python", "cpp"]

const value1 = coding.forEach( (item) => {
    // console.log(item);
} )
/* OUTPUT:  js
            ruby
            java
            python
            cpp
*/
// console.log("Outside of for each loop");  /// OUTPUT:- Outside of for each loop
// console.log(value1);  /// OUTPUT:- undefined
/* NOTE:- from console.log(values); we have got that for each returns 'undefined'. Though we write return keyword inside the body of for each loop, then also for each will return 'undefined'. */ 


const value2 = coding.forEach( (item) => {
  // console.log(item);
  return item /// "undefined" will return
} )
/* OUTPUT:  js
            ruby
            java
            python
            cpp
*/
// console.log("Outside of for each loop");  /// OUTPUT:- Outside of for each loop
// console.log(value2);  /// OUTPUT:- undefined




// ============================================ filter() ==========================================================
/// NOTE:- in filter() if condition is true, then value will be returned
/// NOTE:- Though for each returns nothing i.e. udefined, but filter() returns the value

const myNums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums1 = myNums1.filter( (num) =>  num > 4) ///NOTE:- filter() also takes calll back function
// console.log(newNums1); ///OUTPUT:- [ 5, 6, 7, 8, 9, 10 ]



const myNums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums2 = myNums2.filter( (num) => {
   num > 4
} )
// console.log(newNums2); ///OUTPUT:- []
 /* NOTE: To returned values, after fat arrow  
- If code is wrapped by curly braces, then we have to write return keyword, as by curly braces we have started a scope
- But code is wrapped by paranthesis, then we don't need to write return keyword.*/



const myNums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums3 = myNums3.filter( (num) => {
  return num > 4
} )
// console.log(newNums3); ///OUTPUT:- [ 5, 6, 7, 8, 9, 10 ]




// ~~~~~~~~~~~~~~~~~~~~~~~~~~ How to do above example of filter by for each loop? ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const myNums4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums4 = []   /// [] == empty array

myNums4.forEach( (num) => {
    if (num > 4) {
        newNums4.push(num)
    }
} )

// console.log(newNums4); ///OUTPUT:- [ 5, 6, 7, 8, 9, 10 ]



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ More Example of filter ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks1 = books.filter( (bk) => bk.genre === 'History')
// console.log(userBooks1);
/* OUTPUT:  [
              {
                title: 'Book Three',
                genre: 'History',
                publish: 1999,
                edition: 2007
              },
              {
                title: 'Book Seven',
                genre: 'History',
                publish: 1986,
                edition: 1996
              }
            ]

*/


let userBooks2 = books.filter( (bk) => { 
  return bk.publish >= 1995;``
})
// console.log(userBooks2);
/* OUTPUT:  [
              {
                title: 'Book Three',
                genre: 'History',
                publish: 1999,
                edition: 2007
              },
              {
                title: 'Book Five',
                genre: 'Science',
                publish: 2009,
                edition: 2014
              },
              {
                title: 'Book Eight',
                genre: 'Science',
                publish: 2011,
                edition: 2016
              }
            ]

*/


let userBooks3 = books.filter( (bk) => { 
  return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks3);
/* OUTPUT:  [
              {
                title: 'Book Three',
                genre: 'History',
                publish: 1999,
                edition: 2007
              }
            ]


*/



 