import { header, page, container, createItem } from "./pageItems";
import image1 from "../media/butter-croissant.jpeg";
import image2 from "../media/almond-croissant.jpeg";
import image3 from "../media/pain-au-chocolat.jpeg";

export default function croissants() {
  page.innerHTML = "";
  container.innerHTML = "";

  header.textContent = "Croissants";

  createItem(`${image1}`, "butter croissant", "The classic");
  createItem(`${image2}`, "almond croissant", "The fancy one");
  createItem(`${image3}`, "pain au chocolat", "The best one");

  page.appendChild(header);
  page.appendChild(container);

  content.appendChild(page);
}
