import { header, page } from "./pageItems";
const content = document.querySelector("#content");

const copy = document.createElement("div");
copy.className = "copy";

export default function setHome() {
  page.innerHTML = "";
  header.textContent = "A Bakery!???!! wow";
  copy.textContent =
    "This bakery is an inviting and cozy environment where customers can enjoy a variety of freshly-baked breads, pastries, and other delicious treats. With a range of tempting options, such as croissants, éclairs, macarons, tarts, and more, there’s something for everyone. All of the products are crafted with the highest quality ingredients, and the inviting atmosphere and attentive service make it the perfect place to grab a quick bite or linger over a cup of coffee.";

  page.appendChild(header);
  page.appendChild(copy);

  content.appendChild(page);
}
