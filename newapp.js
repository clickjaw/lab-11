"use strict;"

let allProducts = [];
let productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];
let maxClicks = 25;
let totalClicks = 0;

//this creates individual variables out of the array
function Product(name, path){
    this.name = name;
    this.path = path;
    this.timesClicked = 0;
    this.timesShown = 0;
    allProducts.push(this);
}

//this function assigns the path name to each element in the array 
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

//pulling elements from html
let imageContainer = document.getElementById('image-container');
let resultsButton = document.getElementById('results-button');
let resultsContainer = document.getElementById('results');
let button = document.getElementById('button_container');

let img1 = document.getElementById("image_shower");
let img2 = document.getElementById("image_shower2");
let img3 = document.getElementById("image_shower3");

let imgArray = [img1, img2, img3];

//creating a function to track the total amount of clicks.
function trackClicks(product){
    if(totalClicks < maxClicks){
        product.timesClicked++;
    }
}
// this is the randomizing function for the pictures
function randomImage(image){
    let randomMath = Math.floor(Math.random() * allProducts.length);
    let selectedImage = allProducts[randomMath];

    image.src = selectedImage.path;
    image.alt = selectedImage.name;
    selectedImage.timesShown++;

    image.addEventListener('click', trackClicks(selectedImage));
}


//creating a function to show a random image for every img in html
function showImage(){
    for (let i=0; i <imgArray.length; i++){
        randomImage(imgArray[i]);
    }
}
//limiter
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
//this incorrectly displays the results fromm voting
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
//adds function to my button
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

//this is a chart that doesn't work
let canvas = document.getElementById('canvas');
    const ctx = document.getElementById('chart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: productNames,
            datasets: [{
                label: 'Times Clicked',
                data: timesClickedArray,
                backgroundColor: [
                    '#CC0000',
                    '#FF9999',
                    '#FF8000',
                    'FFB266',
                    '#CCCC00',
                    '#FFFFCC',
                    '#193300',
                    '#66CC00',
                    '#FFE5CC',
                    '#E5FFCC',
                    '#CCFFCC',
                    '#CCFFFF',
                    '#CCCCFF',
                    '#E5CCFF',
                    '#FFCCE5',
                    '#9999FF',
                    '#99FF33',
                    '#66B2FF',
                    '#660000'
                ],
                borderColor: [
                    '#CC0000',
                    '#FF9999',
                    '#FF8000',
                    'FFB266',
                    '#CCCC00',
                    '#FFFFCC',
                    '#193300',
                    '#66CC00',
                    '#FFE5CC',
                    '#E5FFCC',
                    '#CCFFCC',
                    '#CCFFFF',
                    '#CCCCFF',
                    '#E5CCFF',
                    '#FFCCE5',
                    '#9999FF',
                    '#99FF33',
                    '#66B2FF',
                    '#660000'
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

//this is my assumption for putting data into my localStorage. Didn't work.
for (let i = 0; i <allProducts.length; i++){
    let productLocal = JSON.stringify(allProducts[i]);
// localStorage.setItem(key,value);
localStorage.setItem(`Product${i}`, allProducts[i].name)
}