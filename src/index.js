console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const imgContainer = document.querySelector('#dog-image-container')

function addDogImg(url){
    return `<img src=${imgUrl} height='200' width='300'>`
}

fetch(imgUrl) //fetch dog images
    .then(res => res.json()) //res.json() is the promise
    .then(data => { //data is the json, img URLs live under message key
        data.message.map(url =>{
            imgContainer.innerHTML += addDogImg(url)
        }).join(' ');
    })
