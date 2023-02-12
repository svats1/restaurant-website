export const page = document.createElement("section");
export const header = document.createElement("h1");
export const container = document.createElement("div");

export function createItem(picture, title, desc) {
  const item = document.createElement("div");
  const itemPicture = document.createElement("div");
  const itemTitle = document.createElement("div");
  const itemDesc = document.createElement("div");

  item.className = "item";
  itemPicture.className = "item-picture";
  itemTitle.className = "item-title";
  itemDesc.className = "item-desc";

  itemPicture.style.backgroundImage = `url(${picture})`;
  itemTitle.textContent = title;
  itemDesc.textContent = desc;

  item.appendChild(itemPicture);
  item.appendChild(itemTitle);
  item.appendChild(itemDesc);

  container.appendChild(item);
}

// Set class names
page.className = "page";
header.className = "heading";
container.className = "container";

// Add elements to page
page.appendChild(header);
page.appendChild(container);
