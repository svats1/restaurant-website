// import { header, page, container, item1, item2, item3 } from "./pageItems";
import { header, page, container, Item } from "./pageItems";

export default function breads() {
  page.innerHTML = "";

  header.textContent = "Breads!";

  const item1 = new Item(
    "../media/macarons.jpeg",
    "country loaf",
    "your average bread"
  );
  const item2 = new Item("picture2", "milk toast", "kiddie bread");
  const item3 = new Item("picture3", "sourdough", "real bread");

  // item1.

  // const item1Div = item1.createDiv();

  console.log(item1.title);

  // container.appendChild(item1);

  page.appendChild(header);
  page.appendChild(container);

  content.appendChild(page);
}
