"use strict";

// this array holds all of our product objects
let allProducts = [];
let maxClicks = 25;
let totalClicks = 0;
// this array holds all our product names
let productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

// ./assets.

// for every asset in assett length print name

// Create a constructor function 
// that creates an object associated with each product, and has the following properties:

function Product(name, path) {

    this.timesShown = 0;
    this.timesClicked = 0;
    this.name = name;
    this.path = path;
    allProducts.push(this);

}
// an algorithm is a step by step list of instructions to be executed
// Create an algorithm that will randomly generate three unique product images from the images directory and display 
// them side-by-side-by-side in the browser window.

function getRandomImage() {
    // below gives me a whole number
    for (let i = 0; i < productNames.length; i++){
    Math.floor(Math.random() * productNames.length)

    }
}

// get elements from HTML
const imageContainer = document.getElementById('image-container');
const resultContainer = document.getElementById('results');
const buttonResults = document.getElementById('result-button');
let imgOne = document.querySelector('#image-container img:first-child');
let imgTwo = document.querySelector('#image-container img:nth-child(2)');
let imgThree = document.querySelector('#image-container img:nth-child(3)');

let bag = new Product('bag', './assets/bag.jpg');
// let bag0 = new Product(productNames[0], + './assets' + productNames[0] + '.jpg') for later
let banana = new Product('banana', './assets/banana.jpg');

let bathroom = new Product(productNames[2], './assets/' + productNames[2] + '.jpg');


// make a function to add attributes src and alt


function constructImages() {

    // image for every name in ProductName[]
    // for (let i = 0; i < productNames.length; i++){
    //     // get both images from HTML
    //

    let bag = new Product('bag', './assets/bag.jpg');
    // let bag0 = new Product(productNames[0], + './assets' + productNames[0] + '.jpg') for later
    let banana = new Product('banana', './assets/banana.jpg');


    // get both images from html
    let imgOne = document.querySelector('#image-container img:first-child');
    let imgTwo = document.querySelector('#image-container img:nth-child(2)');

    //  add source attribute to the images and the alt title
    imgOne.setAttribute('src', bag.path);
    imgTwo.setAttribute('src', banana.path);
    imgThree.setAttribute('src', bathroom.path);
    imgOne.setAttribute('alt', bag.name);
    imgTwo.setAttribute('alt', banana.name);
    imgThree.setAttribute('alt', bathroom.name);

    imgOne.addEventListener('click', function () {
        trackClicks(bag)
    });
    imgTwo.addEventListener('click', function () {
        trackClicks(banana)
    });
    imgThree.addEventListener('click', function(){
        trackClicks(bathroom)
    })

    timesShown(bag);
    timesShown(banana);
    timesShown(bathroom);


    // image for every name in ProductName[]
    // for (let i = 0; i < productNames.length; i++){
    //     // get both images from HTML
    //
}


// make a function that randomizes images
function getRandomImage() {
    // a random index
    let random_index = Math.floor(Math.random() * productNames.length);
    let selectImage = productNames[random_index]
    document.getElementById('image_shower').src = `./assets/${selectImage}`
    random_index = Math.floor(Math.random() * productNames.length);
    selectImage = productNames[random_index]
    document.getElementById('image_shower2').src = `./assets/${selectImage}`
    random_index = Math.floor(Math.random() * productNames.length);
    selectImage = productNames[random_index]
    document.getElementById('image_shower3').src = `./assets/${selectImage}`
}

// make a function to keep track of the times an obj is clicked.


function trackClicks(product) {

    if (product.timesClicked < 25) {
        product.timesClicked++;
        totalClicks++;
        console.log(product.timesClicked);
    } else {
        alert("You have entered to many clicks");

    }
}

// make a function that keeps track of hiw many times an image was shows

function timesShown(product) {
    // check if the image is here
    if (product.name === imgOne.alt) {
        console.log(product.name + " is on the page.");
        product.timesShown++;
        console.log(product.timesShown);
    } else if (product.name === imgTwo.alt) {
        console.log(product.name + " is on the page.");
        product.timesShown++;
        console.log(product.timesShown);

    }else if(product.name ===imgThree.alt){
        console.log(product.name + " is on the page.");
        product.timeShown++;
        console.log(product.timeShown);
    } 
    else {
        console.log("there is no image here");
    }
}

// make a function that displays the results on the results div
function displayResults(productsArray) {

    // unordered list
    console.log(productsArray)
    for (let i = 0; i < productsArray.length; i++) {
        let product = productsArray[i];
        // console.log(product);
        let resultMessage =
            `
        this product was clicked ${product.timesClicked} times.
        this product was shown ${product.timesShown} times.
        this is product is called ${product.name}
        you can find this product at ${product.path}.`
        resultContainer.textContent = resultMessage;
    }
}

function showResults(){
    // see if the max clicks are met
    if (totalClicks < 25){
        displayResults()
    }

}

// add event listeners
buttonResults.addEventListener('click', showResults)
constructImages();
displayResults(allProducts);
// timesShown();

