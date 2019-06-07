console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

let dogContainer = document.querySelector("#dog-image-container")
let dogBreedsContainer = document.querySelector("#dog-breeds")
let filter = document.querySelector("#breed-dropdown");
let allBreeds = [];

const dogPics = fetch(imgUrl)
	.then(function(response){
		return response.json();
	})
	.then(json => {
		displayDogs(json["message"])
	});

function displayDogs(dogs){
	let dogHTML = dogs.map(dog => {
		return `<img src="${dog}" >`
	}).join()
	dogContainer.innerHTML = dogHTML;
}

const breeds = fetch(breedUrl)
	.then(function(response){
		return response.json()
	})
	.then(json => {
		displayBreeds(json["message"]);
	})

dogBreedsContainer.addEventListener("click", function(e){
	e.target.style.color = "green"
})

function displayBreeds(breeds){
	// console.log(Object.keys(breeds))
	let breedsArray = Object.keys(breeds).map(breed => {
		allBreeds.push(breed);
		return  `<li class="breed"> ${breed} </li>`
	});
	
	dogBreedsContainer.innerHTML = breedsArray.join("");
}



filter.addEventListener("change", function(e){
	e.preventDefault()
	// console.log(filter.value)
	searchFilter(filter.value);

})

function searchFilter(value){
	let breeds = document.querySelectorAll(".breed");
	breeds.forEach(breed => breed.remove());
	for (var thing of allBreeds){
		if (thing[0] === value){
			dogBreedsContainer.innerHTML += `
			<li class="breed">${thing}</li>
			`
		}
	}
}







