// How to do singleton an object or how to define an object with the help of constructor
// const tinderUser = new Object() //Singleton Object
const tinderUser = {} //Non-Singleton Object

// Adding keys and values to the object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",

    // Object inside object
    fullname: {

        // Object inside object inside object
        userfullname: {
            firstname: "sudip",
            lastname: "raut"
        }
    }
}
// Accesing values of Object inside object inside object
// console.log(regularUser.fullname.userfullname.firstname); //sudip
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj7 = {5: "e", 6: "f"}

const obj3 = { obj1, obj2 }  // Same array wali problem will occur 
// console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }


const obj4 = Object.assign(obj1, obj2) // Target: obj1 & Source: obj2 
// console.log(obj4); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj5 = Object.assign({}, obj1, obj2) // But for extra confirmation, Target: {} or Blank object & Source: obj1, obj2
// console.log(obj5); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj6 = Object.assign({}, obj1, obj2, obj7) //  Target: {} or Blank object & Source: obj1, obj2, obj7
// console.log(obj6); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const obj8 = {...obj1, ...obj2} //Most Used by spread operator(...) same as array wala concept
// console.log(obj8); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// When values will come from data-base, then it is 'array of objects' 
const users = [
    {
        id: 1,
        email: "rautsudip7928@gmail.com"
    },
    {
        id: 1,
        email: "rautsudip7928@gmail.com"
    },
    {
        id: 1,
        email: "rautsudip7928@gmail.com"
    },
]
// console.log(users[1].email); //rautsudip7928@gmail.com

// console.log(tinderUser); //{ id: '123abc', name: 'Sammy', isLoggedIn: false }
// Accessing all the keys of tinderUser object in the form of array 

// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); //[ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// After looping through an object, we want to find a value and if that value is not present then there will be chance of crash.That's why we have to check that value is present or not 
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true
// console.log(tinderUser.hasOwnProperty('isLogged')); //false


// Destructuring of Object
const course = {
    coursename: "js Tuts",
    price: "999",
    courseInstructor: "sudip"
}

// Normal way to access values of object
// console.log(course.courseInstructor); // sudip 

const {coursename} = course;
const {courseInstructor: instructor} = course;

// console.log(coursename); //js Tuts
// console.log(courseInstructor); // It will give an error i.e. courseInstructor is not defined, as 'courseInstructor' has changed to 'instructor'.
// console.log(instructor); //sudip


//React Concept not JS
const navbar = ({company}) => {
}
navbar (company = "sudip bro") 



// API Concept

// API can be recevied in the form object 
// Below curly braces code is treated as is JSON and Usually keys are String in in json 
// API in Json format

// {
//     "name": "santuu",
//     "coursename": "js Tuts In detail",
//     "price": "free"
// }


// json se API call hoti hai tab milta kia hey ==> Go to tis url https://api.github.com/users/hiteshchoudhary or See 04_objects.txt


// API can also be recevied in the array format 
// API in Json format

// [
//     {},
//     {},
//     {}
// ]


// How to study the code recevied from API
// Go to this wesite    https://jsonformatter.org/
/* Example: 
    - Go to this website https://randomuser.me/     and 
    - copy url and Paste it to https://jsonformatter.org/
    - Now we can understand the code

*/
