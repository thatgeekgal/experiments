// object (this is gloabl scope, this.name outputs undefined)
// const person = {
//     name: 'Max',
//     age: 29,
//     greet: () => {
//         console.log('Hi, I am ' + this.name);
//     }
// }

// option 1. old function syntax
// const person = {
//     name: 'Max',
//     age: 29,
//     greet: function() {
//         console.log('Hi, I am ' + this.name);
//     }
// }

// option 2. use a new syntax (recommended)
const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
}

// console.log(person);
person.greet();