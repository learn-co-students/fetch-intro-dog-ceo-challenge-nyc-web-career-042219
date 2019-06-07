// console.log('%c HI', 'color: firebrick')
const dogImg = document.getElementById('dog-image-container');

fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(data => {
        const imageStr = data.message.map( element => {
            return element = `<img src=${element} alt='image of a dog' width='400' height='300'>`
        }).join(' ');
        dogImg.innerHTML = imageStr;
    });

const dogBreeds = document.getElementById('dog-breeds');
const breedDropDown = document.getElementById('breed-dropdown');

fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(data => {
        const keys = Object.keys(data.message);
        let str = ``;
        let num = 1;
        keys.forEach( key => {
            if (data.message[key].length === 0) {
                str += `<li id='${num}'>${key}</li>`;
                num++;
            } else {
                data.message[key].forEach( breed => {
                    str += `<li id='${num}'>${breed} ${key}</li>`
                    num++;
                });
            }
        });
        dogBreeds.innerHTML = str;
    })
    .then( () => {
        const breedsArray = [];
        dogBreeds.childNodes.forEach( node => {
            breedsArray.push(node.textContent);
        });
        breedDropDown.addEventListener('change', (e) => {
            // console.log(e.target.value); => value of select box
            let str = ``;
            let num = 1;
            breedsArray.forEach((breed) => {
                if (e.target.value === breed[0]) {
                    str += `<li class='filtered-breeds' id='${num}'>${breed}</li>`
                    num++;
                }
            });
            dogBreeds.innerHTML = str;
        });
    })
    .then( () => {
        dogBreeds.addEventListener('click', (e) =>{
            if (parseInt(e.target.id)) {
                if (e.target.style.color === 'blue') {
                    e.target.style.color = 'black';
                } else {
                    e.target.style.color = 'blue';
                }
            }
        });
    });

