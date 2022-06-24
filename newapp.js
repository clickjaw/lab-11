"use strict;"

let allProducts = [];
let productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];
let maxClicks = 25;
let totalClicks = 0;

function Product(name, path){
    this.name = name;
    this.path = path;
    this.timesClicked = 0;
    this.timesShown = 0;
    allProducts.push(this);
}


function createNewProduct(){
    for(let i = 0; i<productNames.length; i++){
        if (productNames[i] === 'sweep'){
            new Product(`${productNames[i]}`, `./assets/${productNames[i]}.png`);
        }else{
            new Product(`${productNames[i]}`, `./assets/${productNames[i]}.jpg`);
        }
    }
}
createNewProduct();

let imageContainer = document.getElementById('image-container');
let resultsButton = document.getElementById('results-button');
let resultsContainer = document.getElementById('results');
let button = document.getElementById('button_container');

let img1 = document.getElementById("image_shower");
let img2 = document.getElementById("image_shower2");
let img3 = document.getElementById("image_shower3");

let imgArray = [img1, img2, img3];

function trackClicks(product){
    if(totalClicks < maxClicks){
        product.timesClicked++;
    }
}

function randomImage(image){
    let randomMath = Math.floor(Math.random() * allProducts.length);
    let selectedImage = allProducts[randomMath];

    image.src = selectedImage.path;
    image.alt = selectedImage.name;
    selectedImage.timesShown++;

    image.addEventListener('click', trackClicks(selectedImage));
}



function showImage(){
    for (let i=0; i <imgArray.length; i++){
        randomImage(imgArray[i]);
    }
}

function tooManyClicks(){
    totalClicks++;
    if(totalClicks === maxClicks){
        alert('You reached the maximum clicks.')
    }
}

function showResults(){
    if(totalClicks === maxClicks){
        displayResults(allProducts);
    }
}

function displayResults(productsArray){
    for(let i = 0; i < productsArray.length; i++){
        let product = productsArray[i];
        let resultMessage = `
        ${product.name} was clicked ${product.timesClicked} times.
        ${product.name} was shown ${product.timesShown} times.
        `;
        let resultsP = document.createElement('p');
        resultsContainer.append(resultsP);
        resultsP.textContent = resultMessage;
    }
}

showImage();

imageContainer.addEventListener('click', function(){
    for (let i = 0; i < imgArray.length; i++){
        randomImage(imgArray[i]);
    };
    tooManyClicks();
})

img1.addEventListener('clicks', trackClicks);
img2.addEventListener('clicks', trackClicks);
img3.addEventListener('clicks', trackClicks);
resultsButton.addEventListener('click', showResults);


// const button = document.getElementById('button_container');

// button.addEventListener('click', function onClick(event) {
//   // 👇️ change background color
//   document.body.style.backgroundColor = "black";
//   document.body.style.color = "yellow";


  // 👇️ optionally change text color
  // document.body.style.color = 'white';





// CHART CHART CHART CHART CHART CHART CHART CHART 


let canvas = document.getElementById('canvas');

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [product.timesClicked],
        datasets: [{
            label: '# of clicks',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'black',
                'black',
                'black',
                'black',
                'black',
                'black'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});




