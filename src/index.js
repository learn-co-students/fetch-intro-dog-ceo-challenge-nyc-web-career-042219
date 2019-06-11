console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const imgContainer = document.querySelector('#dog-image-container')
const addDogImg = (url) => `<img src=${url} height='200' width='300'>`

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const breedUl = document.querySelector('#dog-breeds')
const breedLi = breedUl.children

const dropDown = document.querySelector('#breed-dropdown')

fetch(imgUrl) //fetch dog images
    .then(res => res.json()) //res.json() is the promise
    .then(data => { //data is the json, img URLs live under message key
        data.message.map(url =>{
            imgContainer.innerHTML += addDogImg(url)
        }).join(' ');
    })

fetch(breedUrl)
    .then(res => res.json())
    .then(data => data.message)
    .then(breed => {
        for(let key in breed) {
            if(breed[key].length === 0) {
                breedUl.innerHTML += `<li>${key}</li>`;
            }else{
                breed[key].forEach(type => {
                    breedUl.innerHTML += `<li>${type} ${key}</li>`;
                })
            }
        }
    })
    
breedUl.addEventListener('click', (e) => {
    e.target.style.color = 'blue'
})

dropDown.addEventListener('change', (e) => {
    let breedsArr = Array.from(breedLi);
    let beginWith = e.target.value
    for (let i = 0; i < breedsArr.length; i ++) {
        breedsArr[i].style.display = breedsArr[i].innerText.startsWith(beginWith) ? 'list-item' : 'none';
        // if (breedsArr[i].innerText[0] === beginWith) {
        //     breedsArr[i].style.display = 'list-item';
        // } else {
        //     breedsArr[i].style.display = 'none';
        // }
    }
})

dropDown.addEventListener('change', (e) => {
    let breedsArr = Array.from(breedLi);
    let beginWith = e.target.value;
    let matchingArr = []; 
    if 
})