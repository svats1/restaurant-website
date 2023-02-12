import { header, page, container, createItem } from "./pageItems";
import image1 from "../media/butter-croissant.jpeg";
import image2 from "../media/almond-croissant.jpeg";
import image3 from "../media/pain-au-chocolat.jpeg";

export default function croissants() {
  page.innerHTML = "";
  container.innerHTML = "";

  header.textContent = "Croissants";

  createItem(
    `${image1}`,
    "Butter Croissant - $2",
    "A butter croissant is a light and flaky pastry made from a dough that contains butter and yeast. It is typically shaped into a crescent shape with a layered structure. The top of the croissant is often glazed for a glossy appearance. It is usually served as a breakfast or snack item, often filled with various ingredients such as cheese, ham, or chocolate."
  );
  createItem(
    `${image2}`,
    "Almond Croissant - $3.5",
    "An almond croissant is a light, flaky pastry made from croissant dough and filled with a sweet almond paste. It is usually topped with sliced almonds for a crunchy texture and a dash of sugar for sweetness. The outside of the croissant is golden brown and crisp, while the inside is light and soft. Enjoy it for breakfast or as a snack!"
  );
  createItem(
    `${image3}`,
    "Pain au Chocolat - $3",
    "A pain au chocolat is a French pastry made of puff pastry filled with chocolate. It is similar to a croissant, but with chocolate inside. It is usually served warm and often enjoyed as a breakfast or snack."
  );

  page.appendChild(header);
  page.appendChild(container);

  content.appendChild(page);
}
