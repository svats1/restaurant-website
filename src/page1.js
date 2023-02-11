// import { header, page, container, item1, item2, item3 } from "./pageItems";
import { header, page, container, Item } from "./pageItems";
// const path = require("path");

export default function breads() {
  page.innerHTML = "";

  header.textContent = "Breads!";

  // "/Users/svats/repos/restaurant-website/media/country-loaf.jpeg",

  const item1 = new Item(
    "/Users/svats/repos/restaurant-website/media/country-loaf.jpeg",
    "country loaf",
    "your average bread"
  );
  const item2 = new Item(
    "/Users/svats/repos/restaurant-website/media/milk-toast.jpeg",
    "milk toast",
    "kiddie bread"
  );
  const item3 = new Item(
    "/Users/svats/repos/restaurant-website/media/sourdough.jpeg",
    "sourdough",
    "real bread"
  );

  page.appendChild(header);
  page.appendChild(container);

  content.appendChild(page);
}
