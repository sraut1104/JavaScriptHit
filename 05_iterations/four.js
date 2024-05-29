// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Applying for in loop in OBJECT ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(key);
}
/* OUTPUT:  js
            cpp
            rb
            swift 
*/


for (const key in myObject) {
    // console.log(myObject[key]);
}
/* OUTPUT:  javascript
            C++
            ruby
            swift by apple 
*/


for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}
/* OUTPUT:  js shortcut is for javascript
            cpp shortcut is for C++
            rb shortcut is for ruby
            swift shortcut is for swift by apple
*/


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Applying for in loop in ARRAY ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key);
}
/* OUTPUT:  0
            1
            2
            3
            4
*/
/// NOTE:- keys for array starts from 0 to (length of array -1) 

for (const key in programming) {
    // console.log(programming[key]);
}
/* OUTPUT:  js
            rb
            py
            java
            cpp
*/


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Applying for in loop in MAP ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}

/// NOTE:- By for in loop we are unable do iteration upon Map.