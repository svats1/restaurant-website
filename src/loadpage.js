import { header, page } from "./pageItems";
const content = document.querySelector("#content");

const para1 = document.createElement("p");
const para2 = document.createElement("p");
para1.className = para2.className = "copy";

export default function setHome() {
  page.innerHTML = "";
  header.textContent = "Welcome to The French Bakery!";
  para1.textContent =
    "The French bakery culture is something to be celebrated. From the croissant to the baguette, the French have perfected the art of baking bread, producing a variety of delicious pastries and breads. The French bakery is a unique experience, with the aroma of freshly baked bread and pastries filling the air. From the sweet and savory selection of quiches and tarts to the classic macaroon, the French bakery is an experience like no other, a tradition steeped in history and culture.";

  para2.textContent =
    "This bakery is an inviting and cozy environment where customers can enjoy a variety of freshly-baked breads, pastries, and other delicious treats. With a range of tempting options, such as croissants, éclairs, macarons, tarts, and more, there’s something for everyone. All of the products are crafted with the highest quality ingredients, and the inviting atmosphere and attentive service make it the perfect place to grab a quick bite or linger over a cup of coffee.";

  page.appendChild(header);
  page.appendChild(para1);
  page.appendChild(para2);

  content.appendChild(page);
}
