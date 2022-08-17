// setTimeout(() => {
// 	document.body.style.backgroundColor = 'red';
// 	setTimeout(() => {
// 		document.body.style.backgroundColor = 'orange'
// 		setTimeout(() => {
// 			document.body.style.backgroundColor = 'yellow'
// 			setTimeout(() => {
// 				document.body.style.backgroundColor = 'green'
// 				setTimeout(() => {
// 					document.body.style.backgroundColor = 'blue'
// 					setTimeout(() => {
// 						document.body.style.backgroundColor = 'indigo'
// 						setTimeout(() => {
// 							document.body.style.backgroundColor = 'violet'
// 						}
// 							, 1000)
// 					}
// 						, 1000)
// 				}
// 					, 1000)
// 			}
// 				, 1000)
// 		}
// 			, 1000)
// 	}
// 		, 1000)
// }, 1000)


//same as commented out code above
const delayedColorChange = (newColor, delay, doNext) => {
	setTimeout(() => {
		document.body.style.backgroundColor = newColor
		doNext && doNext();
	}, delay)
}

//calls back functions as arguments
delayedColorChange('red', 1000, () => {
	delayedColorChange('orange', 1000, () => {
		delayedColorChange('yellow', 1000, () => {
			delayedColorChange('green', 1000, () => {
				delayedColorChange('blue', 1000, () => {
					delayedColorChange('indigo', 1000, () => {
						delayedColorChange('violet', 1000, () => {

						})
					})
				})
			})
		})
	})
});


//common practical application of callback functions used to collect data from an API
searchMoviesAPI('lionheart', () => {
	saveToMYDB(movies, () => {
		//if save to database works, run this:
	}, () => {
		//if it doesn't work, run this:
	})
}, () => {
	//if APi is down, or request failed, run this
})









