import "./style.css";
import setHome from "./loadpage";
import breads from "./page1";
import croissants from "./page2";
import pastries from "./page3";

const home = document.createElement("button");
const breadList = document.createElement("button");
const croissantList = document.createElement("button");
const pastryList = document.createElement("button");
// const container = document.createElement('div')

home.addEventListener("click", setHome);
breadList.addEventListener("click", breads);
croissantList.addEventListener("click", croissants);
pastryList.addEventListener("click", pastries);

// const content = document.querySelector('#content')
const body = document.querySelector("body");

home.textContent = "HOME";
home.style.padding = "10px";

breadList.textContent = "BREADS";
breadList.style.padding = "10px";

croissantList.textContent = "CROISSANTS";
croissantList.style.padding = "10px";

pastryList.textContent = "PASTRIES";
pastryList.style.padding = "10px";

body.appendChild(home);
body.appendChild(breadList);
body.appendChild(croissantList);
body.appendChild(pastryList);
