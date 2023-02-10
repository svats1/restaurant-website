import { header, page, container, item1, item2, item3 } from "./pageItems";

export default function pastries() {
  page.innerHTML = "";

  header.textContent = "Pastries!";
  item1.textContent = "berry tart";
  item2.textContent = "macarons";
  item3.textContent = "mille feuille";

  page.appendChild(header);
  page.appendChild(container);

  content.appendChild(page);
}
