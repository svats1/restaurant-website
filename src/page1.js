import { header, page, container, item1, item2, item3 } from "./pageItems";

export default function breads() {
  page.innerHTML = "";

  header.textContent = "Breads!";
  item1.textContent = "country loaf";
  item2.textContent = "milk toast";
  item3.textContent = "sourdough";

  //   content.appendChild(header);
  //   content.appendChild(container);

  page.appendChild(header);
  page.appendChild(container);

  content.appendChild(page);
}
