import menu from "./tabmenu.json";
import comments from "./comments.json";
function createLogo() {
  const logo = document.createElement("div").classList.add("logo");
  const imageHolder = document
    .createElement("div")
    .classList.add("image-holder");
  const logoImage = document.createElement("img").classList.add("logo-img");
  logoImage.src = "./assets/logo.png";
  const logoText = document.createElement("div").classList.add("logo-text");
  logoText.textContent = "Crumby Daze Cookies";

  // add logo image to div
  imageHolder.appendChild(logoImage);
  // add divs to main container
  logo.appendChild(imageHolder);
  logo.appendChild(logoText);
  return logo;
}
function createTabs() {
  createLogo();
  const tabs = document.createElement("div").classList.add("tabs");
  tabs.appendChild(logo);
  for (i = 1; i <= 4; i++) {
    let input = document.createElement("input");
    input.type = "radio";
    input.id = `tab${i}`;
    input.name = "tab-control";
    tabs.appendChild(input);
  }
  document.getElementById("tab1").checked = true;
  // creating the menu list
  const ul = document.createElement("ul");
  // use the json menu file to create the buttons
  menu.forEach((item) => {
    const li = document.createElement("li");
    li.title = `${item.Title}`;
    const label = document.createElement("label");
    label.for = `${item.For}`;
    label.role = "button";
    const icon = document.createElement("i").classList.add(`${item.icon}`);
    const br = document.createElement("br");
    const span = document.createElement("span");
    span.textContent = `${item.Title}`;
    label.appendChild(icon);
    label.appendChild(br);
    label.appendChild(span);
    li.appendChild(label);
    ul.appendChild(li);
  });
  tabs.appendChild(ul);

  const slider = document.createElement("div").classList.add("slider");
  const indicator = document.createElement("div").classList.add("indicator");
  slider.appendChild(indicator);
  tabs.appendChild(slider);

  const content = document.createElement("div").classList.add("content");
  tabs.appendChild(content);
}
function createHome() {
  document.getElementsByClassName("content").textContent = "";
  const section = document.createElement("section");
  comments.forEach((comment) => {
    let para = document.createElement("p");
    para.textContent = `${comment.Review}`;
    section.appendChild(para);
  });
}
function createLayout() {
  const container = document.getElementsByClassName("container");
  createTabs();
  createHome();
}

export default createLayout;
