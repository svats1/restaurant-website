import { container, item1, item2, item3 } from "./pageItems";

export default function pastries() {
  content.innerHTML = "";

  item1.textContent = "berry tart";
  item2.textContent = "macarons";
  item3.textContent = "mille feuille";

  content.appendChild(container);
}
