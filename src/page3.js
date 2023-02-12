import { header, page, container, createItem } from "./pageItems";
import image1 from "../media/berry-tart.jpeg";
import image2 from "../media/macarons.jpeg";
import image3 from "../media/mille-feuille.jpeg";

export default function pastries() {
  page.innerHTML = "";
  container.innerHTML = "";

  header.textContent = "Pastries";

  createItem(
    `${image1}`,
    "Berry Tart - $4",
    "A berry tart is a delicious dessert that features a flaky pastry crust filled with a sweet and tangy berry filling. The tart can be served either warm or cold, and is usually topped with a dollop of sweetened whipped cream. The berries used to fill the tart commonly include strawberries, raspberries, blueberries, and blackberries."
  );
  createItem(
    `${image2}`,
    "Macarons - $12/doz",
    "A macaron is a small round meringue-based French confection made with egg whites, sugar, almond powder or ground almond, and food colouring. Macarons are typically filled with butter cream, jam, or ganache and have a crisp shell and a soft, chewy interior. They are often served as a dessert or snack."
  );
  createItem(
    `${image3}`,
    "Mille Feuille - $5",
    "A mille-feuille is a French pastry composed of three layers of puff pastry alternating with two layers of pastry cream. It is often topped with a layer of icing and garnished with chopped nuts or candied fruit. It is a popular dessert in France and other parts of Europe, and is sometimes referred to as a Napoleon."
  );

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
