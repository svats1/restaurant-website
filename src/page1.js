import { header, page, container, createItem } from "./pageItems";
import image1 from "../media/country-loaf.jpeg";
import image2 from "../media/milk-toast.jpeg";
import image3 from "../media/sourdough.jpeg";

export default function breads() {
  page.innerHTML = "";
  container.innerHTML = "";

  header.textContent = "Breads";

  createItem(
    `${image1}`,
    "Country Loaf - $6.5",
    "A country loaf is a type of bread that is rustic in nature. It is often made from a combination of white and whole-wheat flours and is typically leavened with yeast. Country loaves are often baked in a wood-fired oven, giving them a unique flavor and texture. This type of bread is usually dense and has a hearty flavor."
  );
  createItem(
    `${image2}`,
    "Milk Bread - $5",
    "Milk bread is a soft and sweet white bread made with milk, sugar, butter, and flour. It is usually made with all-purpose flour, giving it a light and fluffy texture. Milk bread is often used for toast and sandwiches, but it can also be enjoyed as a snack or dessert. The addition of milk makes it richer and moister than other white breads."
  );
  createItem(
    `${image3}`,
    "Sourdough - $8",
    "Sourdough is a type of bread that is made with a fermented dough starter, made with flour and water. It is known for its tangy, chewy texture and complex flavor. The starter is made from a mixture of flour and water, and is allowed to ferment for several days. This sourdough starter provides the leavening for the bread and gives it its distinctive flavor."
  );

  page.appendChild(header);
  page.appendChild(container);

  content.appendChild(page);
}
