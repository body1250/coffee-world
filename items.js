let itemName = localStorage.getItem('itemName');
let priceitem = localStorage.getItem('priceitem');
let imagesrc = localStorage.getItem('imagesrc');

let image = document.querySelector('img')
let heading = document.querySelector('h1')
let price = document.querySelector('#price')
image.src = imagesrc
heading.innerHTML = itemName
price.innerHTML = `Price : ${priceitem}`

console.log("Item Name:", itemName);
console.log("Price:", priceitem);
console.log("Image Source:", imagesrc);



// let itembody = document.querySelector("#itemsbody");

