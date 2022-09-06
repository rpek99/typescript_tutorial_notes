
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

const circ = (diameter: number) => {
    return diameter * Math.PI;
}

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

let mixed  = ['ryu', 4, 'pek', 70];

mixed.push('black');
mixed.push(5);
mixed[0] = 4;

//******************** OBJECTS **********************//
let ninja = {
    name: 'rpek',
    belt: 'black',
    age: 20
}

ninja.age = 23;
ninja.name = 'rustem';
// ninja.age = '10';
// ninja.skills = ['fighting'];

ninja = {
    name: "rpek",
    belt: "red",
    age: 18,
    // skills: ['fighting']
}

//******************** EXPILICIT TYPES *****************//
let phase: string;
let num: number;
let isLoggedIn: boolean;

//arrays
let ninjas: string[] = [];
ninjas = [ 'rpek', 'erdem', 'stone' ];

//union types
let mixedArr: (string|number|boolean)[] = [];
mixedArr = [10, 'ashley', true];

let uid: string|number;
uid = 10;
uid = "rpek";

//objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 20 };

let ninjaTwo: {
    name: string,
    age: number,
    beltColour: string
}

ninjaTwo = {
    name: "rustem",
    age: 23,
    beltColour: "black"
}

//******************** any TYPES *******************//
let anyVariable: any = 25;

anyVariable = true;
anyVariable = "hello";
anyVariable = { name: "rpek" }

let anyList: any[] = [];

anyList.push(5);
anyList.push("stone");
anyList.push(false);

let ninjaObject: { name: any, age: any };

ninjaObject = {
    name: "rpek",
    age: "20"
}

//***************** FUNCTIONS BASICS *********************//

const add = (a: number, b: number, c: number | string = 10) => {
    console.log(a + b);
    console.log(c);    
}

add(5, 20); //25

const minus = (a: number, b: number): number => {
    return a - b;
}

let result = minus(10, 5);

console.log(typeof(result)); //number

//******************** TYPE ALIAS *******************/

type stringOrNum = string | number;
type objWithName = { name: string, uid: stringOrNum}


const logDetails = (uid: stringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const greet = (user: {name: string, uid: string | number}) => {
    console.log(`${user.name} says hello`);
}

const greetAgain = (user: objWithName) => {
    console.log(`${user.name} says hello`);
}

//************** FUNCTION SIGNATURES ****************/

let ninj: (a: string, b: string) => void;

ninj = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if(action) {
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
}

type logObj = {name: string, age: number};

let funcWithObjParam: (obj: logObj) => void;

funcWithObjParam = (ninja: logObj) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
}


//****************** INTERFACES ********************/
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: 'Shaun',
    age: 25,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log('Spent ', amount);
        return amount;
    }
};

const greetPerson = (person: IsPerson) => {
    console.log('His name is: ', person.name);
}

greetPerson(me);


//******************* GENERICS **********************/
const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne  = addUID({name: 'yoshi', age: 20});
// let docTwo  = addUID({age: 20}); // gives an error

// with interfaces
interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
}

const docThree: Resource<object> = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'rpek' }
}

const docFour: Resource<string[]> = {
    uid: 2,
    resourceName: 'gameList',
    data: [ 'CoD' ]
}


//******************* ENUMS **********************/
enum DocumentsType {
    BOOK,
    AUTHOR,
    FILM,
    DIRECTOR,
    PERSON
}

interface Documents<T> {
   uid: number;
   documentType: DocumentsType;
   data: T;
}

const documentOne: Documents<object> = {
   uid: 1,
   documentType: DocumentsType.BOOK,
   data: { title: '1984'}
}

const docTwo: Documents<object> = {
   uid: 2,
   documentType: DocumentsType.AUTHOR,
   data: { name: "George Orwell" }
}


//******************* TUPLES **********************/
let tup: [string, number, boolean] = ['ryu', 20, true];
tup[0] = 'rpek';
tup[1] = 23;

let student: [string, number];
student = ['sos', 10];
//student = [23254, 'dfdf']; // gives an error