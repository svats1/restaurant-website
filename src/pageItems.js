export const header = document.createElement("h2");
// export const page = document.createElement("section");
export const container = document.createElement("div");
export const item1 = document.createElement("div");
export const item2 = document.createElement("div");
export const item3 = document.createElement("div");

header.className = "heading";
container.className = "container";
item1.className = item2.className = item3.className = "item";

container.appendChild(item1);
container.appendChild(item2);
container.appendChild(item3);