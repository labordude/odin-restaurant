/* 
div.content>item>h2+img.menu-image+p.description;

          <div class="items" id="items">
            <div class="item-card">
              <div class="text-box">
                <h2 class="cookie">Title</h2>
                <img class="image-cookie">Author</img>
                <p class="pages">description</p>
                <p class="read">price per dozen</p>
              </div>
            </div>
            </div>
 */
import cookies from "./cookies.json";
import { makeDiv } from "./home.js";
function cookieMonster() {
  const content = document.getElementById("content");
  content.textContent = "";
  const items = makeDiv("items");
  cookies.forEach((cookie) => {
    let itemCard = makeDiv("item-card");
    let textBox = makeDiv("text-box");
    let h2 = document.createElement("h2");
    h2.classList.add("title");
    h2.textContent = cookie.Item;
    let image = document.createElement("img");
    image.classList.add("image-cookie");
    image.src = `${cookie.ImageLocation}`;
    let desc = document.createElement("p");
    desc.textContent = cookie.Description;
    let price = document.createElement("p");
    price.textContent = cookie["Price per dozen"];
    textBox.appendChild(h2);
    textBox.appendChild(image);
    textBox.appendChild(desc);
    textBox.appendChild(price);
    itemCard.appendChild(textBox);
    itemCard.appendChild(items);
  });
  content.appendChild(items);
}
export { cookieMonster };
