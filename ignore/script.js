
// endpoints

// returns the address/ img of the recently sold houses
const R_k = ""

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': `${R_k}`,
		'X-RapidAPI-Host': 'zillow-com1.p.rapidapi.com'
	}
};

// Returns 3 houses that were recently sold
// Each house has the address, img
// These houses represent the neighbors
fetch('https://zillow-com1.p.rapidapi.com/propertyExtendedSearch?location=houston%2C%20Tx&page=1&status_type=RecentlySold&home_type=Houses&sort=Homes_for_You', options)
	.then(response => response.json())
	.then(response => {
		// console.log(response);
		for(var i =0;i < 3;i++) {
			console.log("neighbors houses " + response.props[i].address)
			console.log( "neighbors images " + response.props[i]["imgSrc"])
		}
	})
.catch(err => console.error(err));

// Returns 3 houses that are on sale
// Each house has the address, img, price
fetch('https://zillow-com1.p.rapidapi.com/propertyExtendedSearch?location=houston%20tx&page=1&status_type=ForSale&home_type=Houses&sort=Homes_for_You', options)
	.then(response => response.json())
	.then(response => {
		console.log("===============================");
		for(var i =0;i < 3;i++) {
			console.log("address " + response.props[i].address)
			console.log("imgSrc " + response.props[i]["imgSrc"])
			console.log("price " +response.props[i]["price"])
		}
	})
	.catch(err => console.error(err));


// the user will only see the houses on sale
// they get recommended a house based on the house being sold, the neighbors will be tied to sold listings

