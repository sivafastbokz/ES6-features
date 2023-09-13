// ES6 features 
// Default parameters
// Before ES6
function ES5(num1, num2){
    return num1+num2;
}
console.log(ES5(1,5))
console.log(ES5(1))//returns NaN as num2 is undefined
// With ES6
function ES6(item1, item2=10){
    return item1+item2;
}
console.log(ES6(5,5))
console.log(ES6(5))//returns 15 as item2 has default value = 10

// Template literals (Template strings)
// Before ES6
const myName = 'siva'
const role = 'full stack developer'
console.log('myname is '+myName+' and my role is '+role)
// With ES6
console.log(`myname is ${myName} and my role is ${role}`)

// Multi-line Strings
// Before ES6
var poemData = 'Johny Johny Yes Papa,\n'     
             + 'Eating sugar?  No, papa!\n'
             + 'Telling lies? No, papa!\n'
             + 'Open your mouth Ah, ah, ah!'
console.log(poemData)
 // With ES6  
 let poemData2 = `Johny Johny Yes Papa,     
Eating sugar?  No, papa!
Telling lies? No, papa!
Open your mouth Ah, ah, ah!`
console.log(poemData2)               
                
// Destructuring assignment
// Destructuring an array
let array = ['john','carter']
let firstName,lastName;
[firstName,lastName]=array
console.log(firstName,lastName)
// Destructuring an object
let obj={
    Fname:'tony',
    Lname:'stark'
}
let Fname,Lname
({Fname,Lname}=obj)
console.log(Fname,Lname)

// Arrow function expressions
// Ordinary function
function getName(firstName,lastName){
   return firstName+lastName
}
console.log(getName('bruse',' banner'))
// Arrow function
const getTheName = ((firstName,lastName)=>`${firstName} ${lastName}`)
console.log(getTheName('Nick','fury'))

// Spread Rest
function addItem(...item3){
       return item3
}
console.log(addItem('one','two','three','four','five'))
// Define a destructuring array with two regular variables and one rest variable:
const [fiName, laName, ...otherInfo] = [
    "Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male"
];

console.log(otherInfo); 
  
// Define a destructuring object with two regular variables and one rest variable:
const { firsName, lasName, ...anotherInfo } = {
    firstName: "Oluwatobi",
    lastName: "Sofela", 
    companyName: "CodeSweetly",
    profession: "Web Developer",
    gender: "Male"
}

console.log(anotherInfo);

// Rest
const number =['one','two','three']
const number2 =[...number,'four','five']
console.log(number2)
const studentName = 'steve Rorgers'
console.log([...studentName])

const numbers = [1, 3, 5, 7];

function addNumbers(a, b, c, d) {
  return a + b + c + d;
}

console.log(addNumbers(...numbers));
const myName2 = { firstName: "Oluwatobi", lastName: "Sofela" };
const bio = { ...myName2, website: "codesweetly.com" };

console.log(bio);