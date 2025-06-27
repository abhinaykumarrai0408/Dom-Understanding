

// Write your code below:
const fruitShop = document.getElementById("main-heading");
const header = document.getElementById("header");
const fruiteBasket = document.getElementById("basket-heading");

fruitShop.innerHTML = "Fruit World";
fruitShop.style.color = "orange";
header.style.backgroundColor = "green";
header.style.borderBottom = "2px solid orange";
fruiteBasket.style.color = "green";

const div = document.createElement("div");
div.id = "thanks";
document.body.appendChild(div);

const thanksText = document.getElementById("thanks");
const para = document.createElement("p");
para.textContent = "Please visit us again";

thanksText.appendChild(para);



// Change the background color of the second element in the list(next question)

allElement[2].style.backgroundColor = "yellow";

for (let i = 0; i < allElement.length; i++) {
  allElement[i].style.fontWeight = "bold";
}



//getElementsByTagName (next question)
// Write your code below:
const lastItem = document.getElementsByTagName('li');

lastItem[4].style.color = "blue"

for (let i = 0; i < lastItem.length; i++){
    lastItem[i].style.fontStyle = "italic";
}




// querySelector & querySelectorAll Methods

// Write the code as shown in the video below:
const mainheading = document.querySelector('#main-heading');
mainheading.style.textAlign = "right"
mainheading.style.padding = "10px"

const allFruits = document.querySelector('.fruits ');
allFruits.style.backgroundColor = "gray";
allFruits.style.padding = "30px"
allFruits.style.margin = "30px"
allFruits.style.width = "50%"
allFruits.style.borderRadius = "5px";
allFruits.style.listStyleType = "none"


// Write answer to the questions asked below:

const fruitBasket = document.querySelector('#basket-heading');
fruitBasket.style.color = "brown"
fruitBasket.style.marginLeft = "30px"




const allItem = document.querySelectorAll('.fruit')
for (let i = 0; i < allItem.length; i++){  
    allItem[i].style.backgroundColor = "white"
    allItem[i].style.padding = "5px"
    allItem[i].style.borderRadius = "5px"
    allItem[i].style.margin = "5px"
}


const fruits = document.querySelectorAll('.fruits li');

for (let i = 0; i < fruits.length; i++) {
    if (i & 1) {
        fruits[i].style.backgroundColor = "brown"
        fruits[i].style.color = "white"
    }
}

