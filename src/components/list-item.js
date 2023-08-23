import { listItemTemplate } from "./data.js";

function createListItem(item) {
  const newItem = listItemTemplate.cloneNode(true);
  const image = newItem.querySelector(".in-stock__photo");
  const headerItem = newItem.querySelector(".in-stock__header-item");
  const color = newItem.querySelector(".in-stock__color");
  const size = newItem.querySelector(".in-stock__size");
  const textFirst = newItem.querySelector("#first");
  const textSecond = newItem.querySelector("#second");
  const remains = newItem.querySelector(".in-stock__remains");
  const priceNew = newItem.querySelector(".in-stock__price-new");
  const priceOld = newItem.querySelector("#cost");

  image.src = item.src;
  image.alt = item.header;
  headerItem.textContent = item.header;
  color.textContent = item.color;
  size.textContent = item.size;
  textFirst.textContent = item.textFirst;
  textSecond.textContent = item.textSecond;
  remains.textContent = item.remains;
  priceNew.textContent = item.priceNew;
  priceOld.textContent = item.priceOld;

  return newItem;
}

export function addItem(item, container) {
  const newItem = createListItem(item);
  container.append(newItem);
}
