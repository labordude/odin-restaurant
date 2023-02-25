import cakes from "./cakes.json";
import { makeDiv } from "./home.js";
function letThemEatCake() {
  const content = document.getElementById("content");
  content.textContent = "";
  const items = makeDiv("items");
  cakes.forEach((cake) => {
    let itemCard = makeDiv("item-card");
    let textBox = makeDiv("text-box");
    let h2 = document.createElement("h2");
    h2.classList.add("title");
    h2.textContent = cake.Item;
    let image = document.createElement("img");
    image.classList.add("image-cake");
    image.src = `${cake.ImageLocation}`;
    let desc = document.createElement("p");
    desc.classList.add("description-text");
    desc.textContent = cake.Description;
    let price = document.createElement("p");
    price.classList.add("price-text");
    price.textContent = cake["Price per cake"];
    textBox.appendChild(h2);
    textBox.appendChild(image);
    textBox.appendChild(desc);
    textBox.appendChild(price);
    itemCard.appendChild(textBox);
    items.appendChild(itemCard);
  });
  content.appendChild(items);
}
export { letThemEatCake };
