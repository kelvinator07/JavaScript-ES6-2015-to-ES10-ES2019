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

// ES 6
{
    const b = 1;
    let c = 2;
}

console.log(b + c); // Not accessible because of block


