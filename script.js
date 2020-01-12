// Let and Const

// ES5
var name5 = 'Kelvin Geek';
var age5 = 24;
name5 = 'Kelvin Leo';
console.log(name5);

// ES6 CONST
const name6 = 'Kelvin Geek';
let age6 = 24;
age6 = 44;
console.log(age6);
console.log(name6); // throws error

// ES5 block scope
function driversLicense(passedTest) {
    if (passedTest) {
        var firstName = 'Kelvin';
        var yearOfBirth = 1995;

    }

    console.log(firstName + ' born in ' + yearOfBirth + ', is now officially allowed to drive a car.'); // No error with var

}

driversLicense(true);


// ES6 block scope
function driversLicense(passedTest) {

    let firstName;
    const yearOfBirth = 1995;

    if (passedTest) {
        firstName = 'Kelvin';
    }

    console.log(firstName + ' born in ' + yearOfBirth + ', is now officially allowed to drive a car.'); // if block scope

}

driversLicense(true);



// Blocks and IIFE

// ES5
(function() {
    var a = 3;
})();

console.log(a); // Not accessible because of block

// ES6
{
    const b = 1;
    let c = 2;
}

console.log(b + c); // Not accessible because of block



// Strings format

let firstName = 'Kelvin';
let lastName = 'Geek';
const yearOfBirth = 1995;

function calcAge(year) {
    return 2016 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);


const fullName = `${firstName} ${lastName}.`;
console.log(fullName.startsWith('K')); // true
console.log(fullName.endsWith('K')); // true
console.log(fullName.includes('o')); // false
console.log(`${fullName} `.repeat(5)); // Kelvin Geek. Kelvin Geek. Kelvin Geek. Kelvin Geek. Kelvin Geek.


// ES6 Arrow Functions

const years = [1990, 1992, 1995, 1997];

// ES5 
var ages5 = years.map(function(current, index, array) {
    return 2020 - current;
});

console.log(age5);

// ES6
let ages6 = years.map(current => 2020 - current);

console.log(ages6);

ages6 = years.map((current, index, array) => `Age element ${index+1}: ${2020 - current}.`);

console.log(ages6);

ages6 = years.map((current, index, array) => {
    return 2020 - current;
});

console.log(ages6);

ages6 = years.map((current, index, array) => {
    const now = new Date().getFullYear();
    const age = now - current;
    return `Age element ${index+1}: ${age}.`;
});

console.log(ages6);