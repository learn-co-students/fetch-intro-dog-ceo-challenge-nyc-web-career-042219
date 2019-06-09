console.log('%c HI', 'color: firebrick')


    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    function fetchDogs(){
        fetch(imgUrl)
        .then(res => res.json())
        .then(json => {
            
            console.log('response from api:',json.message)
// ^ fetched json data from api 
// now create element to insert response
            json.message.forEach(dogImage => {
                let imageElement = document.createElement('img')
                imageElement.src = dogImage
//append newly created element to the DOM
                document.querySelector('#dog-image-container').appendChild(imageElement)
            
            })

            

        })
    }

    function fetchBreeds(filter=undefined){
        let container = document.querySelector('#dog-breeds')
        container.innerHTML = ''
        fetch(breedUrl)
            .then(res => res.json())
            .then(json => {
                console.log('fetchBreed response:',json.message)
                //fetch all breeds from api as json data 

                for(breed in json.message) {
                    if(!filter || breed.startsWith(filter)){
                    let breedElement = document.createElement('li')
                    breedElement.innerText = breed 
                    container.appendChild(breedElement)
                    breedElement.addEventListener('click',handleChangeColor)
                    }
                }
            })
    }

    function handleChangeColor(event){
        event.target.style.color = 'blue'
    }

    function handleDropDown(event){
        fetchBreeds(event.target.value)
    }
    document.querySelector('#breed-dropdown').addEventListener('change',handleDropDown)
    fetchDogs()
    fetchBreeds()