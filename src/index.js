import "./style.css";
import { createLayout, createHome } from "./home.js";
import { cookieMonster } from "./menu-cookies.js";
// import letThemEatCake from './menu-cakes.js';
// import keepInTouch from './contact.js';
function setEventListeners() {
  const labels = Array.from(document.querySelectorAll("label"));
  labels.forEach((label) =>
    label.addEventListener("click", (event) => {
      if (event.target.parentElement.htmlFor === "tab1") {
        createHome();
      } else if (event.target.parentElement.htmlFor === "tab2") {
        cookieMonster();
      } else if (event.target.parentElement.htmlFor === "tab3") {
        letThemEatCake();
      } else if (event.target.parentElement.htmlFor === "tab4") {
        keepInTouch();
      }
    })
  );
}
createLayout();

setEventListeners();
