import { addItem, addPhoto } from "./list-item.js";
import {
  containerFirst,
  containerSecond,
  items,
  photoListFirst,
  photoListSecond,
  photoContainerFirst,
  photoContainerSecond,
  address,
  deliveryAddress,
  costShipping,
  container,
} from "./data.js";
import { createElement } from "./order.js";

items.forEach((item) => addItem(item, containerFirst, containerSecond));

photoListFirst.forEach((item) => addPhoto(item.src, photoContainerFirst, item.number));
photoListSecond.forEach((item) => addPhoto(item.src, photoContainerSecond, item.number));

deliveryAddress.textContent = address.textContent;

createElement(costShipping, container, "cost-shipping_type_order");
