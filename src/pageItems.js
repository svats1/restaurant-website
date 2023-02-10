export const page = document.createElement("section");
export const header = document.createElement("h1");
export const container = document.createElement("div");
export const item1 = document.createElement("div");
export const item2 = document.createElement("div");
export const item3 = document.createElement("div");

const itemList = [item1, item2, item3];

// Each item has a picture, description, and title
itemList.forEach((element) => {
  const itemPicture = document.createElement("div");
  const itemTitle = document.createElement("div");
  const itemDesc = document.createElement("div");
  element.appendChild(itemPicture);
  element.appendChild(itemTitle);
  element.appendChild(itemDesc);
});

// Set class names
page.className = "page";
header.className = "heading";
container.className = "container";
item1.className = item2.className = item3.className = "item";

// Add items to container
container.appendChild(item1);
container.appendChild(item2);
container.appendChild(item3);

// Add elements to page
page.appendChild(header);
page.appendChild(container);
