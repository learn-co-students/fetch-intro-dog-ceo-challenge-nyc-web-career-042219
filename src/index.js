console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
var allBreedsArr = [];

window.addEventListener("DOMContentLoaded", (e) => {
    
    const dogContainer =document.querySelector("#dog-image-container")
    const breedContainer = document.querySelector("#dog-breeds")
    const breedSelector = document.querySelector("#breed-dropdown")
    // console.log(breedContainer)


    const dogImages = fetch(imgUrl)
    .then(response => response.json())
    .then(images => {

        displayPictures(images.message)
    })

    function displayPictures(pictureArr){
      return  dogContainer.innerHTML = pictureArr.map(pic => {
            return `<img src=${pic} ></img>`
        }).join(" ")
    }

    const dogBreeds = fetch(breedUrl)
    .then(response => response.json())
    .then(breeds => {
        allBreedsArr = Object.keys(breeds.message);
        displayBreeds(allBreedsArr)
    
    })


    function displayBreeds(arr){
        return breedContainer.innerHTML = arr.map(breed => {
            return `<li>${breed}</li>`
         } ).join(" ")

    }

    breedContainer.addEventListener('click', (e)=>{
       
        changeColors(e.target)
    })

    function changeColors(element){
       let text = element.innerText 
       element.innerHTML = `<li style = "color:#581845;"> ${text}</li>`

    }

    breedSelector.addEventListener('change', (e)=>{
       filterBreeds(e.target.value)
    })

    function filterBreeds(letter){
        let filteredBreeds = []
        filteredBreeds = allBreedsArr.filter(breed => breed.charAt(0) === letter)
        
        displayBreeds(filteredBreeds);

        
    }
})
    