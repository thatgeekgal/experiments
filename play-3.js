const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
}

// const printName = (personData) => {
//     console.log(personData.name);
// }

// destructing
const printName = ({ name }) => {
    console.log(name);
}

printName(person);

// object destructing (drop properties we don't need)
const { name, age } = person;
console.log(name, age);

const copiedPerson = {...person};
console.log(copiedPerson);

// array destruncting (drop elements we don't need)
const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

// for (let hobby of hobbies) {
//     console.log(hobby);
// }

// tranform each value and give a new array
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);

// hobbies.push('Programming');
// console.log(hobbies);

// copy the entire array and create a new one
// const copiedArray = hobbies.slice();
const copiedArray = [...hobbies];
console.log(copiedArray);

// rest operators
const toArray = (...args) => {
    return args;
}
console.log(toArray(1, 2, 3));