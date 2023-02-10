import { container, header, item1, item2, item3 } from "./pageItems";

export default function croissants() {
  content.innerHTML = "";

  header.textContent = "Croissants!";

  item1.textContent = "butter croissant";
  item2.textContent = "almond croissant";
  item3.textContent = "pain au chocolat";

  content.appendChild(header);
  content.appendChild(container);
}
