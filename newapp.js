

let productNames = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'water-can.jpg', 'wine-glass.jpg'];


function getRandomImage(){
    // a random index
    random_index = Math.floor(Math.random() * productNames.length);
    selectImage = productNames[random_index]
    document.getElementById('image_shower').src = `./assets/${selectImage}`
    random_index = Math.floor(Math.random() * productNames.length);
    selectImage = productNames[random_index]
    document.getElementById('image_shower2').src = `./assets/${selectImage}`
    random_index = Math.floor(Math.random() * productNames.length);
    selectImage = productNames[random_index]
    document.getElementById('image_shower3').src = `./assets/${selectImage}`
}
getRandomImage();

const button = document.getElementById('button_container');

button.addEventListener('click', function onClick(event) {
  // 👇️ change background color
  document.body.style.backgroundColor = "black";
  document.body.style.color = "yellow";


  // 👇️ optionally change text color
  // document.body.style.color = 'white';
});

