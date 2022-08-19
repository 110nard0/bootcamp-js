// # ways exist of making calls to api endpoints:
//1. XML HTTP REQUESTS AKA XHR... old, sad, tired
// const req = new XMLHttpRequest();

// req.onload = function () {
// 	console.log("ALL DONE WITH REQUEST!!!")
// 	const data = JSON.parse(this.responseText);
// 	console.log(data.ticker.price);
// }

// req.onerror = function () {
// 	console.log("ERROR!!!")
// 	console.log(this);
// }

// req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd')
// req.send();



//2. FETCH API
// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log("RESPONSE, WAITING TO PARSE...", res)
//         return res.json()
//     })
//     .then(data => {
//         console.log("DATA PARSED...")
//         console.log(data.ticker.price)
//     })
//     .catch(e => {
//         console.log("OH NO! ERROR!", e)
//     })


// const fetchBitcoinPrice = async () => {
// 	try {
// 		const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
// 		const data = await res.json();
// 		console.log(data.ticker.price)
// 	} catch (e) {
// 		console.log("SOMETHING WENT WRONG!!!", e)
// 	}
// }

// fetchBitcoinPrice();



//3. AXIOS LIBRARY
// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
// 	.then(res => {
// 		console.log(res.data.ticker.price)
// 	})
// 	.catch(err => {
// 		console.log("ERROR!", err)
// 	})

const fetchdadJoke = async () => {
	try {
		const res = await axios.get('https://icanhazdadjoke.com')
		console.log(res)
	} catch (err) {
		console.log("ERROR", err)
	}
}


const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
	const jokeText = await getDadJoke();
	const newJoke = document.createElement('li');
	newJoke.append(jokeText);
	jokes.append(newJoke);
}

const getDadJoke = async () => {
	try {
		const config = { headers: { Accept: 'application/json' } };
		const res = await axios.get('https://icanhazdadjoke.com/', config);
		return res.data.joke
	} catch (e) {
		return "NO JOKES AVAILABLE. SORRY! :("
	}
}

button.addEventListener('click', addNewJoke)
