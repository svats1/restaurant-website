export const page = document.createElement("section");
export const header = document.createElement("h1");
export const container = document.createElement("div");

export class Item {
  constructor(picture, title, desc) {
    (this.picture = picture), (this.title = title), (this.desc = desc);

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

    // return { item, itemPicture, itemTitle, itemDesc };
  }
}

// const item1 = new Item();

// const item1 = document.createElement("div");
// const item2 = document.createElement("div");
// const item3 = document.createElement("div");

// const itemList = [item1, item2, item3];

// // Each item has a picture, description, and title
// itemList.forEach((element) => {
//   const itemPicture = document.createElement("div");
//   const itemTitle = document.createElement("div");
//   const itemDesc = document.createElement("div");
//   itemPicture.className = "item-picture";
//   itemTitle.className = "item-title";
//   itemDesc.className = "item-desc";
//   element.appendChild(itemPicture);
//   element.appendChild(itemTitle);
//   element.appendChild(itemDesc);
// });

// export { item1, item2, item3 };

// Set class names
page.className = "page";
header.className = "heading";
container.className = "container";
// item1.className = item2.className = item3.className = "item";

// Add items to container
// container.appendChild(item1);
// container.appendChild(item2);
// container.appendChild(item3);

// Add elements to page
page.appendChild(header);
page.appendChild(container);
