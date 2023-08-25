import { listItemTemplate, unavailabilityItemTemplate } from "./data.js";

function createListItem(item) {
  const newItem = listItemTemplate.cloneNode(true);
  const image = newItem.querySelector(".basket__photo");
  const headerItem = newItem.querySelector(".basket__header-item");
  const color = newItem.querySelector(".basket__color");
  const size = newItem.querySelector(".basket__size");
  const textFirst = newItem.querySelector("#first");
  const textSecond = newItem.querySelector("#second");
  const remains = newItem.querySelector(".basket__remains");
  const priceNew = newItem.querySelector(".basket__price-new");
  const priceOld = newItem.querySelector("#cost");
  const wrapper = newItem.querySelector(".basket__wrapper");

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

  setListItem(priceNew, remains, color, wrapper);

  return newItem;
}

function createUnavailabilityItem(item) {
  const newItem = unavailabilityItemTemplate.cloneNode(true);
  const image = newItem.querySelector(".basket__photo");
  const headerItem = newItem.querySelector(".basket__header-item");
  const color = newItem.querySelector(".basket__color");
  const size = newItem.querySelector(".basket__size");
  const box = newItem.querySelector(".basket__box");

  image.src = item.srcInActive;
  image.alt = item.header;
  headerItem.textContent = item.header;
  color.textContent = item.color;
  size.textContent = item.size;
  box.style = "max-width: 72px";
  headerItem.style = "max-width: 309px";

  return newItem;
}

export function addItem(item, containerFirst, containerSecond) {
  const newItem = createListItem(item);
  const unavailabilityItem = createUnavailabilityItem(item);
  containerFirst.append(newItem);
  containerSecond.append(unavailabilityItem);
}

export function addPhoto(src, container) {
  const img = document.createElement("img");
  img.src = src;
  img.width = "40";
  img.height = "56";

  const li = document.createElement("li");
  li.className = "section-delivery__photo";
  li.append(img);

  container.append(li);
}

function setListItem(priceNew, remains, color, wrapper) {
  if (priceNew.textContent.length > 3) {
    priceNew.style = "font-size: 16px;line-height: 24px";
  }

  if (remains.textContent == "") {
    remains.remove();
  }

  if (color.textContent == "") {
    wrapper.remove();
  }
}
