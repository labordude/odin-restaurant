import "./style.css";
import { createLayout, createHome, keepInTouch } from "./home.js";
import { cookieMonster } from "./cookiemenu.js";
import { letThemEatCake } from "./cakemenu.js";

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
