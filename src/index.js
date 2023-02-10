import "./style.css";
import "./loadpage";
import breads from "./page1";

const breadList = document.createElement("button");
const croissantList = document.createElement("button");
const pastryList = document.createElement("button");
// const container = document.createElement('div')

breadList.addEventListener("click", breads);

// const content = document.querySelector('#content')
const body = document.querySelector("body");

breadList.textContent = "BREADS";
breadList.style.padding = "10px";

croissantList.textContent = "CROISSANTS";
croissantList.style.padding = "10px";

pastryList.textContent = "PASTRIES";
pastryList.style.padding = "10px";

body.appendChild(breadList);
