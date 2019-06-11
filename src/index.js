const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"
const dogImage = document.getElementById("dog-image-container")
const breedList = document.getElementById("dog-breeds")
const dropDown = document.querySelector("#breed-dropdown")

fetch(imgUrl)
    .then(res => res.json())
    .then(data => data.message.map(url => dogImage.innerHTML += `<img src=${url} height="300" width="400"><br>`))

fetch(breedUrl)
    .then(res => res.json())
    .then(data => data.message)
    .then(breed => {
        for (let key in breed){
            if (breed[key].length === 0){
                breedList.innerHTML += `<li>${key}</li>`
            } else {
                breed[key].forEach(type => {
                    breedList.innerHTML += `<li>${type} ${key}</li>`
                })
            }
        }

    })
    
breedList.addEventListener('click', (event) => {
    event.target.style.color = "red";
})

// dropDown.addEventListener('change', (event) => {
//     let domStr = ''
//     const array = Array.from(breedList.children)
//     array.forEach(breed => {
//         if (breed.innerText.startsWith(event.target.value)) {
//             domStr += `<li>${breed.innerHTML}</li>`
//         }  
//     })
//     breedList.innerHTML = domStr
// })


dropDown.addEventListener('change', (event) => {
    let breedArray = Array.from(breedList.children)
    for (let i = 0; i < breedArray.length; i++){
        if (breedArray[i].innerText[0] === event.target.value) {
            breedArray[i].style.display = 'list-item'
        } else {
            breedArray[i].style.display = 'none'
        }
    }
})