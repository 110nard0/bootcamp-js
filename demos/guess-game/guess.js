let maxNumber = parseInt(prompt("WELCOME! Choose a maximum number:"));
while (!maxNumber) {
    maxNumber = parseInt(prompt("WELCOME! Choose a maximum number:"));
}

const secretNumber = Math.floor(Math.random() * maxNumber) + 1;
console.log(secretNumber)

let guess = parseInt(prompt("Guess the secret number:"));
let attempts = 1;

while (parseInt(guess) !== secretNumber) {
    if (guess === "q") break;

    attempts++;
    if (guess < secretNumber) {
        guess = prompt("Too low! Try again.");
    } else if (guess > secretNumber) {
        guess = prompt("Too high! Try again.");
    }
}

if (guess === "q") {
    alert("You quit. HAHA!!");
}
alert(`You guessed it right!! It only took ${attempts} tries`);
