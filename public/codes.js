"use strict";
//******************* TYPE BASICS ******************//
let character = 'rpek';
let age = 23;
let isTrue = true;
// character = 10;
character = 'rustem';
// age = 'pek';
age = 24;
// isTrue = "true";
isTrue = false;
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(3));
//******************* ARRAYS ***********************//
let names = ['rpek', 'stone', 'blackcloud'];
names.push('ture');
// names.push(20);
// names[0] = 10;
let numbers = [20, 30, 40];
numbers.push(50);
// numbers.push("60");
// numbers[0] = "10";
let mixed = ['ryu', 4, 'pek', 70];
mixed.push('black');
mixed.push(5);
mixed[0] = 4;
//******************** OBJECTS **********************//
let ninja = {
    name: 'rpek',
    belt: 'black',
    age: 20
};
ninja.age = 23;
ninja.name = 'rustem';
// ninja.age = '10';
// ninja.skills = ['fighting'];
ninja = {
    name: "rpek",
    belt: "red",
    age: 18,
    // skills: ['fighting']
};
//******************** EXPILICIT TYPES *****************//
let phase;
let num;
let isLoggedIn;
//arrays
let ninjas = [];
ninjas = ['rpek', 'erdem', 'stone'];
//union types
let mixedArr = [];
mixedArr = [10, 'ashley', true];
let uid;
uid = 10;
uid = "rpek";
//objects
let ninjaOne;
ninjaOne = { name: 'yoshi', age: 20 };
let ninjaTwo;
ninjaTwo = {
    name: "rustem",
    age: 23,
    beltColour: "black"
};
//******************** any TYPES *******************//
let anyVariable = 25;
anyVariable = true;
anyVariable = "hello";
anyVariable = { name: "rpek" };
let anyList = [];
anyList.push(5);
anyList.push("stone");
anyList.push(false);
let ninjaObject;
ninjaObject = {
    name: "rpek",
    age: "20"
};
//***************** FUNCTIONS BASICS *********************//
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 20); //25
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 5);
console.log(typeof (result)); //number
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greet = (user) => {
    console.log(`${user.name} says hello`);
};
const greetAgain = (user) => {
    console.log(`${user.name} says hello`);
};
//************** FUNCTION SIGNATURES ****************/
let ninj;
ninj = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
let calc;
calc = (numOne, numTwo, action) => {
    if (action) {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
let funcWithObjParam;
funcWithObjParam = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
const me = {
    name: 'Shaun',
    age: 25,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('Spent ', amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log('His name is: ', person.name);
};
greetPerson(me);
//******************* GENERICS **********************/
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 20 });
const docThree = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'rpek' }
};
const docFour = {
    uid: 2,
    resourceName: 'gameList',
    data: ['CoD']
};
//******************* ENUMS **********************/
var DocumentsType;
(function (DocumentsType) {
    DocumentsType[DocumentsType["BOOK"] = 0] = "BOOK";
    DocumentsType[DocumentsType["AUTHOR"] = 1] = "AUTHOR";
    DocumentsType[DocumentsType["FILM"] = 2] = "FILM";
    DocumentsType[DocumentsType["DIRECTOR"] = 3] = "DIRECTOR";
    DocumentsType[DocumentsType["PERSON"] = 4] = "PERSON";
})(DocumentsType || (DocumentsType = {}));
const documentOne = {
    uid: 1,
    documentType: DocumentsType.BOOK,
    data: { title: '1984' }
};
const docTwo = {
    uid: 2,
    documentType: DocumentsType.AUTHOR,
    data: { name: "George Orwell" }
};
//******************* TUPLES **********************/
let tup = ['ryu', 20, true];
tup[0] = 'rpek';
tup[1] = 23;
let student;
student = ['sos', 10];
//student = [23254, 'dfdf']; // gives an error
