import { header, page, container, item1, item2, item3 } from "./pageItems";

export default function croissants() {
  page.innerHTML = "";

  header.textContent = "Croissants!";
  item1.textContent = "butter croissant";
  item2.textContent = "almond croissant";
  item3.textContent = "pain au chocolat";

  page.appendChild(header);
  page.appendChild(container);

  content.appendChild(page);
}
