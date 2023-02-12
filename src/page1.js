import { header, page, container, Item } from "./pageItems";
import image1 from "../media/country-loaf.jpeg";
import image2 from "../media/milk-toast.jpeg";
import image3 from "../media/sourdough.jpeg";

export default function breads() {
  page.innerHTML = "";
  container.innerHTML = "";

  header.textContent = "Breads";

  const item1 = new Item(`${image1}`, "country loaf", "your average bread");
  const item2 = new Item(`${image2}`, "milk toast", "kiddie bread");
  const item3 = new Item(`${image3}`, "sourdough", "real bread");

  page.appendChild(header);
  page.appendChild(container);

  content.appendChild(page);
}
