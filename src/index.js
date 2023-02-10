import "./style.css";
import setHome from "./loadpage";
import breads from "./page1";
import croissants from "./page2";
import pastries from "./page3";

const body = document.querySelector("body");
const content = document.querySelector("#content");

const home = document.createElement("button");
const breadList = document.createElement("button");
const croissantList = document.createElement("button");
const pastryList = document.createElement("button");

const menu = document.createElement("div");

// Show on loadup
setHome();

// Arm all buttons
home.addEventListener("click", setHome);
breadList.addEventListener("click", breads);
croissantList.addEventListener("click", croissants);
pastryList.addEventListener("click", pastries);

// Set text content for each button
home.textContent = "HOME";
breadList.textContent = "BREADS";
croissantList.textContent = "CROISSANTS";
pastryList.textContent = "PASTRIES";

// All buttons can look the same
home.className =
  breadList.className =
  croissantList.className =
  pastryList.className =
    "button";

// Add buttons to body

menu.className = "menu";

menu.appendChild(home);
menu.appendChild(breadList);
menu.appendChild(croissantList);
menu.appendChild(pastryList);

body.insertBefore(menu, content);

// content.appendChild(header);
// content.appendChild(copy);
