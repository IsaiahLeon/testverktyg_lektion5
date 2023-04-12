console.log('Hello World!');

// Variables
let greeting = 'Hej från en variabel';
console.log(greeting);
// Redefine
greeting = 3;
console.log(greeting);

//constnstuff

greeting = 'Hello';
const PI = 3.1415;

// Printing
console.log(greeting + ' PI is: ' + PI);

// Interpolation and templating
console.log(`${greeting}, PI is: ${PI}`);

// Be careful with floats
console.log(0.1 + 0.2);

// Equality
console.log(1 == 1); //true
console.log(1 == '1'); //true (will convert to same type as above)
console.log(1 === '1'); //false

// Loose typing and conversion
let myNumber = 5;
console.log(typeof myNumber);
console.log(myNumber + 5);

myNumber = '5';
console.log(myNumber)
console.log(typeof myNumber);
console.log(myNumber + 5); // 55

/* control flows */
// if
let myAge = 32;

if(myAge >= 40) {
    console.log('You are getting old!');
} else {
    console.log('You are still young!');
}

//camelCase - praxis in JS functions, vars
//PascalCase - classes
//snake_case - often not used

// Ternary operation - boolean statement ? true : false
myAge === 32 ?
    console.log('32') :
    console.log('not 32');

// Loops
//for
for(let i = 0; i < 5; i++) {
    console.log(i);
}

let persons = [
    'Isaiah',
    'Lana',
    'Joshua'

];

//log entire array
console.log(persons);

//length of array
console.log(persons.length);

//Get the first person
console.log(persons[0]);

//Get the last person
console.log(persons[persons.length - 1]);

//Get a slice of the array
let newPersons = persons.slice(0, 3); //first 2
console.log(newPersons);

//Add to start of array
persons.unshift('Throttle');

//Add to end of array
persons.push('Sonic');

console.log(persons);

//Remove from start of array
persons.shift();
console.log(persons);

//Remove from end of array
persons.pop();
console.log(persons);

//loop over arrays
for(let person of persons) {
    console.log(person);
}

//older loop that still works
/* for(let i = 0; i < persons.length, i++) {
    console.log(persons[i]);
} */

// Lambda loop
persons.forEach(x => console.log(x));

// Objects
let isaiah = {
    firstName: 'Isaiah',
    lastName: 'Leon',
    age: '32',
    hobby: 'Music'
};

console.log(isaiah);

console.log(`First name: ${isaiah.firstName}`);

let isaiahStr = `${isaiah.firstName} ${isaiah.lastName}, age: ${isaiah.age}`;
console.log(isaiahStr);

let isaiahAdvanced = {
    firstName: 'Isaiah',
    lastName: 'Leon',
    age: 32,
    hobbies: ['music', 'film', 'hockey', 'lakes']
};

console.log(isaiahAdvanced); // object
console.log(JSON.stringify(isaiahAdvanced)); // JSON

//Loop over object
for(let propertyName in isaiahAdvanced) {
    let propertyValue = isaiahAdvanced[propertyName];
    console.log(propertyName, propertyValue);
}

// Loop through object and array inside of object (kolla Mike's kod/överkurs)


// Connection to HTML
// ask JS to create a new element
let myDiv = document.createElement('div');
// add some HTML
myDiv.innerHTML = `
    <h1>Hello from JS!</h1>
    <p>This text is from JavaScript, my age is ${isaiah.age}</p>
    `;

    //Grab the body tag
    let body = document.querySelector('body');

    //add the div to the HTML
    body.append(myDiv);

    // Another way to add data
    let myBands = [
        {
            name: 'The Beatles',
            genre: 'Pop'
        },
        {
            name: 'The Rolling Stones',
            genre: 'Rock'
        }
    ];

    // Grab the bands div
    let bandsDiv = document.querySelector('#bands');
    for(let band of myBands) {
        bandsDiv.innerHTML += `
            <div class="band">
                <h2>${band.name}</h2>
                <p>Genre: ${band.genre}</p>
            </div>
            `;
    }

    // Functions
    function sayHello() {
        console.log('Hello');
    }

    const sayHello2 = () => {
        console.log('Hello 2');
    
    }

    sayHello();
    sayHello2();

    // Different ways of declaring the same function: 1. funtion declaration 2. arrow function 3. function expression

    function add(a, b) {
        return a + b;
    }

    const add2 = (a, b) => {
        return a + b;
    }

    const add3 = function(a, b) {
        return a + b;
    }

    //4. arrow function with implicit return
    const add4 = (a, b) => a + b;

    //5. arrow function with implicit return and one parameter
    const add5 = a => a + 5;

    console.log(add(1, 2));
    console.log(add2(1, 2));
    console.log(add3(1, 2));
    console.log(add4(1, 2));
    console.log(add5(1, 2));

    class Person {
        constructor(name, age, hobby) {
            this.name = name;
            this.age = age;
            this.hobby = hobby;
        }

        greetings() {
            console.log(`Hi, my name is ${this.name} and I am ${this.age}`);
            console.log(`I enjoy: ` + this.hobby);
        }
       
    
    }

    const isaiahClass = new Person('Isaiah', 32, 'Music');
    isaiahClass.greetings();