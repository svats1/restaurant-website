import { container, item1, item2, item3 } from "./pageItems";

export default function breads() {
  content.innerHTML = "";

  item1.textContent = "item1";
  item2.textContent = "item2";
  item3.textContent = "item3";

  content.appendChild(container);
}
