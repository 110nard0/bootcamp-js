//(0) This tests if a number variable, y is a square of x
function square(x, y) {
    if (x * x === y) { return true }
    else return false
}

square();


// (1) This demonstrates lexical scope, where a variable declared in the
// outer function, heroNeeded is recognized in the inner function callForHelp

function heroNeeded(heroName) {
    let comicHouse = prompt('DC or Marvel?');
    function callForHelp() {
        let dcHeroes = ['Batman', 'Superman', 'WonderWoman'];
        let marvelHeroes = ['Spiderman', 'Wolverine', 'IronMan'];

        if (comicHouse === 'dc') {
            for (let hero of dcHeroes) {
                console.log(`Help me, ${hero}!`)
            }
        } else if (comicHouse === 'marvel') {
            for (let hero of marvelHeroes) {
                console.log(`Help me, ${hero}!`)
            }
        }
    }

    callForHelp();
}

heroNeeded();


//(2) This demonstrates the same output by calling the function callForHelp
//into another function heroNeeded

//Define function using Function Declaration
// function heroNeeded(heroName) {
//     heroName();
// }

// // Define function using Function Expression
// let callForHelp = function() {
//     let comicHouse = prompt('DC or Marvel?');

//     let dcHeroes = ['Batman', 'Superman', 'WonderWoman'];
//     let marvelHeroes = ['Spiderman', 'Wolverine', 'IronMan'];

//     if (comicHouse === 'dc') {
//         for (let hero of dcHeroes) {
//             console.log(`Help me, ${hero}!`)
//         }
//     } else if (comicHouse === 'marvel') {
//         for (let hero of marvelHeroes) {
//             console.log(`Help me, ${hero}!`)
//         }
//     }
// }

// heroNeeded(callForHelp);
// 


//(3) Here, we return a function as the result of a function:

//This tests whether a number variable, num, is between the range: min to max
function factoryFunc(min, max) {
    return function isBetween(num) {
        return num >= min && num <= max;
    }
}

factoryFunc();

//The returned function is passed into a variable e.g:
const isChild = factoryFunc(0, 18);
const isAdult = factoryFunc(19, 64);
const isSenior = factoryFunc(65, 120);

console.log(isChild(20)); //false
console.log(isAdult(75)); //false
console.log(isSenior(111)); //true


//(4) Arrow functions are a more compact syntax method of function expression
const expo = (x, y) => {
    return x ** y;
}

//i. They can use no parentheses for params if there is a single argument: 
const square2 = num => {
    return num * num;
}

//ii. Arrow functions can be defined without parameters:
const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1
}

//iii. Use parentheses in place of curly braces to perform an implicit return
//This only works when there is a single expression to be evaluated and returned

const rollDice = () => (
    Math.floor(Math.random() * 6) + 1
)

//iv. Discard parentheses to make a one-line code statement with implicit return
//This is their most compact form

const add = (a, b) => a + b;

//v. Keyword 'this' in arrow functions refers to the value of 'this' when the function is created
//Hence, it shows undefned when alertName() is called because its scope is window but it works in shoutName() because its scope is fullName()
const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    alertName: () => {
        alert(`${this.firstName} ${this.lastName}`)
    },
    shoutName: function () {
        setTimeout(() => {
            console.log(this);
            console.log(this.fullName())
        }, 3000)
    }
}
