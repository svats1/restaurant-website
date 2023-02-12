import { header, page, container, createItem } from "./pageItems";
import image1 from "../media/country-loaf.jpeg";
import image2 from "../media/milk-toast.jpeg";
import image3 from "../media/sourdough.jpeg";

export default function breads() {
  page.innerHTML = "";
  container.innerHTML = "";

  header.textContent = "Breads";

  createItem(`${image1}`, "country loaf", "your average bread");
  createItem(`${image2}`, "milk toast", "kiddie bread");
  createItem(`${image3}`, "sourdough", "real bread");

  page.appendChild(header);
  page.appendChild(container);

  content.appendChild(page);
}
