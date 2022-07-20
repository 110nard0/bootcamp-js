//1) forEach accepts a callback function. Calls the function once per element in the array
//Used to be more popular before for...in syntax

const nums = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

nums.forEach(function (n) {
    console.log(n - 1)
})

nums.forEach(function (en) {
    if (en % 2 === 1) {
        console.log(en + 1)
    }
})

//The forEach array method automatically executes its callback function
const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`)
})


//2) The map method creates a new array with the result of its callback function
movies.map(function (movie) {
    console.log(`I recommend ${movie.title} for our movie night!`)
})

const recommendations = movies.map(function (movie) {
    return movie.title.toLowerCase();
})

//Using with arrow functions
const newMovies = movies.map(movie => (
    ` ${movie.title} - ${movie.score / 10}`
))

console.log(`New movie list =${newMovies}`);


//3) The filter method creates a new array based on the returned value of a boolean expression
//Any item that is true makes it into this new array and false items are screened out. The original array is unchanged.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let fiveToFifteen = numbers.filter(n => {
    return n > 5 && n < 15
})
console.log(fiveToFifteen)

const movieList = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

const badMovies = movieList.filter(m => m.score < 70)
const recentMovies = movieList.filter(m => m.year > 2000)

// const goodMovies = movieList.filter(m => m.score > 80)
// const goodTitles = goodMovies.map(m => m.title)

//This reduces the above two expressions into one line: 1. filters movies with scores > 80 then, 2. maps movie titles, into a new array
movies.filter(m => m.score > 80).map(m => m.title);


//4) The every method evaluates the callback function and returns a boolean value depending on the outcome
//true if every item satisfies the condition and false if x >= 1 item fails the condition 
const exams = [80, 73, 89, 92, 75, 98, 66, 84, 91, 77];

exams.every(score => score > 80);

movieList.every(movie => movie.year > 2015);


//5) The some method is similar but only needs one item to satisfy the condition in order to return true.
//It only returns false when no itemv in an array evaluates as truthy

exams.some(score => score < 80);

movieList.some(movie => movie.year > 2015);


//6) The reduce method executes a 'reducer' function on each element of an array, resulting in a single end return value
//It does this by starting with an initial value, executing said function over every item and returning a result after every iteration

const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

prices.reduce((total, price) => total + price);

const maxPrice = prices.reduce((max, price) => {
    if (price > max) {
        return price;
    } return max;
})

const highestRated = movieList.reduce((bestMovie, currentMovie) => {
    if (bestMovie.score < currentMovie) {
        return currentMovie;
    } return bestMovie;
})

// We can provide an initial value as the 2nd argument to reduce:
const evens = [2, 4, 6, 8];
evens.reduce((sum, num) => sum + num) //20
evens.reduce((sum, num) => sum + num, 80) //100