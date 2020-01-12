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



// Arrow Functions Lexical 'this'

// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }

}

box5.clickMe(); 

// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => {
            const str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }

}

box6.clickMe(); 

// ES6
const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        const self = this;
        document.querySelector('.green').addEventListener('click', () => {
            const str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }

}

box66.clickMe(); 


function Person(name) {
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends) {
    var array = friends.map(function(element) {
        return this.name + ' is friends with ' + element;
    }.bind(this))

    console.log(array);
}

var friends5 = ['Jane', 'Bob', 'Mark'];

new Person('John').myFriends5(friends5);


// ES6
Person.prototype.myFriends6 = function(friends) {

    const array = friends.map((element) => `${this.name} is friends with ${element}`)

    console.log(array);
}

const friends6 = ['Jane', 'Bob', 'Mark'];

new Person('Mike').myFriends6(friends6);
