// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ for each loop ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){
    // console.log(val);
} )
/* OUTPUT:  js
            ruby
            java
            python
            cpp
*/

/// NOTE:- callback function has no name

coding.forEach( (item) => {
    // console.log(item);
} )
/* OUTPUT:  js
            ruby
            java
            python
            cpp
*/


function printMe(item){
    // console.log(item);
}
coding.forEach(printMe); /// Here we have to give only the reference i.e. only name i.e. printMe not execute it i.e. printMe()
/* OUTPUT:  js
            ruby
            java
            python
            cpp
*/


coding.forEach( (item, index, arr)=> {
    // console.log(item, index, arr);
} )
/* OUTPUT:  js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
            ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
            java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
            python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
            cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
*/

// ~~~~~~~~~~~~~~~~~~~~~~ Aplying for each loop in [{}, {}, {}] == array containg objects ~~~~~~~~~~~~~~~~~~~~~~

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
/* OUTPUT:  javascript
            java
            python
*/