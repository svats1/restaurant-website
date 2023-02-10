import { container, header, item1, item2, item3 } from "./pageItems";

export default function pastries() {
  content.innerHTML = "";

  header.textContent = "Pastries!";

  item1.textContent = "berry tart";
  item2.textContent = "macarons";
  item3.textContent = "mille feuille";

  content.appendChild(header);
  content.appendChild(container);
}
