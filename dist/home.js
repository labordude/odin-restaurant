import menu from "./tabmenu.json";
import comments from "./comments.json";

function makeDiv(className) {
  let div = document.createElement("div");
  div.classList.add(className);
  return div;
}
function createLogo() {
  const logo = makeDiv("logo");
  const imageHolder = makeDiv("image-holder");
  const logoImage = document.createElement("img");
  logoImage.classList.add("logo-image");
  logoImage.src = "./assets/logo.png";
  const logoText = makeDiv("logo-text");
  logoText.textContent = "Crumby Daze Cookies";

  // add logo image to div
  imageHolder.appendChild(logoImage);
  // add divs to main container
  logo.appendChild(imageHolder);
  logo.appendChild(logoText);
  return logo;
}
function createTabs() {
  const container = document.getElementById("container");
  console.log(container);
  const tabs = makeDiv("tabs");
  container.append(tabs);
  tabs.id = "tabs";
  tabs.appendChild(createLogo());
  for (let i = 1; i <= 4; i++) {
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
    let label = document.createElement("label");
    label.htmlFor = `${item.For}`;

    label.role = "button";
    const icon = document.createElement("i");
    icon.classList.add(`${item["icon-main"]}`);
    icon.classList.add(`${item["icon-sub"]}`);
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

  const slider = makeDiv("slider");
  const indicator = makeDiv("indicator");

  slider.appendChild(indicator);
  tabs.appendChild(slider);

  const content = makeDiv("content");
  content.id = "content";
  tabs.appendChild(content);

  // // document.getElementById("content").textContent = "hello";
  // const section = document.createElement("section");
  // tabs.appendChild(section);
  // comments.forEach((comment) => {
  //   let para = document.createElement("p");
  //   para.textContent = `${comment.Review}`;
  //   section.appendChild(para);
  // });
}
function createHome() {
  const content = document.getElementById("content");
  content.textContent = "";
  const section = document.createElement("section");
  content.appendChild(section);
  comments.forEach((comment) => {
    let para = document.createElement("p");
    para.textContent = `${comment.Review}`;
    section.appendChild(para);
  });
}

function createLayout() {
  createTabs();
  createHome();

  // createHome();
}

export { createLayout, makeDiv, createHome };
