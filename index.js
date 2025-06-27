

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
