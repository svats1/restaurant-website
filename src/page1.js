import { container, item1, item2, item3 } from "./pageItems";

export default function breads() {
  content.innerHTML = "";

  item1.textContent = "country loaf";
  item2.textContent = "milk toast";
  item3.textContent = "sourdough";

  content.appendChild(container);
}
