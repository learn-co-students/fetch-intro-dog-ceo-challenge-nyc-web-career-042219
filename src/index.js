function fetchDogs() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(function(json) {
        renderDogs(json);
    });
}

function renderDogs(json) {
    const dogContainer = document.querySelector('#dog-image-container');
    json.message.forEach(dog => {
        const dogItem = document.createElement('img');
        dogItem.src = dog;
        dogContainer.appendChild(dogItem);
    });
}

function fetchBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(function(json) {
        renderBreeds(Object.keys(json.message));
    });
}

function renderBreeds(breedArr) {
    const breedList = document.querySelector('#dog-breeds');
    breedArr.forEach(breed => {
        const breedItem = document.createElement('li');
        breedItem.innerHTML = breed
        breedList.appendChild(breedItem);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    fetchDogs();
    fetchBreeds();

    const breedList = document.querySelector('#dog-breeds');
    breedList.addEventListener('click', function(e) {
        e.target.style.color = (e.target.style.color === 'red') ? 'black' : 'red'
    })

    const dropList = document.querySelector('#breed-dropdown');
    dropList.addEventListener('change', function(e) {
        const filter = e.target.value;
        const items = breedList.getElementsByTagName('li');

        for(let i = 0; i < items.length; i++)
            items[i].style.display = (items[i].innerHTML.charAt(0) != filter) ? 'none' : 'list-item';
    })
});