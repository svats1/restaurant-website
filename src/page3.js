import { header, page, container, createItem } from "./pageItems";
import image1 from "../media/berry-tart.jpeg";
import image2 from "../media/macarons.jpeg";
import image3 from "../media/mille-feuille.jpeg";

export default function pastries() {
  page.innerHTML = "";
  container.innerHTML = "";

  header.textContent = "Pastries";

  createItem(`${image1}`, "berry tart", "Seasonal");
  createItem(`${image2}`, "macarons", "Obligatory");
  createItem(`${image3}`, "mille feuille", "Refined");

  page.appendChild(header);
  page.appendChild(container);

  content.appendChild(page);
}
// import { header, page, container, item1, item2, item3 } from "./pageItems";

// export default function pastries() {
//   page.innerHTML = "";

//   header.textContent = "Pastries!";
//   // item1.textContent = "berry tart";
//   // item2.textContent = "macarons";
//   // item3.textContent = "mille feuille";

//   page.appendChild(header);
//   page.appendChild(container);

//   content.appendChild(page);
// }
